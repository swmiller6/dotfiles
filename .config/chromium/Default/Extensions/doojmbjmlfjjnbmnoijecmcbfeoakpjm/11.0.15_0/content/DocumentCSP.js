'use strict';

class DocumentCSP {
  constructor(document) {
    this.document = document;
    this.builder = new CapsCSP();
  }

  apply(capabilities, embedding = CSP.isEmbedType(this.document.contentType)) {
    let {document} = this;
    if (!(document instanceof HTMLDocument)) {
      // this is not HTML, hence we cannot inject a <meta> CSP
      if (!capabilities.has("script")) {
        // safety net for XML (especially SVG) documents
        document.defaultView.addEventListener("beforescriptexecute",
          e => e.preventDefault(), true);
      }
      return false;
    }
    let csp = this.builder;
    let blocker = csp.buildFromCapabilities(capabilities, embedding);
    if (!blocker) return true;

    let createHTMLElement =
      tagName => document.createElementNS("http://www.w3.org/1999/xhtml", tagName);

    let header = csp.asHeader(blocker);
    let meta = createHTMLElement("meta");
    meta.setAttribute("http-equiv", header.name);
    meta.setAttribute("content", header.value);
    let root = document.documentElement;
    let {head} = document;
    let parent = head ||
      (root instanceof HTMLElement
        ? document.documentElement.appendChild(createHTMLElement("head"))
        : root);

    try {
      parent.insertBefore(meta, parent.firstElementChild);
      debug(`Failsafe <meta> CSP inserted in %s: "%s"`, document.URL, header.value);
      meta.remove();
      if (!head) parent.remove();
    } catch (e) {
      error(e, "Error inserting CSP %s in %s", document.URL, header && header.value);
      return false;
    }
    return true;
  }

}

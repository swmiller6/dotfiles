/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a=this||self,b=function(f,k){f=f.split(".");var e=a;f[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]&&e[g]!==Object.prototype[g]?e[g]:e[g]={}:e[g]=k};var c={c:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},b:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}};
c={c:{1E3:{other:"0\u00a0N"},1E4:{other:"00\u00a0N"},1E5:{other:"000\u00a0N"},1E6:{other:"0\u00a0Tr"},1E7:{other:"00\u00a0Tr"},1E8:{other:"000\u00a0Tr"},1E9:{other:"0\u00a0T"},1E10:{other:"00\u00a0T"},1E11:{other:"000\u00a0T"},1E12:{other:"0\u00a0NT"},1E13:{other:"00\u00a0NT"},1E14:{other:"000\u00a0NT"}},b:{1E3:{other:"0 ngh\u00ecn"},1E4:{other:"00 ngh\u00ecn"},1E5:{other:"000 ngh\u00ecn"},1E6:{other:"0 tri\u1ec7u"},1E7:{other:"00 tri\u1ec7u"},1E8:{other:"000 tri\u1ec7u"},1E9:{other:"0 t\u1ef7"},
1E10:{other:"00 t\u1ef7"},1E11:{other:"000 t\u1ef7"},1E12:{other:"0 ngh\u00ecn t\u1ef7"},1E13:{other:"00 ngh\u00ecn t\u1ef7"},1E14:{other:"000 ngh\u00ecn t\u1ef7"}}};var d={ga:"y",na:"y G",ha:"MMM y",ia:"MMMM y",oa:"MM/y",G:"MMM d",H:"MMMM dd",J:"M/d",I:"MMMM d",la:"MMM d, y",ea:"EEE, MMM d",ma:"EEE, MMM d, y",i:"d",ka:"MMM d, h:mm a zzzz"};d={ga:"y",na:"y G",ha:"MMM y",ia:"MMMM 'n\u0103m' y",oa:"'th\u00e1ng' MM, y",G:"d MMM",H:"dd MMMM",J:"dd/M",I:"d MMMM",la:"d MMM, y",ea:"EEE, d MMM",ma:"EEE, d MMM, y",i:"d",ka:"HH:mm zzzz, d MMM"};var h={s:["BC","AD"],o:["Before Christ","Anno Domini"],L:"JFMAMJJASOND".split(""),Y:"JFMAMJJASOND".split(""),F:"January February March April May June July August September October November December".split(" "),X:"January February March April May June July August September October November December".split(" "),U:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),$:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),da:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ba:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),W:"Sun Mon Tue Wed Thu Fri Sat".split(" "),aa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),M:"SMTWTFS".split(""),Z:"SMTWTFS".split(""),V:["Q1","Q2","Q3","Q4"],S:["1st quarter","2nd quarter","3rd quarter","4th quarter"],a:["AM","PM"],g:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ca:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],h:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],v:6,fa:[5,6],A:5};
h={s:["Tr\u01b0\u1edbc CN","sau CN"],o:["Tr\u01b0\u1edbc CN","sau CN"],L:"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),Y:"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),F:"th\u00e1ng 1;th\u00e1ng 2;th\u00e1ng 3;th\u00e1ng 4;th\u00e1ng 5;th\u00e1ng 6;th\u00e1ng 7;th\u00e1ng 8;th\u00e1ng 9;th\u00e1ng 10;th\u00e1ng 11;th\u00e1ng 12".split(";"),X:"Th\u00e1ng 1;Th\u00e1ng 2;Th\u00e1ng 3;Th\u00e1ng 4;Th\u00e1ng 5;Th\u00e1ng 6;Th\u00e1ng 7;Th\u00e1ng 8;Th\u00e1ng 9;Th\u00e1ng 10;Th\u00e1ng 11;Th\u00e1ng 12".split(";"),
U:"thg 1;thg 2;thg 3;thg 4;thg 5;thg 6;thg 7;thg 8;thg 9;thg 10;thg 11;thg 12".split(";"),$:"Thg 1;Thg 2;Thg 3;Thg 4;Thg 5;Thg 6;Thg 7;Thg 8;Thg 9;Thg 10;Thg 11;Thg 12".split(";"),da:"Ch\u1ee7 Nh\u1eadt;Th\u1ee9 Hai;Th\u1ee9 Ba;Th\u1ee9 T\u01b0;Th\u1ee9 N\u0103m;Th\u1ee9 S\u00e1u;Th\u1ee9 B\u1ea3y".split(";"),ba:"Ch\u1ee7 Nh\u1eadt;Th\u1ee9 Hai;Th\u1ee9 Ba;Th\u1ee9 T\u01b0;Th\u1ee9 N\u0103m;Th\u1ee9 S\u00e1u;Th\u1ee9 B\u1ea3y".split(";"),W:"CN;Th 2;Th 3;Th 4;Th 5;Th 6;Th 7".split(";"),aa:"CN;Th 2;Th 3;Th 4;Th 5;Th 6;Th 7".split(";"),
M:"CN T2 T3 T4 T5 T6 T7".split(" "),Z:"CN T2 T3 T4 T5 T6 T7".split(" "),V:["Q1","Q2","Q3","Q4"],S:["Qu\u00fd 1","Qu\u00fd 2","Qu\u00fd 3","Qu\u00fd 4"],a:["SA","CH"],g:["EEEE, d MMMM, y","d MMMM, y","d MMM, y","dd/MM/y"],ca:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],h:["{0} {1}","{0} {1}","{0}, {1}","{0}, {1}"],v:0,fa:[5,6],A:6};var l={l:".",B:",",N:"%",ja:"0",R:"+",D:"-",u:"E",P:"\u2030",C:"\u221e",K:"NaN",j:"#,##0.###",T:"#E0",O:"#,##0%",f:"\u00a4#,##0.00",m:"USD"};l={l:",",B:".",N:"%",ja:"0",R:"+",D:"-",u:"E",P:"\u2030",C:"\u221e",K:"NaN",j:"#,##0.###",T:"#E0",O:"#,##0%",f:"#,##0.00\u00a0\u00a4",m:"VND"};b("I18N_DATETIMESYMBOLS_ERAS",h.s);b("I18N_DATETIMESYMBOLS_ERANAMES",h.o);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.L);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.Y);b("I18N_DATETIMESYMBOLS_MONTHS",h.F);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.X);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.U);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.$);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.da);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.ba);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.W);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.aa);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.M);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.Z);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.V);b("I18N_DATETIMESYMBOLS_QUARTERS",h.S);b("I18N_DATETIMESYMBOLS_AMPMS",h.a);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.g);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ca);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.h);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.v);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.fa);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.A);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.ga);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.ha);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.ia);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.G);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.H);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.J);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.I);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.ea);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.i);
void 0!==h.pa&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.pa);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.l);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.B);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.N);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.ja);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.R);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.D);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.u);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.P);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.C);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.K);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.j);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.T);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.O);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.f);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.m);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.c);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.b);
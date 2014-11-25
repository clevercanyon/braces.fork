module.exports = [
  ["/usr/{ucb/{ex,edit},lib/{ex,how_ex}}", ['/usr/ucb/ex', '/usr/lib/ex', '/usr/ucb/edit', '/usr/lib/how_ex']],
  ["\\{a,b,c,d,e}", ['{a,b,c,d,e}']],
  ["abcd{efgh", ['abcd{efgh']],
  ["ff{c,b,a}", ['ffc', 'ffb', 'ffa']],
  ["f{d,e,f}g", ['fdg', 'feg', 'ffg']],
  ["x{10..1}y", ['x10y', 'x9y', 'x8y', 'x7y', 'x6y', 'x5y', 'x4y', 'x3y', 'x2y', 'x1y']],
  ["x{3..3}y", ['x3y']],
  ["{", ['{']],
  ["{-1..-10..-2}", ['-1', '-3', '-5', '-7', '-9']],
  ["{-1..-10..2}", ['-1', '-3', '-5', '-7', '-9']],
  ["{-1..-10}", ['-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9', '-10']],
  ["{-20..0}", ['-20', '-19', '-18', '-17', '-16', '-15', '-14', '-13', '-12', '-11', '-10', '-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1', '0']],
  ["{-50..-0..5}", ['-50', '-45', '-40', '-35', '-30', '-25', '-20', '-15', '-10', '-5', '0']],
  ["{1..0f}", ['{1..0f}']],
  ["{1..10..2}", ['1', '3', '5', '7', '9']],
  ["{1..10..ff}", ['{1..10..ff}']],
  ["{1..10.f}", ['{1..10.f}']],
  ["{1..10f}", ['{1..10f}']],
  ["{1..10}", ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']],
  ["{1..20..20}", ['1']],
  ["{1..20..2f}", ['{1..20..2f}']],
  ["{1..20..2}", ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19']],
  ["{1..20..f2}", ['{1..20..f2}']],
  ["{1..2f..2}", ['{1..2f..2}']],
  ["{1..ff..2}", ['{1..ff..2}']],
  ["{1..ff}", ['{1..ff}']],
  ["{1..f}", ['{1..f}']],
  ["{1.20..2}", ['{1.20..2}']],
  ["{10..0..-2}", ['10', '8', '6', '4', '2', '0']],
  ["{10..0..2}", ['10', '8', '6', '4', '2', '0']],
  ["{10..1..-2}", ['10', '8', '6', '4', '2']],
  ["{10..1..2}", ['10', '8', '6', '4', '2']],
  ["{10..1}", ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']],
  ["{10..1}y", ['10y', '9y', '8y', '7y', '6y', '5y', '4y', '3y', '2y', '1y']],
  ["{100..0..-5}", ['100', '95', '90', '85', '80', '75', '70', '65', '60', '55', '50', '45', '40', '35', '30', '25', '20', '15', '10', '5', '0']],
  ["{100..0..5}", ['100', '95', '90', '85', '80', '75', '70', '65', '60', '55', '50', '45', '40', '35', '30', '25', '20', '15', '10', '5', '0']],
  ["{2147483645..2147483649}", ['2147483645', '2147483646', '2147483647', '2147483648', '2147483649']],
  ["{3..3}", ['3']],
      // one difference from bash - the \\ is '' in bash. this is a javascript difference, thus consistent with the language
  ["{A..a}", ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a']],
      // one difference from bash - the \\ is '' in bash. this is a javascript difference, thus consistent with the language
  ["{a..A}", ['a', '`', '_', '^', ']', '\\', '[', 'Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']],
  ["{a..f}", ['a', 'b', 'c', 'd', 'e', 'f']],
  ["{a..z..2}", ['a', 'c', 'e', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y']],
  ["{a..z}", ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']],
  ["{abc\\,def}", ['{abc,def}']],
  ["{f..1}", ['{f..1}']],
  ["{f..a}", ['f', 'e', 'd', 'c', 'b', 'a']],
  ["{f..f}", ['f']],
  ["{l,n,m}xyz", ['lxyz', 'nxyz', 'mxyz']],
  ["{z..a..-2}", ['z', 'x', 'v', 't', 'r', 'p', 'n', 'l', 'j', 'h', 'f', 'd', 'b']],
  ["{}", ['{}']],
  ["}", ['}']],
  ['{1..0f}', [ '{1..0f}' ]],
  ['{1..10..ff}', [ '{1..10..ff}' ]],
  ['{1..10.f}', [ '{1..10.f}' ]],
  ['{1..10f}', [ '{1..10f}' ]],
  ['{1..20..2f}', [ '{1..20..2f}' ]],
  ['{1..20..f2}', [ '{1..20..f2}' ]],
  ['{1..2f..2}', [ '{1..2f..2}' ]],
  ['{1..ff..2}', [ '{1..ff..2}' ]],
  ['{1..ff}', [ '{1..ff}' ]],
  ['{1..f}', [ '{1..f}' ]],
  ['{1.20..2}', [ '{1.20..2}' ]]
];

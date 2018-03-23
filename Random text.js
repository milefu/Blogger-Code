var quotes = [
'网友：阶级论，是有人类以來最邪恶的变异文化的歪理邪说！它使人类走向恐怖导向邪恶的精神牙片与搞乱人类自然生存状态的烟雾弹！阶级的概念混淆了善恶的标准！然而阶级论使人类走向了一种恶性循环的状态，以至导致人类走向互相残杀，促使人性殆尽自取灭亡的魔鬼时代！',
'困难群众的寒舍风能进，雨能进，国王不能进。',
'正义不仅要实现，而且要以人们看得见的方式实现。',
'一次不公正的判决，其恶果相当于10次犯罪。--弗兰西斯·培根',
'如果同一批人同时拥有制定和执行法律的权利，这就会给人们的弱点以绝大诱惑，使他们动辄要攫取权力，借以使他们自己免予服从他们所制定的法律，并且在制定和执行法律时，使法律适合于他们自己的私人利益。--[英]洛克《政府论》'
];
document.write (quotes[Math.floor (Math.random () * quotes.length)]);
var rand = function ()
{
var btn = document.getElementById ('btn');
var str = quotes[Math.floor (Math.random () * quotes.length)];
if (!this.txt)
{
this.txt = document.createTextNode (str);
document.body.insertBefore (this.txt, btn);
}
else
{
this.txt.nodeValue = str;    
}
}
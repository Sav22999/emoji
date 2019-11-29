var emojis = ["😀", "😄", "😁", "😆", "😅", "😂", "🙂", "😉", "😇", "😍", "🤩", "😘", "😗", "😛", "😜", "🤗", "🤢", "🤮", "🥵", "🥶", "☹️", "😮", "😨", "😰", "😭", "😱", "😤", "😡", "😈", "👌", "✌️", "👍", "👎", "🙏"];
var n_emojis = 0;

function copyEmoji(text)
{
	document.getElementById("text_to_copy").style.display="block";
	document.getElementById("text_to_copy").value = text;
	var copyText=document.getElementById("text_to_copy");
	copyText.select();
	document.execCommand("copy");
	document.getElementById("text_to_copy").style.display="none";
}

function setEmojis()
{

	//var n_temp = document.getElementsByClassName("symbol").length;
	//n_symbols = n_temp;
	n_emojis = emojis.length;
	for(var i=0;i<n_emojis;i++)
	{
		document.getElementById("emojis").innerHTML += "<input type=\"button\" class=\"emoji\" value=\""+emojis[i]+"\" />";
	}
}

setEmojis();

for(var i=0;i<n_emojis;i++)
{
	document.getElementsByClassName("emoji")[i].onclick = function(e){copyEmoji(this.value);};
}
//your JS code here. If required.
let str=prompt("enter a string");
let freq=[];
for(let i=0;i<freq.length;i++)
	{
		if(freq[str[i]])
		{
			freq[str[i]]++;
		}
		else{
			freq[str[i]]=1;
		}
	}
for(let i=0;i<str.length;i++)
	{
		if(freq[str[i]]==1)
		{
			alert(str[i]);
			break;
		}
	}
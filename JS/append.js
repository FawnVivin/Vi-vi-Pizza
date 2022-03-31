function append(){
        
		var kol_vo = document.getElementById('kol');
		var text = kol_vo.textContent;
		var number = Number(text);
        number+=1;
		document.getElementById('kol').innerHTML= number;
		}


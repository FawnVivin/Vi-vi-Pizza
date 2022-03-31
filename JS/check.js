function check()
{		  

        var q1 = document.querySelector('input[name="ans1"]:checked').value;
		var n1 = Number(q1);
		var q2 = document.querySelector('input[name="ans2"]:checked').value;
		var n2 = Number(q2);
		var q3 = document.querySelector('input[name="ans3"]:checked').value;
		var n3 = Number(q3);
        var q4 = document.querySelector('input[name="ans4"]:checked').value;
		var n4 = Number(q4);
		var q5 = document.querySelector('input[name="ans5"]:checked').value;
		var n5 = Number(q5);
		var q6 = document.querySelector('input[name="ans6"]:checked').value;
		var n6 = Number(q6);
		var n=0;
n=n1+n2+n3+n4+n5+n6;
document.getElementById('p_rezult').innerHTML=(n/6).toFixed(1)+"★";
}
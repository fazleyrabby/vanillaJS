

const btn = document.querySelector('#click');

const html = document.querySelector('#show');
const msg = "Now Click again to <strong>HIDE IT</strong>";



btn.onclick = () => {
	if (html.innerText == '') {

		html.innerHTML = 
		`
		<h4 style='box-shadow: 0 0 4px 0 black;padding:2rem 0;text-align:center'>Thanks for the click &#128520;</h4>
		<p>${msg}</p>
		`;
		btn.innerHTML = 
  		`<span>&#129323;</span>`
		;

		// setTimeout(() => { html.style.display = 'none';} , 5000);

	}
	else{
		html.innerHTML = "";
		btn.innerHTML = `<span>&#129488;</span>`;	
	}
};
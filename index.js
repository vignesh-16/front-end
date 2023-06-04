window.onload = async () => {
    const json = await fetch('./data.json')
    const data = await json.json()
    console.log(data)
    for (let i=0; i<data.length; i++) {
        const section = (document.getElementsByClassName("section")[i]);
        section.classList.add(data[i].category)
        const firstChild = section.firstChild;
        const icon = document.createElement('img');
        icon.src = data[i].icon;
        icon.alt = 'Description of the image';
        section.insertBefore(icon, firstChild);
        (section.querySelector('.trait')).textContent = data[i].category;
        (section.querySelector('.scored')).textContent = data[i].score;
        //console.log(section)
    }
}
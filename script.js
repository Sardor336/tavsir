



function btnSearch() {
    let input1 = document.querySelector('input')
    let abtn = document.querySelector('form')
    var xhr = new XMLHttpRequest()
    xhr.open(
        'GET',
        'https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/uzb-alauddinmansour.json',
        true
    )
    xhr.send()

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) {
            return
        }

        if (xhr.status === 200) {
            // console.log('result', xhr.responseText)
            console.log('result', JSON.parse(xhr.responseText).quran[+input1.value].text)
            text = JSON.parse(xhr.responseText).quran[+input1.value].text
            abtn.insertAdjacentHTML('afterEnd', `<p>${text}</p>`)
        } else {
            console.log('err', xhr.responseText)
        }
    }

    // console.log('salom', typeof +input1.value);
}

// const form = document.querySelector('.my')

// console.log(form);
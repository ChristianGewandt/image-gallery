
let images = ['./img/imge(0).jpg','./img/imge(1).jpg', './img/imge(2).jpg', './img/imge(3).jpg', './img/imge(4).jpg', './img/imge(5).jpg', './img/imge(6).jpg', './img/imge(7).jpg', './img/imge(8).jpg', './img/imge(9).jpg', './img/imge(10).jpg/', './img/imge(11).jpg', './img/imge(12).jpg', './img/imge(13).jpg', './img/imge(14).jpg', './img/imge(15).jpg', './img/imge(16).jpg', './img/imge(17).jpg', './img/imge(18).jpg', './img/imge(19).jpg', './img/imge(20).jpg', './img/imge(21).jpg', './img/imge(22).jpg']

function load() {
    for (let i = 0; i < images.length ; i++) {
        document.getElementById('content').innerHTML += `
        <img src='./img/imge(${i}).jpg' onclick='openIMG(${i})'>
        `;
    }
}
function cekStand(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong',
        ];
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let Stand = [
                { name: "Star Platinum", img: "img/SP.png" },
                { name: "Magician's Red", img: "img/mr.png" },
                { name: "Hermit Purple", img: "img/hp.png" },
                { name: "Silver Chariot", img: "img/sc.png" },
                { name: "The World", img: "img/tw.png" },
                { name: "Crazy Diamond", img: "img/cd.png" },
                { name: "The Hand", img: "img/th.png" },
                { name: "Echoes", img: "img/e.png" },
                { name: "Killer Queen", img: "img/kq.png" },
                { name: "Heaven's Door", img: "img/hd.png" },
                { name: "Gold Experience", img: "img/ge.png" },
                { name: "Sticky Fingers", img: "img/sf.png" },
                { name: "Aerosmith", img: "img/a.png" },
                { name: "Purple Haze", img: "img/p.png" },
                { name: "King Crimson", img: "img/kc.png" },
                { name: "Stone Free", img: "img/st.png" },
                { name: "Kiss", img: "img/k.png" },
                { name: "Diver Down", img: "img/dd.png" },
                { name: "Whitesnake", img: "img/w.png" },
                { name: "Made in Heaven", img: "img/m.png" },
                { name: "Tusk", img: "URL_IMAGE_TUSK" },
                { name: "Ball Breaker", img: "img/bb.png" },
                { name: "Dirty Deeds Done Dirt Cheap", img: "img/d4.png" },
                { name: "Scary Monsters", img: "img/sm.png" },
                { name: "The World (Alternate Diego)", img: "img/twd.png" },
                { name: "Soft & Wet", img: "img/sw.png" },
                { name: "Paisley Park", img: "img/pp.png" },
                { name: "I Am a Rock", img: "img/im.png" },
                { name: "Wonder of U", img: "img/wo.png" },
                { name: "Doctor Wu", img: "img/dw.png" }
            ];

            const random = Math.floor(Math.random() * Stand.length);
            $('#result').html(`${nama} - Stand Kamu (${Stand[random].name}) <br> <img src="${Stand[random].img}" style="width: 200px" alt="${Stand[random].name}">`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama} - Kamu NPC <br> <img src="img/npc.png" style="width: 200px" alt="yahaha npc">`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekStand);
});

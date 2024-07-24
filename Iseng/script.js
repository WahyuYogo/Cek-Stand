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
                "Star Platinum",
                "Magician's Red",
                "Hermit Purple",
                "Silver Chariot",
                "The World",
                "Crazy Diamond",
                "The Hand",
                "Echoes",
                "Killer Queen",
                "Heaven's Door",
                "Gold Experience",
                "Sticky Fingers",
                "Aerosmith",
                "Purple Haze",
                "King Crimson",
                "Stone Free",
                "Kiss",
                "Diver Down",
                "Whitesnake",
                "Made in Heaven",
                "Tusk",
                "Ball Breaker",
                "Dirty Deeds Done Dirt Cheap",
                "Scary Monsters",
                "The World (Alternate Diego)",
                "Soft & Wet",
                "Paisley Park",
                "I Am a Rock",
                "Wonder of U",
                "Doctor Wu"
            ];
            
            const random = Math.floor(Math.random() * Stand.length);
            $('#result').html(`${nama} - Stand Kamu (${Stand[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama} - Kamu NPC`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekStand);
});

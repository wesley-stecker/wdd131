const button = document.getElementById('add')

let participantCount = 1

function participantTemplate(count) {
    return `
        <section class="participant" id="participant${count}">
            <label for="name${count}">Name:</label>
            <input type="text" id="name${count}" name="name${count}">
            <label for="age${count}">Age:</label>
            <input type="number" id="age${count}" name="age${count}">
        </section>
    `;
}

button.addEventListener('click', function(){
    participantCount++

    const newParticipantHTML = participantTemplate(participantCount);
    button.insertAdjacentHTML('beforebegin', newParticipantHTML);

}
);
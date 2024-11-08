const addButton = document.getElementById('add');
const form = document.querySelector('form'); // Changed from getElementById('submitButton')
let participantCount = 1;

function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname${count}">First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname" required>
            </div>
            <div class="item activities">
              <label for="activity${count}">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity">
            </div>
            <div class="item">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee">
            </div>
            <div class="item">
              <label for="date${count}">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date">
            </div>
            <div class="item">
              <p>Grade</p>
              <select id="grade${count}">
                <option value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>
    `;
}

addButton.addEventListener('click', function() {
    participantCount++;
    const newParticipantHTML = participantTemplate(participantCount);
    addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
});

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    console.log(feeElements);
    let total = feeElements.reduce((sum, elem) => {
        const value = parseFloat(elem.value) || 0;
        return sum + value;
    }, 0);
    return total.toFixed(2); // Format to 2 decimal places
}

function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.numParticipants} participants and owe $${info.totalFees} in Fees.`;
}

function submitForm(event) {
    event.preventDefault();
    
    const adultName = document.querySelector('[name="adult_name"]').value;
    const feeTotal = totalFees();
    const numParticipants = document.querySelectorAll("[id^=fee]").length;
    
    form.style.display = "none";
    
    const summary = document.getElementById('summary');
    summary.innerHTML = successTemplate({
        name: adultName,
        numParticipants,
        totalFees: feeTotal
    });
    summary.style.display = "block";
}

form.addEventListener('submit', submitForm);
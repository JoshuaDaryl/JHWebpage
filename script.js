

function changeBio(){
    let clicked = document.getElementById("intro")
    clicked.innerText = "\nHi, Josh here.\n\nThanks for visiting my webpage. I am a hard working person with a keen interest in technology, computers, and learning. I have a long history of experience in customer facing roles, team-working, CPD, and work specific technologies. My experiences throughout the years have led me here, making a decision to change my career to something I am truly passionate about, software development.\n\n Awarded school prize for 'Best practical performance' in Hearing Aid Audiology has allowed me to believe I can excel and achieve as long as I put my mind to it.\n\n I am currently earning a L3 diploma in software development, learning fundamentals such as project management, alongside learning key programming languages such as Python and JavaScript. I aim to continually add to my portfolio as I continue on this path to highlight the progress and skills I have attained.";
    clicked.style = "padding-left:30px; padding-right:30px; font-size:20px; display:flex; flex-direction: row; flex-wrap: wrap; align-items: center; text-align:center";
    
}

function changePortfolio(){
    let clicked = document.getElementById("intro");
    clicked.innerText = "Under construction, please see my github for coding projects undertaken recently.";
    clicked.style = "font-size:30px; display:flex; flex-direction: row; flex-wrap: wrap; align-items: center; text-align:center";

}

function changeContact() {
    let clicked = document.getElementById("intro");
    
    let formHtml = `
       
        <form action="https://formspree.io/f/mdorebzb" method="POST">
            <div class="form">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name..." required>
            </div>
            <div class="form">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email..." required>
            </div>
            <div class="form">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Please enter subject title..." required>
            </div>
            <div class="form">    
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Hi, please leave a message and I will get back to you as soon as possible..." required"></textarea>
                <input type="submit" id="submit" value="Submit">
            </div>    
        </form>
        </div>
    `;
    
    clicked.innerHTML = formHtml;
}

function changeHome(){
    let clicked = document.getElementById("intro");
    clicked.innerHTML = '<p>"HI"</p><p>&lt;WELCOME&gt;</p><p>&#128075;</p>';
    clicked.style = "";   

}



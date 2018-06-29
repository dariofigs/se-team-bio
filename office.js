var queryURL = "https://api.myjson.com/bins/1ez4l2";
var jsonTree;
var listQuestions
var listOfQuestions = ["LinkedIn:","Hometown:","Birthday:","Favorite Movie:","Favorite Pastime:","Favorite Travel Destination:","Favorite 90's Jam:","If you were stranded on an island, what 2 things would you want with you?:","If you could be a sandwich, what sandwich would you be and why? (one sentence):","If you could be one person for an entire day (dead or alive), who would it be and why? (one sentence):","Do you have any skills or talents that most people don’t know about?:","What is one thing that annoys you the most?:","Fun Fact about yourself:"]


$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {
    var keyWord = new URL(document.location).searchParams.get("office");
    $("#officeImage").addClass(keyWord);

    officeEmployees = response.offices[keyWord].employees;
    console.log(officeEmployees);

    for(var i = 0;i<officeEmployees.length;i++){
    //DISPLAY FOR A PERSON
    let people = $(".people");

    let outsideList = $("<li>");
    let img = $("<img>").attr("alt",officeEmployees[i].name);
    img.attr("src","images/"+keyWord+"/"+officeEmployees[i].profile_pic+".jpg");

    let div = $("<div>");
    let h3 = $("<h3>").html(officeEmployees[i].name).addClass("f3");
    let span = $("<span>").addClass("bar little-bar");
    let p = $("<p>").addClass("i measure-wide").html(officeEmployees[i].fav_quote);
    let ul = $("<ul>").addClass("about");

    //about 
    let li1 = $("<li>");
    let b1 = $("<b>").html(listOfQuestions[0]+"&nbsp;");
    li1.append(b1);
    li1.append(officeEmployees[i].linkedin);
    let li2 = $("<li>");
    let b2 = $("<b>").html(listOfQuestions[1]+"&nbsp;");
    li2.append(b2);
    li2.append(officeEmployees[i].hometown);
    let li3 = $("<li>");
    let b3 = $("<b>").html(listOfQuestions[2]+"&nbsp;");
    li3.append(b3);
    li3.append(officeEmployees[i].birthday);
    let li4 = $("<li>");
    let b4 = $("<b>").html(listOfQuestions[3]+"&nbsp;");
    li4.append(b4);
    li4.append(officeEmployees[i].fav_movie);
    let li5 = $("<li>");
    let b5 = $("<b>").html(listOfQuestions[4]+"&nbsp;");
    li5.append(b5);
    li5.append(officeEmployees[i].fav_pasttime);
    let li6 = $("<li>");
    let b6 = $("<b>").html(listOfQuestions[5]+"&nbsp;");
    li6.append(b6);
    li6.append(officeEmployees[i].fav_travel);
    let li7 = $("<li>");
    let b7 = $("<b>").html(listOfQuestions[6]+"&nbsp;");
    li7.append(b7);
    li7.append(officeEmployees[i].fav_90s_jam);
    let li8 = $("<li>");
    let b8 = $("<b>").html(listOfQuestions[7]+"&nbsp;");
    li8.append(b8);
    li8.append(officeEmployees[i].stranded);
    let li9 = $("<li>");
    let b9 = $("<b>").html(listOfQuestions[8]+"&nbsp;");
    li9.append(b9);
    li9.append(officeEmployees[i].sandwich);
    let li10 = $("<li>");
    let b10 = $("<b>").html(listOfQuestions[9]+"&nbsp;");
    li10.append(b10);
    li10.append(officeEmployees[i].could_be_anyone);
    let li11 = $("<li>");
    let b11 = $("<b>").html(listOfQuestions[10]+"&nbsp;");
    li11.append(b11);
    li11.append(officeEmployees[i].skills);
    let li12 = $("<li>");
    let b12 = $("<b>").html(listOfQuestions[11]+"&nbsp;");
    li12.append(b12);
    li12.append(officeEmployees[i].most_annoyed_by);
    let li13 = $("<li>");
    let b13 = $("<b>").html(listOfQuestions[12]+"&nbsp;");
    li13.append(b13);
    li13.append(officeEmployees[i].fun_fact);

    ul.append(li1);
    ul.append(li2);
    ul.append(li3);
    ul.append(li4);
    ul.append(li5);
    ul.append(li6);
    ul.append(li7);
    ul.append(li8);
    ul.append(li9);
    ul.append(li10);
    ul.append(li11);
    ul.append(li12);
    ul.append(li13);

    div.append(h3);
    div.append(span);
    div.append(p);
    div.append(ul);
    outsideList.append(img);
    outsideList.append(div);
    people.append(outsideList);
    }

    let personDiv = $('.people li');
personDiv.click(function(event) {
    if ($(event.target).is('li')) {
        let aboutList = $(event.target).find( ".about" );
        aboutList.slideToggle(600);
    } else {
        aboutList = $(event.target).parent().find( ".about" );
        aboutList.slideToggle(600);
    }
})
});






   
      
   
   




/* <li>
<img src="images/chicago/james.jpg" alt="James Kaikis">
<div>
    <h3 class="f3">Jimmy Kaikis</h3>
    <span class="bar little-bar"></span>
    <p class="i">“You play with the cards you're dealt.”</p>
    <ul class="about">
        <li><b>LinkedIn:&nbsp;</b>www.linkedin/com/in/jameskaikis</li>
        <li><b>Hometown:&nbsp;</b>Pittsburgh, Pennsylvania</li>
        <li><b>Birthday:&nbsp;</b>December 1st</li>
        <li><b>Favorite Movie:&nbsp;</b>Inception</li>
        <li><b>Favorite Pastime:&nbsp;</b>Ball is life</li>
        <li><b>Favorite Travel Destination:&nbsp;</b>Japan! Specifically Tokyo</li>
        <li><b>Favorite 90's Jam:&nbsp;</b>House of Pain - Jump Around </li>
        <li><b>If you were stranded on an island, what 2 things would you want with you?:&nbsp;</b>My daughter and a baby doll</li>
        <li><b>If you could be a sandwich, what sandwich would you be and why? (one sentence):&nbsp;</b>BLTA on sourdough loaf because it is so simple to make yet the an array of flavor.</li>
        <li><b>If you could be one person for an entire day (dead or alive), who would it be and why? (one sentence):&nbsp;</b>Abe Lincoln because I want to know what it was like during the Civil War</li>
        <li><b>Do you have any skills or talents that most people don’t know about?:&nbsp;</b>I was a Flag Football All-American (yes that exists) </li>
        <li><b>What is one thing that annoys you the most?:&nbsp;</b>Bad Manners </li>
        <li><b>Fun Fact about yourself:&nbsp;</b>I really love Space </li>
    </ul>
</div>
</li> */


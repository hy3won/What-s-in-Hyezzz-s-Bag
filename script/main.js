const airpodItem = document.querySelector('.item.airpod');
const cremaItem = document.querySelector('.item.crema');
const batteryItem = document.querySelector('.item.battery');
const hamItem = document.querySelector('.item.ham');
const macItem = document.querySelector('.item.mac');
const strapItem = document.querySelector('.item.strap');
const tumblrItem = document.querySelector('.item.tumblr');


airpodItem.addEventListener('click', function() {
    console.log('Airpod item clicked'); // If you see this in the console when you click the airpod item, your event listener is working.
    const ticketSections = document.querySelectorAll('.ticket-section.airpods');

    console.log(ticketSections); // This should output a NodeList of your ticket sections. If it's empty, your selector is not finding the elements.

    ticketSections.forEach(section => {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
            console.log('Ticket sections shown'); // You should see this in the console when you click the airpod item and the ticket sections were previously hidden.
        } else {
            section.style.display = 'none';
            console.log('Ticket sections hidden'); // You should see this in the console when you click the airpod item and the ticket sections were previously shown.
        }
    });
});

cremaItem.addEventListener('click', function() {
    const ticketSections = document.querySelectorAll('.ticket-section.crema');

    console.log(ticketSections); // This should output a NodeList of your ticket sections. If it's empty, your selector is not finding the elements.

    ticketSections.forEach(section => {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
            console.log('Ticket sections shown'); // You should see this in the console when you click the airpod item and the ticket sections were previously hidden.
        } else {
            section.style.display = 'none';
            console.log('Ticket sections hidden'); // You should see this in the console when you click the airpod item and the ticket sections were previously shown.
        }
    });
});

batteryItem.addEventListener('click', function() {
    const ticketSections = document.querySelectorAll('.ticket-section.battery');

    console.log(ticketSections); // This should output a NodeList of your ticket sections. If it's empty, your selector is not finding the elements.

    ticketSections.forEach(section => {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
            console.log('Ticket sections shown'); // You should see this in the console when you click the airpod item and the ticket sections were previously hidden.
        } else {
            section.style.display = 'none';
            console.log('Ticket sections hidden'); // You should see this in the console when you click the airpod item and the ticket sections were previously shown.
        }
    });
});

hamItem.addEventListener('click', function() {
    const ticketSections = document.querySelectorAll('.ticket-section.ham');

    console.log(ticketSections); // This should output a NodeList of your ticket sections. If it's empty, your selector is not finding the elements.

    ticketSections.forEach(section => {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
            console.log('Ticket sections shown'); // You should see this in the console when you click the airpod item and the ticket sections were previously hidden.
        } else {
            section.style.display = 'none';
            console.log('Ticket sections hidden'); // You should see this in the console when you click the airpod item and the ticket sections were previously shown.
        }
    });
});

strapItem.addEventListener('click', function() {
    const ticketSections = document.querySelectorAll('.ticket-section.strap');

    console.log(ticketSections); // This should output a NodeList of your ticket sections. If it's empty, your selector is not finding the elements.

    ticketSections.forEach(section => {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
            console.log('Ticket sections shown'); // You should see this in the console when you click the airpod item and the ticket sections were previously hidden.
        } else {
            section.style.display = 'none';
            console.log('Ticket sections hidden'); // You should see this in the console when you click the airpod item and the ticket sections were previously shown.
        }
    });
});

tumblrItem.addEventListener('click', function() {
    const ticketSections = document.querySelectorAll('.ticket-section.tumblr');

    console.log(ticketSections); // This should output a NodeList of your ticket sections. If it's empty, your selector is not finding the elements.

    ticketSections.forEach(section => {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
            console.log('Ticket sections shown'); // You should see this in the console when you click the airpod item and the ticket sections were previously hidden.
        } else {
            section.style.display = 'none';
            console.log('Ticket sections hidden'); // You should see this in the console when you click the airpod item and the ticket sections were previously shown.
        }
    });
});

macItem.addEventListener('click', function() {
    const ticketSections = document.querySelectorAll('.ticket-section.mac');

    console.log(ticketSections); // This should output a NodeList of your ticket sections. If it's empty, your selector is not finding the elements.

    ticketSections.forEach(section => {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
            console.log('Ticket sections shown'); // You should see this in the console when you click the airpod item and the ticket sections were previously hidden.
        } else {
            section.style.display = 'none';
            console.log('Ticket sections hidden'); // You should see this in the console when you click the airpod item and the ticket sections were previously shown.
        }
    });
});
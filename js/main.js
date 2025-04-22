(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);



function payWithPaystac() {
    let amount = document.getElementById("amount").value;
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    let handler = PaystackPop.setup({
        key: 'pk_test_fd30cdb9df9a96bdd58b178223718bab7c240c9c', // Replace with your Paystack public key
        email: 'customer@example.com',
        amount: amount * 100, // Convert amount to kobo
        currency: 'GHS',
        callback: function(response) {
            alert('Payment successful! Transaction Ref: ' + response.reference);
        },
        onClose: function() {
            alert('Payment window closed.');
        }
    });
    handler.openIframe();
}   

// Function to show the cookie consent popup
function showCookieConsent() {
    const consentPopup = document.getElementById('cookieConsent');
    consentPopup.classList.add('show');
}

// Function to hide the popup after the user clicks accept or decline
function hideCookieConsent() {
    const consentPopup = document.getElementById('cookieConsent');
    consentPopup.classList.remove('show');
}

// Handle the acceptance of cookies
document.getElementById('acceptCookies').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieConsent();
});

// Handle the decline of cookies
document.getElementById('declineCookies').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'declined');
    hideCookieConsent();
});

// Check if cookie consent was already given
if (!localStorage.getItem('cookieConsent')) {
    showCookieConsent();
}

// If consent was already given, do not show the popup
if (localStorage.getItem('cookieConsent') === 'accepted') {
    hideCookieConsent();
}


const searchIcon = document.querySelector('.search-icon');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  searchIcon.addEventListener('click', () => {
    searchInput.style.display = searchInput.style.display === 'block' ? 'none' : 'block';
    searchInput.focus(); // Automatically focus the input when it appears
  });

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    // In a real application, you would fetch search results from a server or a client-side search index.
    // This example uses a placeholder array of example results.

    const exampleResults = [
      { title: "Working with the DOM (Document-Object-Model)", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "Typography and Text Styling", link: "TypographyandTextStyling.html" },
      { title: "Font & Text Properties in html", link: "TypographyandTextStyling.html" },
      { title: "Font Size in CSS", link: "TypographyandTextStyling.html" },
      { title: "Font Family in CSS", link: "TypographyandTextStyling.html" },
      { title: "Font Weight in CSS", link: "TypographyandTextStyling.html" },
      { title: "font style in CSS", link: "TypographyandTextStyling.html" },
      { title: "Text Color in CSS", link: "TypographyandTextStyling.html" },
      { title: " Text Alignment in CSS", link: "TypographyandTextStyling.html" },
      { title: "Text Decoration in CSS ", link: "TypographyandTextStyling.html" },
      { title: "Line Height in CSS", link: "TypographyandTextStyling.html" },
      { title: "Letter Spacing in CSS", link: "TypographyandTextStyling.html" },
      { title: "Word Spacing in CSS", link: "TypographyandTextStyling.html" },
      { title: "Web Font  in CSS", link: "TypographyandTextStyling.html" },
      { title: "DOM Tree Structure in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "Selecting Elements in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "GetElementById() in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "GetElementsByClassName() in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "GetElementsByTagName() in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "QuerySelector() in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "QuerySelectorAll() in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "Manipulating Elements in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "Changing Content in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "Changing Attributes in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "Changing Styles in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "Creating and Adding Elements in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "Removing Elements in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "Event Handling in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "Adding Event Listeners in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: "DOM Traversal in Javascript", link: "Working-with-the-DOM-(Document-Object-Model).html" },
      { title: " Practical question for html", link: "TryPracticalQuestions.html" },
      { title: " Try Question for html", link: "TryPracticalQuestions.html" },
      { title: " Quiz for html", link: "quiz.html" },
      { title: "Transitions and Animations in CSS", link: "TransitionsandAnimationsincss.html" },
      { title: "Transition in CSS", link: "TransitionsandAnimationsincss.html" },
      { title: "CSS Animation in CSS", link: "TransitionsandAnimationsincss.html" },
      { title: "CSS Transform in CSS", link: "TransitionsandAnimationsincss.html" },
      { title: "The Browser Object Model (BOM) in Javascript", link: "The-Browser-Object-Model-(BOM).html" },
      { title: "The Window Object in Javascript", link: "The-Browser-Object-Model-(BOM).html" },
      { title: "Browser History and Navigation in Javascript", link: "The-Browser-Object-Model-(BOM).html" },
      { title: "Timers: setTimeout() and setInterval() in Javascript", link: "The-Browser-Object-Model-(BOM).html" },
      { title: "Location and Navigation in Javascript", link: "The-Browser-Object-Model-(BOM).html" },
      { title: "Screen and Viewport Information in Javascript", link: "The-Browser-Object-Model-(BOM).html" },
      { title: "Text and Formatting in HTML5  ", link: "TextandFormattinginHTML5.html" },
      { title: "Text Elements in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Headings in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Paragraphs in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Line Breaks in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Preformatted Text in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Lists in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Unordered Lists in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Text Alignment in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Using Inline CSS for Text Alignment in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Center Tag  in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Bold (<b>, <strong>) in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Italic (<i>, <em>) in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Unordered Lists in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Subscript and Superscript (<sub>, <sup>) in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Underlined <u>in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Strikethrough <s> in html ", link: "TextandFormattinginHTML5.html" },
      { title: "Testing code in Javascript ", link: "Testing-JavaScript-Code.html" },
      { title: "Introduction to Testing in Javascript ", link: "Testing-JavaScript-Code.html" },
      { title: " Testing Frameworks in Javascript ", link: "Testing-JavaScript-Code.html" },
      { title: "Writing Test Cases in Javascript ", link: "Testing-JavaScript-Code.html" },
      { title: "Test-Driven Development (TDD) in Javascript ", link: "Testing-JavaScript-Code.html" },
      { title: "Running Tests in Javascript ", link: "Testing-JavaScript-Code.html" },
      { title: "Testing an Add Function Using Jest in Javascript ", link: "Testing-JavaScript-Code.html" },
      { title: "Terms And Condition for Sply Code ", link: "TermsAndCondition.html" },
      { title: "Tables in Html ", link: "tablesinhtml.html" },
      { title: "Creating a Table in Html ", link: "tablesinhtml.html" },
      { title: "Basic Table Structure in Html ", link: "tablesinhtml.html" },
      { title: "Grouping Table Sections: <thead>, <tbody>, and <tfoot> in Html ", link: "tablesinhtml.html" },
      { title: "Using colspan and rowspan for Merging Cells in Html tables ", link: "tablesinhtml.html" },
      { title: "Styling Tables with CSS in Html ", link: "tablesinhtml.html" },
      { title: "Accessibility Considerations in Html Tables ", link: "tablesinhtml.html" },
      { title: " Responsive Tables in Html ", link: "tablesinhtml.html" },
      { title: "table head,body and foot in Html ", link: "tablesinhtml.html" },
      { title: "Styling Forms in Css ", link: "StylingFormsinCss.html" },
      { title: "Form Element Styling in Css ", link: "StylingFormsinCss.html" },
      { title: "Custom Form Controls in Css ", link: "StylingFormsinCss.html" },
      { title: "Validation Styles form in Css ", link: "StylingFormsinCss.html" },
      { title: "Styling Input Types in Css ", link: "StylingFormsinCss.html" },
      { title: "Focus and Active States  in Css with html forms", link: "StylingFormsinCss.html" },
      { title: "Strings in javascript  ", link: "Strings-in-javascript.html" },
      { title: "String Literals in javascript  ", link: "Strings-in-javascript.html" },
      { title: "String Methods in javascript  ", link: "Strings-in-javascript.html" },
      { title: "charAt() in javascript  ", link: "Strings-in-javascript.html" },
      { title: "Template Literals in javascript  ", link: "Strings-in-javascript.html" },
      { title: " Responsive Web Design in Css", link: "ResponsiveWebDesign.html" },
      { title: "Media Queries  in Css", link: "ResponsiveWebDesign.html" },
      { title: "Responsive Design Principles  in Css", link: "ResponsiveWebDesign.html" },
      { title: "Viewport Meta Tag  in Css", link: "ResponsiveWebDesign.html" },
      { title: " Fluid Layouts in Css", link: "ResponsiveWebDesign.html" },
      { title: "Mobile-First Approach  in Css", link: "ResponsiveWebDesign.html" },
      { title: "Responsive Images  in Css", link: "ResponsiveWebDesign.html" },
      { title: "CSS Units  in Css", link: "ResponsiveWebDesign.html" },
      { title: " Relative Units in Css", link: "ResponsiveWebDesign.html" },
      { title: "Absolute Units  in Css", link: "ResponsiveWebDesign.html" },
      { title: "Regular Expressions in Javascript ", link: "Regular-Expressions-in-Javascript.html" },
      { title: "Creating Regular Expressions in Javascript ", link: "Regular-Expressions-in-Javascript.html" },
      { title: "Regular Expression Patterns and Flags in Javascript ", link: "Regular-Expressions-in-Javascript.html" },
      { title: "String Methods for Regular Expressions in Javascript ", link: "Regular-Expressions-in-Javascript.html" },
      { title: "match() in Javascript ", link: "Regular-Expressions-in-Javascript.html" },
      { title: "search() in Javascript ", link: "Regular-Expressions-in-Javascript.html" },
      { title: "replace() in Javascript ", link: "Regular-Expressions-in-Javascript.html" },
      { title: "split() in Javascript ", link: "Regular-Expressions-in-Javascript.html" },
      { title: " Quiz for Css", link: "quizforcss.html" },
      { title: " Quiz for Html", link: "quiz.html" },
      { title: "Quiz for Javascript ", link: "Quiz-for-javascript.html" },
      { title: "Python full Course ", link: "Python-full-course.html" },
      { title: "Privacy Policy ", link: "PrivacyPolicy.html" },
      { title: "Pratical Questions for Javascript", link: "pratical-questions-for-javascript.html" },
      { title: " Objects and Prototypes in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: "Creating Objects  in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: "Object Literals  in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: "Constructors  in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: "Object.create()  in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: "Object Properties and Methods  in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: "Object Properties  in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: "Object Methods  in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: "The this Keyword  in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: "Prototypes and Inheritance  in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: "Prototype Chain  in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: "Object-Oriented Programming (OOP) Principles  in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: " Encapsulation  in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: "Polymorphism  in Javascript", link: "Objects-and-Prototypes-in-javascrippt.html" },
      { title: "Modules in Javascript ", link: "Modules-in-Javascript.html" },
      { title: "What are Modules in Javascript ", link: "Modules-in-Javascript.html" },
      { title: "CommonJS Modules (Node.js) in Javascript ", link: "Modules-in-Javascript.html" },
      { title: "ES Modules (import/export Statements) in Javascript ", link: "Modules-in-Javascript.html" },
      { title: "Key Differences Between CommonJS and ES Modules in Javascript ", link: "Modules-in-Javascript.html" },
      { title: " Example of Using ES Modules in Node.js in Javascript ", link: "Modules-in-Javascript.html" },
      { title: "Modern CSS Features ", link: "ModernCSSFeatures.html" },
      { title: "CSS Custom Properties ", link: "ModernCSSFeatures.html" },
      { title: "Logical Properties in CSS ", link: "ModernCSSFeatures.html" },
      { title: " Container Queries in CSS", link: "ModernCSSFeatures.html" },
      { title: " CSS Subgrid ", link: "ModernCSSFeatures.html" },
      { title: "CSS Scroll Snap ", link: "ModernCSSFeatures.html" },
      { title: "CSS Masking ", link: "ModernCSSFeatures.html" },
      { title: "Modern JavaScript (ES6+ Features) ", link: "Modern-JavaScript-(ES6+Features).html" },
      { title: "Let and Const Declarations in Javascript", link: "Modern-JavaScript-(ES6+Features).html" },
      { title: "Arrow Functions in Javascript", link: "Modern-JavaScript-(ES6+Features).html" },
      { title: "Template Literals in Javascript", link: "Modern-JavaScript-(ES6+Features).html" },
      { title: "Destructuring in Javascript", link: "Modern-JavaScript-(ES6+Features).html" },
      { title: "Spread and Rest Operators in Javascript", link: "Modern-JavaScript-(ES6+Features).html" },
      { title: " Classes and Inheritance in Javascript", link: "Modern-JavaScript-(ES6+Features).html" },
      { title: "Generators and Iterators in Javascript", link: "Modern-JavaScript-(ES6+Features).html" },
      { title: "Modules (import/export) in Javascript", link: "Modern-JavaScript-(ES6+Features).html" },
      { title: "Symbols in Javascript", link: "Modern-JavaScript-(ES6+Features).html" },
      { title: "Proxies in Javascript", link: "Modern-JavaScript-(ES6+Features).html" },
      { title: "Sets and Maps in Javascript", link: "Modern-JavaScript-(ES6+Features).html" },
      { title: "Links and Navigation ", link: "LinksandNavigation.html" },
      { title: " Creating Links  in html ", link: "LinksandNavigation.html" },
      { title: "Linking to Internal and External Pages  in html ", link: "LinksandNavigation.html" },
      { title: "to Open in a New Tab  in html ", link: "LinksandNavigation.html" },
      { title: "Navigation Elements  in html ", link: "LinksandNavigation.html" },
      { title: "Creating Simple Navigation Bars  in html ", link: "LinksandNavigation.html" },
      { title: "Anchor Links and IDs  in html ", link: "LinksandNavigation.html" },
      { title: "Javascript full course ", link: "javascriptfullcourse.html" },
      { title: "JavaScript-Framworks-and-Libraries-(Introduction).html ", link: "JavaScript-Framworks-and-Libraries-(Introduction).html" },
      { title: "Overview of Popular Frameworks in Javascript", link: "JavaScript-Framworks-and-Libraries-(Introduction).html" },
      { title: "Introduction to React (Deeper Dive) in Javascript", link: "JavaScript-Framworks-and-Libraries-(Introduction).html" },
      { title: "Component-Based Architecture in Javascript", link: "JavaScript-Framworks-and-Libraries-(Introduction).html" },
      { title: "State Management in React in Javascript", link: "JavaScript-Framworks-and-Libraries-(Introduction).html" },
      { title: "Routing in React in Javascript", link: "JavaScript-Framworks-and-Libraries-(Introduction).html" },
      { title: "Making API Calls in React in Javascript", link: "JavaScript-Framworks-and-Libraries-(Introduction).html" },
      { title: "Introduction to HTML5 ", link: "IntroductiontoHTML5.html" },
      { title: "Definition of HTML ", link: "IntroductiontoHTML5.html" },
      { title: "History of HTML Early Days ", link: "IntroductiontoHTML5.html" },
      { title: "HTML 2.0 ", link: "IntroductiontoHTML5.html" },
      { title: "HTML 3.2 ", link: "IntroductiontoHTML5.html" },
      { title: "HTML 4.01 ", link: "IntroductiontoHTML5.html" },
      { title: "The Role of HTML in Web Development ", link: "IntroductiontoHTML5.html" },
      { title: "HTML5 ", link: "IntroductiontoHTML5.html" },
      { title: "What is HTML? ", link: "IntroductiontoHTML5.html" },
      { title: "Introduction to CSS ", link: "IntroductiontoCSS.html" },
      { title: " What is CSS? ", link: "IntroductiontoCSS.html" },
      { title: " History and Evolution of CSS", link: "IntroductiontoCSS.html" },
      { title: "Role of CSS in Web Development ", link: "IntroductiontoCSS.html" },
      { title: "CSS Specifications and Browser Support ", link: "IntroductiontoCSS.html" },
      { title: "Different Ways to Add CSS to HTML ", link: "IntroductiontoCSS.html" },
      { title: "Inline Styles ", link: "IntroductiontoCSS.html" },
      { title: " Internal (Embedded) Stylesheet", link: "IntroductiontoCSS.html" },
      { title: "External Stylesheet ", link: "IntroductiontoCSS.html" },
      { title: "Best Practices in css", link: "IntroductiontoCSS.html" },
      { title: "Introduction to Python ", link: "Introduction-to-Python.html" },
      { title: " What is Python?", link: "Introduction-to-Python.html" },
      { title: " Setting up a Development Environment in Python", link: "Introduction-to-Python.html" },
      { title: "Running Python Code ", link: "Introduction-to-Python.html" },
      { title: "Basic Syntax in Python", link: "Introduction-to-Python.html" },
      { title: "Statements in Python", link: "Introduction-to-Python.html" },
      { title: "Indentation in Python", link: "Introduction-to-Python.html" },
      { title: "Comments in Python", link: "Introduction-to-Python.html" },
      { title: "Variables and Data Types Numbers in Python", link: "Introduction-to-Python.html" },
      { title: "Integers in Python", link: "Introduction-to-Python.html" },
      { title: "Floats in Python", link: "Introduction-to-Python.html" },
      { title: "Complex Numbers in Python", link: "Introduction-to-Python.html" },
      { title: "Strings in Python", link: "Introduction-to-Python.html" },
      { title: "Escape Sequences in Python", link: "Introduction-to-Python.html" },
      { title: "Raw Strings in Python", link: "Introduction-to-Python.html" },
      { title: "Booleans in Python", link: "Introduction-to-Python.html" },
      { title: "Type Hinting in Python", link: "Introduction-to-Python.html" },
      { title: "Operators in Python", link: "Introduction-to-Python.html" },
      { title: "Arithmetic Operators in Python", link: "Introduction-to-Python.html" },
      { title: "Assignment Operators in Python", link: "Introduction-to-Python.html" },
      { title: "Comparison Operators in Python", link: "Introduction-to-Python.html" },
      { title: "Logical Operators in Python", link: "Introduction-to-Python.html" },
      { title: "Bitwise Operators in Python", link: "Introduction-to-Python.html" },
      { title: "Identity Operators in Python", link: "Introduction-to-Python.html" },
      { title: "Membership Operators in Python", link: "Introduction-to-Python.html" },
      { title: " Type Conversion and Casting Implicit Casting (Automatic Conversion) in Python", link: "Introduction-to-Python.html" },
      { title: "Explicit Casting (Manual Conversion) in Python", link: "Introduction-to-Python.html" },
      { title: "Introduction to JavaScript ", link: "Introduction-to-JavaScript.html" },
      { title: "What is JavaScript? (History, Purpose, Uses) ", link: "Introduction-to-JavaScript.html" },
      { title: "JavaScript vs. Other Languages ", link: "Introduction-to-JavaScript.html" },
      { title: "Setting up a Development Environment  in JavaScript ", link: "Introduction-to-JavaScript.html" },
      { title: "Including JavaScript in HTML ", link: "Introduction-to-JavaScript.html" },
      { title: "The Console (Using the Browser's Developer Console)  in JavaScript ", link: "Introduction-to-JavaScript.html" },
      { title: " Basic Syntax: Statements, Semicolons, Comments  in JavaScript ", link: "Introduction-to-JavaScript.html" },
      { title: " Variables: Declaring Variables (var, let, const), Variable Scope  in JavaScript ", link: "Introduction-to-JavaScript.html" },
      { title: " Data Types  in JavaScript ", link: "Introduction-to-JavaScript.html" },
      { title: "Operators  in JavaScript ", link: "Introduction-to-JavaScript.html" },
      { title: "Type Coercion and Type Conversion  in JavaScript ", link: "Introduction-to-JavaScript.html" },
      { title: "Images and Multimedia in HTML5 ", link: "ImagesandMultimediainHTML5.html" },
      { title: " Images  in HTML ", link: "ImagesandMultimediainHTML5.html" },
      { title: " Responsive Image in HTML ", link: "ImagesandMultimediainHTML5.html" },
      { title: "Using srcset for Responsive Images in HTML ", link: "ImagesandMultimediainHTML5.html" },
      { title: "Audio  in HTML ", link: "ImagesandMultimediainHTML5.html" },
      { title: "Video  in HTML ", link: "ImagesandMultimediainHTML5.html" },
      { title: " Embedding YouTube Video in HTML ", link: "ImagesandMultimediainHTML5.html" },
      { title: "JavaScript Event Listeners for Video in HTML ", link: "ImagesandMultimediainHTML5.html" },
      { title: "Html fullcourse ", link: "htmlfullcourse.html" },
      { title: "HTML APIs and Advanced Features ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "Canvas Element  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "Basic Usage of the <canvas> Tag  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "Drawing Shapes, Lines, and Text using JavaScript  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "Animation and Game Development Basics with <canvas>  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "Geolocation API  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "Accessing User Location  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "Local Storage and Session Storage  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "Storing Data with Local Storage and Session Storage  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "Web Workers  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "Introduction to Web Workers  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "WebSockets  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "Real-Time Communication Using WebSockets  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "Drag and Drop API  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "Enabling Drag-and-Drop Functionality  in HTML ", link: "HTMLAPIsandAdvancedFeatures.html" },
      { title: "HTML5 Structural Elements ", link: "HTML5StructuralElements.html" },
      { title: "  Semantic HTML5 Elements in Html ", link: "HTML5StructuralElements.html" },
      { title: "Grouping Content in Html ", link: "HTML5StructuralElements.html" },
      { title: "Using <div> and <span> for Layout in Html ", link: "HTML5StructuralElements.html" },
      { title: "Using <figure> and <figcaption> for Images in Html ", link: "HTML5StructuralElements.html" },
      { title: "HTML5 Overview", link: "HTML5Overview.html" },
      { title: "Key Features of HTML5 ", link: "HTML5Overview.html" },
      { title: "Differences Between HTML4 and HTML5  ", link: "HTML5Overview.html" },
      { title: "Doctype Declaration  in HTML", link: "HTML5Overview.html" },
      { title: "Tag Support  in HTML", link: "HTML5Overview.html" },
      { title: " Multimedia in HTML", link: "HTML5Overview.html" },
      { title: "Form Elements  in HTML", link: "HTML5Overview.html" },
      { title: " API Support in HTML", link: "HTML5Overview.html" },
      { title: "Benefits of HTML5  in HTML", link: "HTML5Overview.html" },
      { title: "Help ", link: "help.html" },
      { title: "Functions in Javascript ", link: "Functions-in-Javascript.html" },
      { title: "Defining Functions in Javascript ", link: "Functions-in-Javascript.html" },
      { title: "Function Declarations in Javascript ", link: "Functions-in-Javascript.html" },
      { title: "Function Expressions in Javascript ", link: "Functions-in-Javascript.html" },
      { title: "Arrow Functions in Javascript ", link: "Functions-in-Javascript.html" },
      { title: ". Function Parameters and Arguments in Javascript ", link: "Functions-in-Javascript.html" },
      { title: "Return Values in Javascript ", link: "Functions-in-Javascript.html" },
      { title: "Function Scope and Closures in Javascript ", link: "Functions-in-Javascript.html" },
      { title: "Function Scope in Javascript ", link: "Functions-in-Javascript.html" },
      { title: "Closures in Javascript ", link: "Functions-in-Javascript.html" },
      { title: " Immediately Invoked Function Expressions (IIFEs) in Javascript ", link: "Functions-in-Javascript.html" },
      { title: "Recursion in Javascript ", link: "Functions-in-Javascript.html" },
      { title: "Forms and Input Elements ", link: "FormsandInputElements.html" },
      { title: "Creating Forms  in Html ", link: "FormsandInputElements.html" },
      { title: "New Input Types in HTML5  in Html ", link: "FormsandInputElements.html" },
      { title: " Input Attributes  in Html ", link: "FormsandInputElements.html" },
      { title: " Form Validation in Html ", link: "FormsandInputElements.html" },
      { title: "Form Elements and Buttons  in Html ", link: "FormsandInputElements.html" },
      { title: "Using <label> with <input>  in Html ", link: "FormsandInputElements.html" },
      { title: "Using <fieldset> and <legend>  in Html ", link: "FormsandInputElements.html" },
      { title: "Submit and Reset Buttons  in Html ", link: "FormsandInputElements.html" },
      { title: "Flexbox Layout in Css ", link: "FlexboxLayoutincss.html" },
      { title: "Flexbox Fundamentals  in Css ", link: "FlexboxLayoutincss.html" },
      { title: "Flex Container Properties  in Css ", link: "FlexboxLayoutincss.html" },
      { title: "display  in Css ", link: "FlexboxLayoutincss.html" },
      { title: "flex-direction  in Css ", link: "FlexboxLayoutincss.html" },
      { title: "justify-content  in Css ", link: "FlexboxLayoutincss.html" },
      { title: " align-items  in Css ", link: "FlexboxLayoutincss.html" },
      { title: " flex-wrap in Css ", link: "FlexboxLayoutincss.html" },
      { title: " lex Item Properties in Css ", link: "FlexboxLayoutincss.html" },
      { title: " flex-grow in Css ", link: "FlexboxLayoutincss.html" },
      { title: " flex-shrink in Css ", link: "FlexboxLayoutincss.html" },
      { title: "FAQ ", link: "faq.html" },
      { title: "Events in Javascript ", link: "Events-in-Javascript.html" },
      { title: "Event Loop and Event Queue in Javascript ", link: "Events-in-Javascript.html" },
      { title: "Event Bubbling and Capturing in Javascript ", link: "Events-in-Javascript.html" },
      { title: "Event Capturing in Javascript ", link: "Events-in-Javascript.html" },
      { title: "Event Delegation in Javascript ", link: "Events-in-Javascript.html" },
      { title: "Common Event Types in Javascript ", link: "Events-in-Javascript.html" },
      { title: "Adding and Removing Event Listeners in Javascript ", link: "Events-in-Javascript.html" },
      { title: "Error Handling in JavaScript ", link: "Error-Handling-in-JavaScript.html" },
      { title: "try...catch Blocks in JavaScript ", link: "Error-Handling-in-JavaScript.html" },
      { title: "Throwing Errors in JavaScript ", link: "Error-Handling-in-JavaScript.html" },
      { title: "Error Objects in JavaScript ", link: "Error-Handling-in-JavaScript.html" },
      { title: " Debugging Techniques in JavaScript ", link: "Error-Handling-in-JavaScript.html" },
      { title: "debugger Statement in JavaScript ", link: "Error-Handling-in-JavaScript.html" },
      { title: "try...catch for Debugging in JavaScript ", link: "Error-Handling-in-JavaScript.html" },
      { title: "Donate to Support SplyCode ", link: "donation.html" },
      { title: "Disclaimer ", link: "disclaimer.html" },
      { title: "Data Structures in Python ", link: "Data-Structures-in-python.html" },
      { title: "Lists in Python ", link: "Data-Structures-in-python.html" },
      { title: "Tuples in Python ", link: "Data-Structures-in-python.html" },
      { title: "Dictionaries in Python ", link: "Data-Structures-in-python.html" },
      { title: "Sets in Python ", link: "Data-Structures-in-python.html" },
      { title: "Set Operations in Python ", link: "Data-Structures-in-python.html" },
      { title: "Set Methods in Python ", link: "Data-Structures-in-python.html" },
    { title: "CSS Preprocessors (Introduction) ", link: "CSSPreprocessors(Introduction).html" },
    { title: " What are CSS Preprocessors? ", link: "CSSPreprocessors(Introduction).html" },
    { title: "  SASS/SCSS Fundamentals ", link: "CSSPreprocessors(Introduction).html" },
    { title: "LESS  in CSS ", link: "CSSPreprocessors(Introduction).html" },
    { title: "Stylus  in CSS ", link: "CSSPreprocessors(Introduction).html" },
    { title: "Compilation Process  in CSS ", link: "CSSPreprocessors(Introduction).html" },
    { title: "Variables (SCSS) in CSS ", link: "CSSPreprocessors(Introduction).html" },
    { title: "Nesting  in CSS ", link: "CSSPreprocessors(Introduction).html" },
    { title: "Mixins  in CSS ", link: "CSSPreprocessors(Introduction).html" },
    { title: "Inheritance  in CSS ", link: "CSSPreprocessors(Introduction).html" },
    { title: "Css Practical question ", link: "csspracticalquestion.html" },
    { title: "CSS Grid layout ", link: "CSSGridlayout.html" },
    { title: "Grid Fundamentals  in CSS ", link: "CSSGridlayout.html" },
    { title: "Grid Container Properties  in CSS ", link: "CSSGridlayout.html" },
    { title: "Display: grid  in CSS ", link: "CSSGridlayout.html" },
    { title: "Grid-template-columns  in CSS ", link: "CSSGridlayout.html" },
    { title: "Grid-template-rows  in CSS ", link: "CSSGridlayout.html" },
    { title: "Grid-gap  in CSS ", link: "CSSGridlayout.html" },
    { title: "Grid-template-areas  in CSS ", link: "CSSGridlayout.html" },
    { title: "Grid Item Properties  in CSS ", link: "CSSGridlayout.html" },
    { title: "Grid-column  in CSS ", link: "CSSGridlayout.html" },
    { title: "Grid-row  in CSS ", link: "CSSGridlayout.html" },
    { title: "Grid-area  in CSS ", link: "CSSGridlayout.html" },
    { title: "Responsive Grid Layouts  in CSS ", link: "CSSGridlayout.html" },
    { title: "Combining Grid and Flexbox in CSS ", link: "CSSGridlayout.html" },
    { title: "Css full Course ", link: "cssfullcourse.html" },
    { title: "CSS Frameworks and Libraries ", link: "CSSFrameworksandLibraries.html" },
    { title: "Bootstrap  in CSS ", link: "CSSFrameworksandLibraries.html" },
    { title: "Tailwind CSS in CSS ", link: "CSSFrameworksandLibraries.html" },
    { title: " Foundation  in CSS ", link: "CSSFrameworksandLibraries.html" },
    { title: "Bulma  in CSS ", link: "CSSFrameworksandLibraries.html" },
    { title: "CSS Debugging and Browser Compatibility ", link: "CSSDebuggingandBrowserCompatibility.html" },
    { title: "Cross-Browser Compatibility  in CSS ", link: "CSSDebuggingandBrowserCompatibility.html" },
    { title: "CSS Reset and Normalization  in CSS ", link: "CSSDebuggingandBrowserCompatibility.html" },
    { title: "Vendor Prefixes  in CSS ", link: "CSSDebuggingandBrowserCompatibility.html" },
    { title: " Feature Detection  in CSS ", link: "CSSDebuggingandBrowserCompatibility.html" },
    { title: "Debugging Techniques  in CSS ", link: "CSSDebuggingandBrowserCompatibility.html" },
    { title: "Browser Developer Tools  in CSS ", link: "CSSDebuggingandBrowserCompatibility.html" },
    { title: "CSS Basics and Syntax ", link: "CSSBasicsandSyntax.html" },
    { title: "CSS Rule Structure  in CSS ", link: "CSSBasicsandSyntax.html" },
    { title: "Selectors  in CSS ", link: "CSSBasicsandSyntax.html" },
    { title: "Element (Type) Selectors  in CSS ", link: "CSSBasicsandSyntax.html" },
    { title: "Class Selectors  in CSS ", link: "CSSBasicsandSyntax.html" },
    { title: "ID Selectors  in CSS ", link: "CSSBasicsandSyntax.html" },
    { title: "Attribute Selectors  in CSS ", link: "CSSBasicsandSyntax.html" },
    { title: "Pseudo-class Selectors  in CSS ", link: "CSSBasicsandSyntax.html" },
    { title: "Specificity and Cascade Principles  in CSS ", link: "CSSBasicsandSyntax.html" },
    { title: "Non-Inherited Properties  in CSS ", link: "CSSBasicsandSyntax.html" },
    { title: "Overriding Inherited Properties  in CSS ", link: "CSSBasicsandSyntax.html" },
    { title: "Courses ", link: "courses.html" },
    { title: "Cookies ", link: "cookies.html" },
    { title: "Control Flow in Python ", link: "Control-Flow-in-python.html" },
    { title: " Conditional Statements in Python ", link: "Control-Flow-in-python.html" },
    { title: "Nested Conditionals in Python ", link: "Control-Flow-in-python.html" },
    { title: "`if`, `elif`, `else` in Python ", link: "Control-Flow-in-python.html" },
    { title: "else in Python ", link: "Control-Flow-in-python.html" },
    { title: "Loops: `for` and `while` in Python ", link: "Control-Flow-in-python.html" },
    { title: "Loop Control Statements in Python ", link: "Control-Flow-in-python.html" },
    { title: "`break` (Exit loop) in Python ", link: "Control-Flow-in-python.html" },
    { title: " `continue` (Skip iteration) in Python ", link: "Control-Flow-in-python.html" },
    { title: "`pass` (Placeholder) in Python ", link: "Control-Flow-in-python.html" },
    { title: "`for...else` and `while...else` in Python ", link: "Control-Flow-in-python.html" },
    { title: "`for...else` with `break` in Python ", link: "Control-Flow-in-python.html" },
    { title: "Control Flow in Javascript ", link: "Control-Flow-in-Javascript.html" },
    { title: " Conditional Statements in Javascript ", link: "Control-Flow-in-Javascript.html" },
    { title: "if Statement in Javascript ", link: "Control-Flow-in-Javascript.html" },
    { title: "switch Statement in Javascript ", link: "Control-Flow-in-Javascript.html" },
    { title: "else Statement in Javascript ", link: "Control-Flow-in-Javascript.html" },
    { title: "Loops in Javascript ", link: "Control-Flow-in-Javascript.html" },
    { title: "for Loop in Javascript ", link: "Control-Flow-in-Javascript.html" },
    { title: " while Loop in Javascript ", link: "Control-Flow-in-Javascript.html" },
    { title: "do...while Loop in Javascript ", link: "Control-Flow-in-Javascript.html" },
    { title: "Loop Control Statements in Javascript ", link: "Control-Flow-in-Javascript.html" },
    { title: "break Statement in Javascript ", link: "Control-Flow-in-Javascript.html" },
    { title: "continue Statement in Javascript ", link: "Control-Flow-in-Javascript.html" },
    { title: "else if Statement in Javascript ", link: "Control-Flow-in-Javascript.html" },
    { title: "Contact ", link: "contact.html" },
    { title: "Colors and Backgrounds in Css ", link: "ColorsandBackgroundsincss.html" },
    { title: "Color Values in Css ", link: "ColorsandBackgroundsincss.html" },
    { title: "Background Properties in Css ", link: "ColorsandBackgroundsincss.html" },
    { title: "background-color in Css ", link: "ColorsandBackgroundsincss.html" },
    { title: "background-image in Css ", link: "ColorsandBackgroundsincss.html" },
    { title: "background-repeat in Css ", link: "ColorsandBackgroundsincss.html" },
    { title: "background-position in Css ", link: "ColorsandBackgroundsincss.html" },
    { title: "background-size in Css ", link: "ColorsandBackgroundsincss.html" },
    { title: "Box Model and Layout in css ", link: "BoxModelandLayoutincss.html" },
    { title: " CSS Box Model Components in css ", link: "BoxModelandLayoutincss.html" },
    { title: "Box-sizing Property in css ", link: "BoxModelandLayoutincss.html" },
    { title: "Display Property in css ", link: "BoxModelandLayoutincss.html" },
    { title: "Positioning in css ", link: "BoxModelandLayoutincss.html" },
    { title: " Z-index in css ", link: "BoxModelandLayoutincss.html" },
    { title: "Stacking Context in css ", link: "BoxModelandLayoutincss.html" },
    { title: "Best Practices and Performance in css ", link: "BestPracticesandPerformanceincss.html" },
    { title: "CSS Optimization Techniques ", link: "BestPracticesandPerformanceincss.html" },
    { title: "Minification in css ", link: "BestPracticesandPerformanceincss.html" },
    { title: "Avoiding Redundancy in css ", link: "BestPracticesandPerformanceincss.html" },
    { title: "Use of @import in css ", link: "BestPracticesandPerformanceincss.html" },
    { title: "CSS Methodology (BEM, SMACSS, OOCSS) in css ", link: "BestPracticesandPerformanceincss.html" },
    { title: "BEM (Block Element Modifier) in css ", link: "BestPracticesandPerformanceincss.html" },
    { title: "MACSS (Scalable and Modular Architecture for CSS) in css ", link: "BestPracticesandPerformanceincss.html" },
    { title: "OOCSS (Object-Oriented CSS) in css ", link: "BestPracticesandPerformanceincss.html" },
    { title: "Avoiding Common Pitfalls in css ", link: "BestPracticesandPerformanceincss.html" },
    { title: "Performance Considerations in css ", link: "BestPracticesandPerformanceincss.html" },
    { title: "CSS Linting ", link: "BestPracticesandPerformanceincss.html" },
    { title: "Code Organization in css ", link: "BestPracticesandPerformanceincss.html" },
    { title: "Browser Developer Tools in css ", link: "BestPracticesandPerformanceincss.html" },
    { title: "Basic Structure of an HTML5 Document ", link: "BasicStructureofanHTML5Document.html" },
    { title: "Meta Tags  in HTML ", link: "BasicStructureofanHTML5Document.html" },
    { title: "Title and Link Tags  in HTML ", link: "BasicStructureofanHTML5Document.html" },
    { title: "HTML Comments  in HTML ", link: "BasicStructureofanHTML5Document.html" },
    { title: "Asynchronous JavaScript ", link: "Asynchronous-JavaScript.html" },
    { title: "Synchronous  in  JavaScript ", link: "Asynchronous-JavaScript.html" },
    { title: "Asynchronous Programming  in  JavaScript ", link: "Asynchronous-JavaScript.html" },
    { title: "Callbacks  in  JavaScript ", link: "Asynchronous-JavaScript.html" },
    { title: " Promises  in  JavaScript ", link: "Asynchronous-JavaScript.html" },
    { title: " Promise Chaining  in  JavaScript ", link: "Asynchronous-JavaScript.html" },
    { title: "Promise.all()  in  JavaScript ", link: "Asynchronous-JavaScript.html" },
    { title: "Promise.race()  in  JavaScript ", link: "Asynchronous-JavaScript.html" },
    { title: "Async/Await  in  JavaScript ", link: "Asynchronous-JavaScript.html" },
    { title: "Fetch API  in  JavaScript ", link: "Asynchronous-JavaScript.html" },
    { title: "Arrays in javascript ", link: "Arrays-in-javascript.html" },
    { title: "Creating Arrays in javascript ", link: "Arrays-in-javascript.html" },
    { title: "Array Methods in javascript ", link: "Arrays-in-javascript.html" },
    { title: "push() in javascript ", link: "Arrays-in-javascript.html" },
    { title: "push() in javascript ", link: "Arrays-in-javascript.html" },
    { title: "Advanced Selectors and Techniques in css ", link: "AdvancedSelectorsandTechniquesincss.html" },
    { title: "Complex Selectors in css ", link: "AdvancedSelectorsandTechniquesincss.html" },
    { title: "Attribute Selectors in css ", link: "AdvancedSelectorsandTechniquesincss.html" },
    { title: ":not() Selector in css ", link: "AdvancedSelectorsandTechniquesincss.html" },
    { title: "Custom Properties (CSS Variables) in css ", link: "AdvancedSelectorsandTechniquesincss.html" },
    { title: " calc() Function in css ", link: "AdvancedSelectorsandTechniquesincss.html" },
    { title: " min(), max(), and clamp() Functions in css ", link: "AdvancedSelectorsandTechniquesincss.html" },
    { title: "nth-child and nth-of-type in css ", link: "AdvancedSelectorsandTechniquesincss.html" },
    { title: "Advanced JavaScript Concepts ", link: "Advanced-JavaScript-Concepts.html" },
    { title: "Closures  in JavaScript  ", link: "Advanced-JavaScript-Concepts.html" },
    { title: " Currying and Partial Application  in JavaScript  ", link: "Advanced-JavaScript-Concepts.html" },
    { title: " Higher-Order Functions in JavaScript  ", link: "Advanced-JavaScript-Concepts.html" },
    { title: " Functional Programming Concepts  in JavaScript  ", link: "Advanced-JavaScript-Concepts.html" },
    { title: "Garbage Collection and Memory Management  in JavaScript  ", link: "Advanced-JavaScript-Concepts.html" },
    { title: " Performance Optimization Techniques  in JavaScript  ", link: "Advanced-JavaScript-Concepts.html" },
    { title: "Accessibility in HTML5 ", link: "AccessibilityinHTML5.html" },
    { title: "Responsive Web Design in HTML ", link: "AccessibilityinHTML5.html" },
    { title: "CSS Flexbox and Grid Layouts in HTML ", link: "AccessibilityinHTML5.html" },
    { title: "SVG (Scalable Vector Graphics) in HTML ", link: "AccessibilityinHTML5.html" },
    { title: "HTML5 Forms: Advanced Input Types in HTML ", link: "AccessibilityinHTML5.html" },
    { title: "About Us ", link: "AboutUs.html" },
    { title: "Functions and Modules in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Defining and Calling Functions in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Function Arguments in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Default Arguments in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Return Values in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Variable Scope in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Local Scope in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Global Scope in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Lambda Functions in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Creating a Custom Module in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Error Handling in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Basic Try-Except in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Raising Exceptions in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Custom Exceptions in python ", link: "Functions-and-Modules-in-python.html" },
    { title: "Object Oriented Programming (OOP) in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Basic OOP Concepts in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Classes and Objects in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Attributes and Methods in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: " in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Encapsulation in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: " Inheritance in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Polymorphism in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Constructors in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Destructors in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "self Keyword in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Advanced OOP Concepts in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: " Class Methods  in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Static Methods in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Inheritance (Single and Multiple) in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Method Overriding and super() in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Data Hiding Abstract Classes and Interfaces in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Property Decorators in Python ", link: "Object-Oriented-Programming-(OOP)-in-Python.html" },
    { title: "Python File Handling, Serialization & Directory Operations", link: "File-Handling-and-Input-Output-in-python.html" },
    { title: "File Handling in Python", link: "File-Handling-and-Input-Output-in-python.html" },
    { title: "Opening and Closing Files in Python", link: "File-Handling-and-Input-Output-in-python.html" },
    { title: "File Modes in Python", link: "File-Handling-and-Input-Output-in-python.html" },
    { title: "Basic File Operations in Python", link: "File-Handling-and-Input-Output-in-python.html" },
    { title: "Reading and Writing Files in Python", link: "File-Handling-and-Input-Output-in-python.html" },
    { title: "Appending to Files in Python", link: "File-Handling-and-Input-Output-in-python.html" },
    { title: "Binary Files in Python", link: "File-Handling-and-Input-Output-in-python.html" },
    { title: "Data Serialization in Python", link: "File-Handling-and-Input-Output-in-python.html" },
    { title: "CSV (Comma-Separated Values) in Python", link: "File-Handling-and-Input-Output-in-python.html" },
    { title: "Pickle (Python Object Serialization) in Python", link: "File-Handling-and-Input-Output-in-python.html" },
    { title: "Working with Directories in Python", link: "File-Handling-and-Input-Output-in-python.html" },
    { title: "Quick Reference Cheat Sheet in Python", link: "File-Handling-and-Input-Output-in-python.html" },
    { title: "Advanced Python Concepts ", link: "Advanced-Python-Concepts.html" },
    { title: "Iterators and Generators in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Decorators in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Creating Custom Iterators in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Generators and yield keyword in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Generator Expressions in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Creating Custom Decorators in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Decorators with Arguments in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Context Managers in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "The with Statement in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Creating Custom Context Managers in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Concurrency and Parallelism in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Threading in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Asynchronous Programming (asyncio) in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Type Hinting Collections in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Type Hinting in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Pattern Matching in Python ", link: "Advanced-Python-Concepts.html" },
    { title: "Python Libraries and Frameworks ", link: "PythonLibrariesandFrameworks.html" },
    { title: "NumPy in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "Array Operations (Vectorization & Broadcasting) in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "Mathematical & Linear Algebra Functions in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "Pandas (Data Analysis & Manipulation) in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "Data Manipulation (Filtering, Grouping, Aggregation) in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "Handling Missing Data in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "Matplotlib in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "Seaborn  in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "Line & Bar Plots  in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "Seaborn Statistical Plots in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "Requests (HTTP Requests & Web Scraping) in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "GET & POST Requests in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: " Flask in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: " Django in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "SQL & Database Interactions in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "SQLite in Python ", link: "PythonLibrariesandFrameworks.html" },
    { title: "Testing and Debugging in Python ", link: "Testing-and-Debugging-in-python.html" },
    { title: "Unit Testing with unittest in Python ", link: "Testing-and-Debugging-in-python.html" },
    { title: "Test-Driven Development (TDD) in Python ", link: "Testing-and-Debugging-in-python.html" },
    { title: "Debugging with pdb in Python ", link: "Testing-and-Debugging-in-python.html" },
    { title: "Logging for Debugging in Python ", link: "Testing-and-Debugging-in-python.html" },
    { title: "Code Profiling in Python ", link: "Testing-and-Debugging-in-python.html" },
    { title: "cProfile in Python ", link: "Testing-and-Debugging-in-python.html" },
    { title: "Profiling in Python ", link: "Testing-and-Debugging-in-python.html" },
    { title: "Debugging in Python ", link: "Testing-and-Debugging-in-python.html" },
    { title: "Project Work and Best Practices in Python ", link: "Project-Work-and-Best-Practices.html" },
    { title: "Project Development in Python ", link: "Project-Work-and-Best-Practices.html" },
    { title: "Project Planning & Execution in Python ", link: "Project-Work-and-Best-Practices.html" },
    { title: "Code Style & Best Practices in Python ", link: "Project-Work-and-Best-Practices.html" },
    { title: "PEP 8 Style Guide in Python ", link: "Project-Work-and-Best-Practices.html" },
    { title: "Code Readability & Maintainability in Python ", link: "Project-Work-and-Best-Practices.html" },
    { title: "Docstrings in Python ", link: "Project-Work-and-Best-Practices.html" },
    { title: "Generate Documentation in Python ", link: "Project-Work-and-Best-Practices.html" },
    { title: "Virtual Environments in Python ", link: "Project-Work-and-Best-Practices.html" },
    { title: "Introduction to C++ ", link: "Introduction-to-C++.html" },
    { title: "History & Evolution of C++ ", link: "Introduction-to-C++.html" },
    { title: "Compilation Process in C++ ", link: "Introduction-to-C++.html" },
    { title: "Compilation & Execution in C++ ", link: "Introduction-to-C++.html" },
    { title: "Common Pitfalls & Best Practices in C++ ", link: "Introduction-to-C++.html" },
    { title: "Basics of C++ Syntax ", link: "Basics -of-C++-Syntax.html" },
    { title: "Data Types in C++", link: "Basics -of-C++-Syntax.html" },
    { title: "Primitive Types in C++", link: "Basics -of-C++-Syntax.html" },
    { title: "Keyword (C++11 and later) in C++", link: "Basics -of-C++-Syntax.html" },
    { title: "Variables & Constants in C++", link: "Basics -of-C++-Syntax.html" },
    { title: "Operators in C++", link: "Basics -of-C++-Syntax.html" },
    { title: "Bitwise Operators in C++", link: "Basics -of-C++-Syntax.html" },
    { title: "Control Structures in C++", link: "Basics -of-C++-Syntax.html" },
    { title: "if-else in C++", link: "Basics -of-C++-Syntax.html" },
    { title: "switch in C++", link: "Basics -of-C++-Syntax.html" },
    { title: "Loop in C++", link: "Basics -of-C++-Syntax.html" },
    { title: "do-while in C++", link: "Basics -of-C++-Syntax.html" },
    { title: "while in C++", link: "Basics -of-C++-Syntax.html" },
    { title: "Functions in C++ ", link: "Functions-in-C++.html" },
    { title: "Function Declaration  in C++ ", link: "Functions-in-C++.html" },
    { title: "Return Types in C++ ", link: "Functions-in-C++.html" },
    { title: "Parameters in C++ ", link: "Functions-in-C++.html" },
    { title: "Pass by Value in C++ ", link: "Functions-in-C++.html" },
    { title: "Pass by Pointer in C++ ", link: "Functions-in-C++.html" },
    { title: "const Correctness in C++ ", link: "Functions-in-C++.html" },
    { title: "Overloading in C++ ", link: "Functions-in-C++.html" },
    { title: "Inline Functions in C++ ", link: "Functions-in-C++.html" },
    { title: "Object Oriented Programming (OOP) in C++ ", link: "Object-Oriented-Programming-(OOP)-in-C++.html" },
    { title: "Classes & Objects in C++ ", link: "Object-Oriented-Programming-(OOP)-in-C++.html" },
    { title: "Access Specifiers in C++ ", link: "Object-Oriented-Programming-(OOP)-in-C++.html" },
    { title: "Constructors in C++ ", link: "Object-Oriented-Programming-(OOP)-in-C++.html" },
    { title: "Destructors in C++ ", link: "Object-Oriented-Programming-(OOP)-in-C++.html" },
    { title: "Inheritance in C++ ", link: "Object-Oriented-Programming-(OOP)-in-C++.html" },
    { title: "Virtual Base Classes in C++ ", link: "Object-Oriented-Programming-(OOP)-in-C++.html" },
    { title: "Polymorphism in C++ ", link: "Object-Oriented-Programming-(OOP)-in-C++.html" },
    { title: "Abstract Classes in C++ ", link: "Object-Oriented-Programming-(OOP)-in-C++.html" },
    { title: "Static Members in C++ ", link: "Object-Oriented-Programming-(OOP)-in-C++.html" },
    { title: "Friend Functions in C++ ", link: "Object-Oriented-Programming-(OOP)-in-C++.html" },
    { title: "inheritance in C++ ", link: "Object-Oriented-Programming-(OOP)-in-C++.html" },
    { title: "Encapsulation in C++ ", link: "Object-Oriented-Programming-(OOP)-in-C++.html" },
    { title: "Arrays in C++ ", link: "Arrays-in-C++.html" },
    { title: "Static Arrays  in C++ ", link: "Arrays-in-C++.html" },
    { title: "Dynamic Arrays  in C++ ", link: "Arrays-in-C++.html" },
    { title: "Accessing Array Elements  in C++ ", link: "Arrays-in-C++.html" },
    { title: "Declaration and Initialization of arrays  in C++ ", link: "Arrays-in-C++.html" },
    { title: "Memory Management in C++ ", link: "Memory-Management-in-C++.html" },
    { title: "Pointers in C++ ", link: "Memory-Management-in-C++.html" },
    { title: "Raw Pointers in C++ ", link: "Memory-Management-in-C++.html" },
    { title: "Pointer Arithmetic in C++ ", link: "Memory-Management-in-C++.html" },
    { title: "Dynamic Memory in C++ ", link: "Memory-Management-in-C++.html" },
    { title: "Memory Leaks in C++ ", link: "Memory-Management-in-C++.html" },
    { title: "Smart Pointers in C++ ", link: "Memory-Management-in-C++.html" },
    { title: "Arrays in Python ", link: "Arrays-in-python.html" },
    { title: "Creating Arrays in Python ", link: "Arrays-in-python.html" },
    { title: "Common Typecodes in Python ", link: "Arrays-in-python.html" },
    { title: "Accessing Array Elements in Python ", link: "Arrays-in-python.html" },
    { title: "Array Operations in Python ", link: "Arrays-in-python.html" },
    { title: "Creating Lists in Python ", link: "Arrays-in-python.html" },
    { title: "NumPy Arrays in Python ", link: "Arrays-in-python.html" },
    { title: "List Operations in Python ", link: "Arrays-in-python.html" },
    { title: "Accessing List Elements in Python ", link: "Arrays-in-python.html" },
    { title: "Advanced Features in C++ ", link: "Advanced-Features-in-C++.html" },
    { title: "Templates in C++ ", link: "Advanced-Features-in-C++.html" },
    { title: "Function Templates in C++ ", link: "Advanced-Features-in-C++.html" },
    { title: "Template Specialization in C++ ", link: "Advanced-Features-in-C++.html" },
    { title: "STL (Standard Template Library) in C++ ", link: "Advanced-Features-in-C++.html" },
    { title: "Iterators in C++ ", link: "Advanced-Features-in-C++.html" },
    { title: "Move Semantics in C++ ", link: "Advanced-Features-in-C++.html" },
    { title: "Rvalue References (&&) in C++ ", link: "Advanced-Features-in-C++.html" },
    { title: "Lambda Expressions (C++11+) in C++ ", link: "Advanced-Features-in-C++.html" },
    { title: "Capture Clauses in C++ ", link: "Advanced-Features-in-C++.html" },
    { title: " in C++ ", link: "Exception-Handling-in-C++.html" },
    { title: "Exception Handling in C++ ", link: "Exception-Handling-in-C++.html" },
    { title: "Try/Catch/Throw in C++ ", link: "Exception-Handling-in-C++.html" },
    { title: "Exception Propagation in C++ ", link: "Exception-Handling-in-C++.html" },
    { title: "Stack Unwinding in C++ ", link: "Exception-Handling-in-C++.html" },
    { title: "Exception Safety in C++ ", link: "Exception-Handling-in-C++.html" },
    { title: "noexcept Specifier in C++ ", link: "Exception-Handling-in-C++.html" },
    { title: "RAII for Exceptions in C++ ", link: "Exception-Handling-in-C++.html" },
    { title: "Custom Exceptions in C++ ", link: "Exception-Handling-in-C++.html" },
    { title: "Advanced Concepts in C++ ", link: "Advanced-Concepts-in-C++.html" },
    { title: "Type Casting in C++ ", link: "Advanced-Concepts-in-C++.html" },
    { title: "Operator Overloading in C++ ", link: "Advanced-Concepts-in-C++.html" },
    { title: "Multiple Inheritance in C++ ", link: "Advanced-Concepts-in-C++.html" },
    { title: "Virtual Inheritance in C++ ", link: "Advanced-Concepts-in-C++.html" },
    { title: "Type Traits & Metaprogramming (C++11+) in C++ ", link: "Advanced-Concepts-in-C++.html" },
    { title: "decltype in C++ ", link: "Advanced-Concepts-in-C++.html" },
    { title: "Modern C++ ", link: "Modern-C++.html" },
    { title: "Auto & Decltype (C++11) in C++ ", link: "Modern-C++.html" },
    { title: "Range-Based Loops (C++11) in C++ ", link: "Modern-C++.html" },
    { title: "Uniform Initialization (C++11) in C++ ", link: "Modern-C++.html" },
    { title: "Variadic Templates (C++11) in C++ ", link: "Modern-C++.html" },
    { title: "Parameter Packs in C++ ", link: "Modern-C++.html" },
    { title: "Fold Expressions (C++17) in C++ ", link: "Modern-C++.html" },
    { title: "Concepts & Constraints (C++20) in C++ ", link: "Modern-C++.html" },
    { title: "Concurrency & Multithreading in C++ ", link: "Concurrency-&-Multithreading-in-C++.html" },
    { title: "Threads (std::thread) in C++ ", link: "Concurrency-&-Multithreading-in-C++.html" },
    { title: "Joining and Detaching in C++ ", link: "Concurrency-&-Multithreading-in-C++.html" },
    { title: "Mutexes & Locks in C++ ", link: "Concurrency-&-Multithreading-in-C++.html" },
    { title: "Asynchronous Operations in C++ ", link: "Concurrency-&-Multithreading-in-C++.html" },
    { title: "Atomic Operations (std::atomic<T>) in C++ ", link: "Concurrency-&-Multithreading-in-C++.html" },
    { title: "File I/O & Serialization in C++ ", link: "File-I-O-&-Serialization-in-C++.html" },
    { title: "Streams in C++ ", link: "File-I-O-&-Serialization-in-C++.html" },
    { title: "Binary vs. Text Files in C++ ", link: "File-I-O-&-Serialization-in-C++.html" },
    { title: "Serialization Libraries in C++ ", link: "File-I-O-&-Serialization-in-C++.html" },
    { title: "Boost.Serialization in C++ ", link: "File-I-O-&-Serialization-in-C++.html" },
    { title: "nlohmann/json in C++ ", link: "File-I-O-&-Serialization-in-C++.html" },
    { title: "Debugging Tools in C++ ", link: "Debugging-&-Best-Practices-in-C++.html" },
    { title: "GDB (GNU Debugger) in C++ ", link: "Debugging-&-Best-Practices-in-C++.html" },
    { title: "Valgrind in C++ ", link: "Debugging-&-Best-Practices-in-C++.html" },
    { title: "IDE Debuggers (Visual Studio, CLion) in C++ ", link: "Debugging-&-Best-Practices-in-C++.html" },
    { title: "Common Pitfalls in C++ ", link: "Debugging-&-Best-Practices-in-C++.html" },
    { title: "Dangling Pointers in C++ ", link: "Debugging-&-Best-Practices-in-C++.html" },
    { title: "Undefined Behavior in C++ ", link: "Debugging-&-Best-Practices-in-C++.html" },
    { title: "Memory Leaks in C++ ", link: "Debugging-&-Best-Practices-in-C++.html" },
    { title: "Performance Optimization in C++ ", link: "Debugging-&-Best-Practices-in-C++.html" },
    { title: "Profiling in C++ ", link: "Debugging-&-Best-Practices-in-C++.html" },
    { title: "Inline Functions in C++ ", link: "Debugging-&-Best-Practices-in-C++.html" },
    { title: "Try Practical Questions for C++ ", link: "TryPracticalQuestionsforC++.html" },
    { title: "Introduction to Search Engine Optimization(SEO) ", link: "Introduction-to-Search-Engine-Optimization-(SEO).html" },
    { title: "What is SEO?    ", link: "Introduction-to-Search-Engine-Optimization-(SEO).html" },
    { title: " Key Components of SEO  ", link: "Introduction-to-Search-Engine-Optimization-(SEO).html" },
    { title: " Understanding Search Engine Results Pages (SERPs)  in SEO ", link: "Introduction-to-Search-Engine-Optimization-(SEO).html" },
    { title: "  The Importance of User Experience (UX) in SEO ", link: "Introduction-to-Search-Engine-Optimization-(SEO).html" },
    { title: "  Setting SEO Goals and Objectives ", link: "Introduction-to-Search-Engine-Optimization-(SEO).html" },
    { title: "   Technical SEO ", link: "Introduction-to-Search-Engine-Optimization-(SEO).html" },
    { title: "   Off-Page SEO ", link: "Introduction-to-Search-Engine-Optimization-(SEO).html" },
    { title: "   On-Page SEO ", link: "Introduction-to-Search-Engine-Optimization-(SEO).html" },
    { title: "   The evolution of SEO and its future trends ", link: "Introduction-to-Search-Engine-Optimization-(SEO).html" },
    { title: " Keyword Research The Foundation of SEO", link: "Keyword-Research-The-Foundation-of-SEO.html" },
    { title: "Keyword Types and Intent in SEO", link: "Keyword-Research-The-Foundation-of-SEO.html" },
    { title: "Keyword Research Tools and Techniques in SEO", link: "Keyword-Research-The-Foundation-of-SEO.html" },
    { title: "Mapping Keywords to Content in SEO", link: "Keyword-Research-The-Foundation-of-SEO.html" },
    { title: "Local Keyword Research in SEO", link: "Keyword-Research-The-Foundation-of-SEO.html" },
    { title: "Identifying local search terms in SEO", link: "Keyword-Research-The-Foundation-of-SEO.html" },
    { title: "Competitor keyword analysis in SEO", link: "Keyword-Research-The-Foundation-of-SEO.html" },
    { title: "On Page Optimization Optimizing Your Website Content ", link: "On-Page-Optimization-Optimizing-Your-Website-Content.html" },
    { title: "Title Tags and Meta Descriptions in SEO ", link: "On-Page-Optimization-Optimizing-Your-Website-Content.html" },
    { title: "Header Tags (H1-H6) in SEO ", link: "On-Page-Optimization-Optimizing-Your-Website-Content.html" },
    { title: "Content Optimization in SEO ", link: "On-Page-Optimization-Optimizing-Your-Website-Content.html" },
    { title: "Image Optimization in SEO ", link: "On-Page-Optimization-Optimizing-Your-Website-Content.html" },
    { title: "Internal Linking in SEO ", link: "On-Page-Optimization-Optimizing-Your-Website-Content.html" },
    { title: "URL Structure in SEO ", link: "On-Page-Optimization-Optimizing-Your-Website-Content.html" },
    { title: "Technical SEO Optimizing Website Infrastructure ", link: "Technical SEO-Optimizing-Website-Infrastructure.html" },
    { title: "Website Speed and Performance in SEO ", link: "Technical SEO-Optimizing-Website-Infrastructure.html" },
    { title: "Mobile-Friendliness and Responsiveness in SEO ", link: "Technical SEO-Optimizing-Website-Infrastructure.html" },
    { title: "Website Architecture and Navigation in SEO ", link: "Technical SEO-Optimizing-Website-Infrastructure.html" },
    { title: "XML Sitemaps in SEO ", link: "Technical SEO-Optimizing-Website-Infrastructure.html" },
    { title: "Robots.txt in SEO ", link: "Technical SEO-Optimizing-Website-Infrastructure.html" },
    { title: "HTTPS Security in SEO ", link: "Technical SEO-Optimizing-Website-Infrastructure.html" },
    { title: "Schema Markup (Structured Data) in SEO ", link: "Technical SEO-Optimizing-Website-Infrastructure.html" },
    { title: "Canonical Tags in SEO ", link: "Technical SEO-Optimizing-Website-Infrastructure.html" },
    { title: "Pagination and Infinite Scroll in SEO ", link: "Technical SEO-Optimizing-Website-Infrastructure.html" },
    { title: "International SEO (if applicable) in SEO ", link: "Technical SEO-Optimizing-Website-Infrastructure.html" },
    { title: "Off Page Optimization Building Authority and Trust ", link: "Off-Page-Optimization-Building-Authority-and-Trust.html" },
    { title: " Link Building: Earning High-Quality Backlinks in SEO ", link: "Off-Page-Optimization-Building-Authority-and-Trust.html" },
    { title: "Digital PR  in SEO ", link: "Off-Page-Optimization-Building-Authority-and-Trust.html" },
    { title: "Brand Mentions  in SEO ", link: "Off-Page-Optimization-Building-Authority-and-Trust.html" },
    { title: " Social Media and SEO ", link: "Off-Page-Optimization-Building-Authority-and-Trust.html" },
    { title: "  Local SEO ", link: "Off-Page-Optimization-Building-Authority-and-Trust.html" },
    { title: "  SEO Analytics and Reporting ", link: "Off-Page-Optimization-Building-Authority-and-Trust.html" },
    { title: " SEO Reporting and Communication ", link: "Off-Page-Optimization-Building-Authority-and-Trust.html" },
    { title: " A/B Testing for SEO ", link: "Off-Page-Optimization-Building-Authority-and-Trust.html" },
    { title: "Content Marketing and SEO Creating Valuable Assets ", link: "Content-Marketing-and-SEO-Creating-Valuable-Assets.html" },
    { title: "Developing a Content Strategy   in SEO  ", link: "Content-Marketing-and-SEO-Creating-Valuable-Assets.html" },
    { title: "Content Creation and Optimization for SEO   in SEO  ", link: "Content-Marketing-and-SEO-Creating-Valuable-Assets.html" },
    { title: "Content Promotion and Distribution   in SEO  ", link: "Content-Marketing-and-SEO-Creating-Valuable-Assets.html" },
    { title: "Content Audits and Updates   in SEO  ", link: "Content-Marketing-and-SEO-Creating-Valuable-Assets.html" },
    { title: " Staying Updated with SEO Trends and Algorithm Updates   ", link: "Content-Marketing-and-SEO-Creating-Valuable-Assets.html" },
    { title: "Ethical SEO Practices  in SEO  ", link: "Content-Marketing-and-SEO-Creating-Valuable-Assets.html" },
    { title: "  SEO Tools ", link: "Content-Marketing-and-SEO-Creating-Valuable-Assets.html" },
    { title: "Resources: Mastering Your Toolkit   in SEO  ", link: "Content-Marketing-and-SEO-Creating-Valuable-Assets.html" },
     { title: "Advanced SEO Strategies", link: "Advanced-SEO-Strategies.html" },
    { title: "E-commerce SEO ", link: "Advanced-SEO-Strategies.html" },
    { title: "Video SEO ", link: "Advanced-SEO-Strategies.html" },
    { title: "Voice Search Optimization in SEO", link: "Advanced-SEO-Strategies.html" },
    { title: "Image and Visual Search Optimization in SEO", link: "Advanced-SEO-Strategies.html" },
    { title: "SEO for Specific Platforms ", link: "Advanced-SEO-Strategies.html" },
    { title: "SEO Strategy and Implementation ", link: "SEO-Strategy-and-Implementation.html" },
    { title: " Conducting an SEO Audit ", link: "SEO-Strategy-and-Implementation.html" },
    { title: " Developing a Customized SEO Strategy        ", link: "SEO-Strategy-and-Implementation.html" },
    { title: "Implementing SEO Changes in SEO ", link: "SEO-Strategy-and-Implementation.html" },
    { title: "Monitoring and Iterating in SEO ", link: "SEO-Strategy-and-Implementation.html" },
    { title: "Introduction to Prompt Engineering ", link: "Introduction-to-Prompt-Engineering.html" },
    { title: "  What is Prompt Engineering? ", link: "Introduction-to-Prompt-Engineering.html" },
    { title: "  Why Prompt Engineering Matters ", link: "Introduction-to-Prompt-Engineering.html" },
    { title: "Key Concepts  in  Prompt Engineering ", link: "Introduction-to-Prompt-Engineering.html" },
    { title: "Types of Prompts  in  Prompt Engineering ", link: "Introduction-to-Prompt-Engineering.html" },
    { title: "Tools of the Trade  in  Prompt Engineering ", link: "Introduction-to-Prompt-Engineering.html" },
    { title: "Foundations of Language Models and Prompting ", link: "Foundations-of-Language-Models-and-Prompting.html" },
    { title: "How Language Models Understand Prompts in  Prompt Engineering ", link: "Foundations-of-Language-Models-and-Prompting.html" },
    { title: "Anatomy of a Prompt in  Prompt Engineering ", link: "Foundations-of-Language-Models-and-Prompting.html" },
    { title: "Data Pre-Processing for Better Prompts in  Prompt Engineering ", link: "Foundations-of-Language-Models-and-Prompting.html" },
    { title: "Writing Clear and Effective Prompts in  Prompt Engineering ", link: "Foundations-of-Language-Models-and-Prompting.html" },
    { title: "Techniques to Create Better Prompts ", link: "Techniques-to-Create-Better-Prompts.html" },
    { title: "Prompt Templates and Patterns  in  Prompt Engineering ", link: "Techniques-to-Create-Better-Prompts.html" },
    { title: " Based Prompting in  Prompt Engineering ", link: "Techniques-to-Create-Better-Prompts.html" },
    { title: "Text Augmentation Techniques  in  Prompt Engineering ", link: "Techniques-to-Create-Better-Prompts.html" },
    { title: "Iterative Prompt Refinement  in  Prompt Engineering ", link: "Techniques-to-Create-Better-Prompts.html" },
    { title: "Advanced Prompt Engineering ", link: "Advanced-Prompt-Engineering.html" },
    { title: " Prompt Transfer Across Tasks  in  Prompt Engineering ", link: "Advanced-Prompt-Engineering.html" },
    { title: " Introduction to Fine-Tuning Models  in  Prompt Engineering ", link: "Advanced-Prompt-Engineering.html" },
    { title: " Adversarial Prompting  in  Prompt Engineering ", link: "Advanced-Prompt-Engineering.html" },
    { title: "Safe Practices   in  Prompt Engineering ", link: "Advanced-Prompt-Engineering.html" },
    { title: "Specialized Prompting Techniques ", link: "Specialized-Prompting-Techniques.html" },
    { title: "Chain of Thought Prompting in Depth  in  Prompt Engineering ", link: "Specialized-Prompting-Techniques.html" },
    { title: "Tree of Thoughts Prompting  in  Prompt Engineering ", link: "Specialized-Prompting-Techniques.html" },
    { title: "Reflexion   in  Prompt Engineering ", link: "Specialized-Prompting-Techniques.html" },
    { title: "Prompt Chaining  in  Prompt Engineering ", link: "Specialized-Prompting-Techniques.html" },
    { title: "Prompt Engineering fullcourse ", link: "Prompt-Engineering-full-course.html" },
    { title: "C++ full course ", link: "C++fullcourse.html" },
    { title: "SEO full course ", link: "seofullcourse.html" },
    { title: "Prompt Engineering for Specific Applications ", link: "Prompt-Engineering-for-Specific-Applications.html" },
    { title: "Natural Language Processing (NLP)  in  Prompt Engineering ", link: "Prompt-Engineering-for-Specific-Applications.html" },
    { title: "Conversational AI and Chatbots  in  Prompt Engineering ", link: "Prompt-Engineering-for-Specific-Applications.html" },
    { title: "Code Generation  in  Prompt Engineering ", link: "Prompt-Engineering-for-Specific-Applications.html" },
    { title: "Creative Writing and Content Creation  in  Prompt Engineering ", link: "Prompt-Engineering-for-Specific-Applications.html" },
    { title: "Evaluating and Optimizing Prompts ", link: "Evaluating-and-Optimizing-Prompts.html" },
    { title: "Metrics for Evaluating Prompt Performance  in  Prompt Engineering ", link: "Evaluating-and-Optimizing-Prompts.html" },
    { title: "A/B Testing for Prompts  in  Prompt Engineering ", link: "Evaluating-and-Optimizing-Prompts.html" },
    { title: "Tools for Evaluating Prompts  in  Prompt Engineering ", link: "Evaluating-and-Optimizing-Prompts.html" },
    { title: "Emerging Trends The Future of Prompt Engineering  ", link: "The-Future-of-PromptEngineering.html" },
    { title: "The Role of Prompt Engineering in AI Development in  Prompt Engineering  ", link: "The-Future-of-PromptEngineering.html" },
    { title: "Best Practices and Resources in  Prompt Engineering  ", link: "The-Future-of-PromptEngineering.html" },
    { title: " ", link: "" },



      { title: " ", link: "" },


      
      
      




      



      
    ];

    const filteredResults = exampleResults.filter(result =>
      result.title.toLowerCase().includes(searchTerm)
    );

    searchResults.innerHTML = ""; // Clear previous results
    if (filteredResults.length > 0 && searchTerm.length > 0) {
      searchResults.style.display = "block";
      filteredResults.forEach(result => {
        const link = document.createElement("a");
        link.href = result.link;
        link.textContent = result.title;
        searchResults.appendChild(link);
      });
    } else {
      searchResults.style.display = "none";
    }
  });

  // Hide search input if user clicks outside of it.
  window.addEventListener('click', function(event) {
      if (!event.target.closest('.search-container')) { // If click is outside search container
        searchInput.style.display = 'none';
        searchResults.style.display = 'none'; // Hide results too
      }
    });

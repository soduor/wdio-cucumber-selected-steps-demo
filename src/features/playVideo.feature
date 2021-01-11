@bug
Feature: Play a video

    Scenario: I play a video
        Given I open the url "https://www.w3.org/2010/05/video/mediaevents.html"
        And I click on the element "header"
        And I play the video
        And I pause for 10000ms
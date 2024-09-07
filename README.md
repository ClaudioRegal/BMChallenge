<h1 align="center"> TECHNICAL AUTOMATION TEST <h1>
<h2 align="center">  TESTING WITH CYPRESS <h2>
<h3 align="center">Requirements</h3>

<p>
  <pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Git<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Node<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cypress</pre>
</p>

<h3 align="center">What will be tested</h3>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<pre>git clone https://github.com/ClaudioRegal/ChallengeBM</pre><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<h3 align="center">Installation</h3>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<pre>npm i cypress@12.2.0 –save-dev</pre>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<pre>npm i Cypress –save-dev</pre>

<h3 align="center"> Cypress test Runner</h3>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<pre>"npm cypress open" or<br>"npx cypress open"&nbsp;or<br>"npx cypress run</pre><br>
*The "cypress open" command, in addition to opening the Cypress Test Runner, creates the home folder /cypress/ and the configuration file /cypress.json



<h3 align="center"> Configuration<br></h3>
<h2align="left">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Package.json</h2>

 <pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"brilliantmachine-cypress"<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "version": "1.0.0"<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "description":"technical automation test"<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "main": "index.js"<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "author": "Claudio Regal"<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "license": "MIT"<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "devDependencies":"cypress": "12.2.0"</pre>


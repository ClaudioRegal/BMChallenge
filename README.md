<h1 align="center"> TECHNICAL AUTOMATION TEST <h1>
<h2 align="center">  TESTING WITH CYPRESS <h2>
<h3 align="center">Requirements</h3>

<p>
  <pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Git<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Node<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cypress</pre>
</p>

<h3 align="center">What will be tested</h3>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<pre>git clone https://github.com/ClaudioRegal/BMChallenge</pre><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<h3 align="center">Installation</h3>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<pre>npm i cypress@12.2.0 –save-dev</pre>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<pre>npm i Cypress –save-dev</pre>

<h3 align="center"> Cypress test Runner</h3>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<pre>npm cypress open <br>npx cypress open&nbsp;<br>npx cypress run</pre>
<pre>To open the Cypress interface use the commands: "npm cypress open" or "npx cypress open"

If you want to run it through the terminal, use the command "npx cypress run"

However, if a commit is made to a branch without a PR, GitHub Action automatically runs the tests contained in the project.</pre>
<pre>*The "cypress open" command, in addition to opening the Cypress Test Runner, creates the home folder /cypress/ and the configuration file /cypress.json</pre>



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

<h3 align="center">Falso Negativo</h3>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<pre>Network, microservices, and dependencies can fail.<br>An E2E test can fail because of other resources beyond your application's control:</pre>
</p>

<pre><ul>
  <li>API can fail</li>
  <li>Network or Firewall unavailability</li>
  <li>Unavailability of resources like CPU and memory</li>
  <li>Parallel deployments</li></pre>
</ul>
<h3 align="center">CI/CD</h3>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<pre>Versioned code on GitHub and using GitHub Actions to configure continuous integration with each code submission to the branch main.<br>
  Working with software quality and testing, I realized the importance and increasing need for coded tests to not just be on my machine and the reasons that led me to seek to understand more about the subject were:

<li>Greater approximation of coding;
<li>Quick feedback in advance;
<li>Greater confidence when working on the project, knowing that there is a battery of tests performed for each pull request.
</pre>
<h3 align="center">Conclusion</h3>
<pre>The practices seen during this experiment result in greater security and quick feedback when local changes are sent to a remote repository, enabling corrections as quickly as possible, before such modifications impact users of the product being developed.</pre>
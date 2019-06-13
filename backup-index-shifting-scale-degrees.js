<!DOCTYPE html>
<html>
	<meta charset="UTF-8"/>
	<meta name="viewport" content="initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
	<title>Page Title</title>
	<link rel="stylesheet" href="assets/css/main.css"/>
<body>

	<div class="grid" ng-app="myApp" ng-controller="myCtrl">
		<div class="item1 bordered">
			<h1>Quiz: Scale Degrees</h1>
		</div>

		<div class="item2 bordered">
			<h3>Quiz Modes</h3>
			<div id="mode-options">
				<label>
					<input type="radio" name="test-mode" value="cats" checked/>
					Scale Degree &rarr; Note
				</label>

				<br/>

				<label>
					<input type="radio" name="test-mode"/>
					Note &rarr; Scale Degree
				</label>

				<br/>

				<label>
					<input type="radio" name="test-mode"/>
					Both
				</label>
			</div>
		</div>

		<div class="item3 bordered">
			<h3>Keys</h3>
			<input type="checkbox" name="C" value="C" checked ng-click="alterActiveKeys($event)">C<br>
			<input type="checkbox" name="F" value="F" ng-click="alterActiveKeys($event)">F<br>
			<input type="checkbox" name="G" value="G" ng-click="alterActiveKeys($event)">G<br>
		</div>

		<div class="item4 bordered">
			<h3>Scale Degrees: {{userSelectedKey}}</h3>
			<input type="checkbox" name="1" value="1" checked ng-click="alterActiveScaleDegrees($event)">1<br>
			<input type="checkbox" name="2" value="2" checked ng-click="alterActiveScaleDegrees($event)">2<br>
			<input type="checkbox" name="3" value="3" checked ng-click="alterActiveScaleDegrees($event)">3<br>
			<input type="checkbox" name="4" value="4" checked ng-click="alterActiveScaleDegrees($event)">4<br>
			<input type="checkbox" name="5" value="5" checked ng-click="alterActiveScaleDegrees($event)">5<br>
			<input type="checkbox" name="6" value="6" checked ng-click="alterActiveScaleDegrees($event)">6<br>
			<input type="checkbox" name="7" value="7" checked ng-click="alterActiveScaleDegrees($event)">7<br>
		</div>

		<div class="item5 bordered">

			<section>
				<h2 class="bordered">Question</h2>
				<h3>Key: {{keySelection}}</h3>
				<h3>Scale degree: {{scaleDegreeSelection}}</h3>
			</section>

			<section>
				<h2 id="answer-banner" class="bordered">Answer</h2>
				<section class="input">
					<input id="answer-input" type="text" ng-model="answer" ng-keypress="checkAnswer($event)"><br>
					<input id="answer-submit" type="button" value="Submit" ng-click="checkAnswer()"><br>
				</section>
			</section>

			<h1 id="result-icon">&#x2713;</h1>

			<section id="help-table-container">
				<input id="help-btn" type="button" value="Show Help" ng-model="helpBtn" ng-click="toggleHelpTable()"><br>

				<table id="help-table">
					<tr>
						<th><h2>Key</h2></th>
						<th><h2>1</h2></th>
						<th><h2>2</h2></th>
						<th><h2>3</h2></th>
						<th><h2>4</h2></th>
						<th><h2>5</h2></th>
						<th><h2>6</h2></th>
						<th><h2>7</h2></th>
					</tr>

					<tr ng-repeat="(key, scaleDegrees) in data">
						<td>{{ key }}</td>
						<td>{{ scaleDegrees["1"] }}</td>
						<td>{{ scaleDegrees["2"] }}</td>
						<td>{{ scaleDegrees["3"] }}</td>
						<td>{{ scaleDegrees["4"] }}</td>
						<td>{{ scaleDegrees["5"] }}</td>
						<td>{{ scaleDegrees["6"] }}</td>
						<td>{{ scaleDegrees["7"] }}</td>
					</tr>
				</table>
			</section>
		</div>

		<div class="item6 bordered">
			<p>footer</p>
		</div>
	</div>

	<script type="text/javascript" src="assets/js/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="assets/js/angular-1.7.8.min.js"></script>
	<script type="text/javascript" src="assets/js/main.js"></script>

</body>
</html>

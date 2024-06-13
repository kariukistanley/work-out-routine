function generateRoutine(){
	const days= document.getElementById("days-select").value
	const routineDiv= document.getElementById("routine");
	routineDiv.innerHTML= '';
	if(days===''){
		routineDiv.innerHTML= 'please select the number of days.';
		return;
	}
	const exercises= {
		chest:['Bench Press', 'Inclunine Dumbell Press','Chest Fly'],
		back:['pull-ups', 'Deadlift','Bent-over Row'],
		legs:['Squats','leg press','lunges'],
		shoulders:['shoulder press', 'lateral raise','Hammer curls'],
		arms:['Bicep curls', 'Tricep Dips','Hammer curls']
	};
		const dayArray=['monday','wednesday','friday', 'saturday','sunday'];
		let workoutplan='';
		for(let i =0;i<days;i++){
			workoutplan+=`<h2>${dayArray[i]}</h2>`;
			workoutplan+='<ul>';
			for(let muscleGroup in exercises){
				const randomExercise=
				exercises[muscleGroup][Math.floor(Math.random() *
									exercises[muscleGroup].length)];
						workoutplan+=`<li>${randomExercise}(${muscleGroup})</li>`;
			}
		workoutplan+='</ul>';

	}
	routineDiv.innerHTML=workoutplan;

}
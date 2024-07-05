document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const weight = parseFloat(document.getElementById('weight').value);
    const time = parseFloat(document.getElementById('time').value);
    const activity = parseFloat(document.querySelector('input[name="activity"]:checked').value);

    // Validar peso
    const weightAlert = document.getElementById('weightAlert');
    if (weight < 1 || weight > 120 || isNaN(weight)) {
        weightAlert.classList.remove('d-none');
        return;
    } else {
        weightAlert.classList.add('d-none');
    }

    // Validar tiempo
    const timeAlert = document.getElementById('timeAlert');
    if (time < 5 || time > 150 || isNaN(time)) {
        timeAlert.classList.remove('d-none');
        return;
    } else {
        timeAlert.classList.add('d-none');
    }

    // Calcular calorías
    const calories = activity * 3.5 * weight * (time / 200);

    // Mostrar resultado
    const resultAlert = document.getElementById('resultAlert');
    resultAlert.textContent = `Calorías quemadas: ${calories.toFixed(2)}`;
    resultAlert.classList.remove('d-none');
});

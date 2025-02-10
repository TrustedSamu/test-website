import { getTariffs, initializeDefaultTariffs } from './tariffs.js';

// Function to create a tariff card
const createTariffCard = (tariff) => {
    return `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">${tariff.name}</h3>
                    <p class="price">ab ${tariff.pricePerKwh} ct/kWh</p>
                    <ul class="list-unstyled">
                        ${tariff.features.map(feature => 
                            `<li><i class="fas fa-check text-success"></i> ${feature}</li>`
                        ).join('')}
                    </ul>
                    <a href="#kontakt" class="btn btn-primary">Jetzt wechseln</a>
                </div>
            </div>
        </div>
    `;
};

// Function to display tariffs
const displayTariffs = async () => {
    try {
        const tariffsContainer = document.querySelector('#tarife .row');
        const tariffs = await getTariffs();
        
        if (tariffs.length > 0) {
            const tariffCards = tariffs.map(tariff => createTariffCard(tariff)).join('');
            tariffsContainer.innerHTML = tariffCards;
        }
    } catch (error) {
        console.error("Error displaying tariffs:", error);
    }
};

// Initialize the application
const initializeApp = async () => {
    try {
        await initializeDefaultTariffs();
        await displayTariffs();
    } catch (error) {
        console.error("Error initializing app:", error);
    }
};

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp); 
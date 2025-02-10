const TARIFFS_COLLECTION = 'tariffs';

// Function to fetch all tariffs
export const getTariffs = async () => {
    try {
        const querySnapshot = await window.db.collection(TARIFFS_COLLECTION).get();
        const tariffs = [];
        querySnapshot.forEach((doc) => {
            tariffs.push({ id: doc.id, ...doc.data() });
        });
        return tariffs;
    } catch (error) {
        console.error("Error fetching tariffs:", error);
        throw error;
    }
};

// Function to add a new tariff
export const addTariff = async (tariffData) => {
    try {
        const docRef = await window.db.collection(TARIFFS_COLLECTION).add(tariffData);
        return docRef.id;
    } catch (error) {
        console.error("Error adding tariff:", error);
        throw error;
    }
};

// Function to update a tariff
export const updateTariff = async (tariffId, tariffData) => {
    try {
        await window.db.collection(TARIFFS_COLLECTION).doc(tariffId).update(tariffData);
    } catch (error) {
        console.error("Error updating tariff:", error);
        throw error;
    }
};

// Initialize default tariffs if they don't exist
export const initializeDefaultTariffs = async () => {
    try {
        const existingTariffs = await getTariffs();
        
        if (existingTariffs.length === 0) {
            const defaultTariffs = [
                {
                    name: "Basis Tarif",
                    pricePerKwh: 28.95,
                    features: [
                        "Grundversorgung",
                        "12 Monate Preisgarantie",
                        "Regionale Versorgung"
                    ],
                    type: "basic"
                },
                {
                    name: "Öko Tarif",
                    pricePerKwh: 30.95,
                    features: [
                        "100% Ökostrom",
                        "24 Monate Preisgarantie",
                        "CO2-neutral"
                    ],
                    type: "eco"
                },
                {
                    name: "Premium Tarif",
                    pricePerKwh: 32.95,
                    features: [
                        "Smart-Home Ready",
                        "36 Monate Preisgarantie",
                        "Persönlicher Berater"
                    ],
                    type: "premium"
                }
            ];

            for (const tariff of defaultTariffs) {
                await addTariff(tariff);
            }
            console.log("Default tariffs initialized");
        }
    } catch (error) {
        console.error("Error initializing default tariffs:", error);
        throw error;
    }
}; 
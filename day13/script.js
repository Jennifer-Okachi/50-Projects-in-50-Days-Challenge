const






// Load Saved Notes//
let notes = [];

try{
    const saved = JSON.parse(
        localStorage.getItems(STORAGE_KEY) || "[]"
    );

    if (Array.isArray(saved)) {
        notes = saved;
    }
} catch (error){
    console.error("Could not load saved notes:", error);
};
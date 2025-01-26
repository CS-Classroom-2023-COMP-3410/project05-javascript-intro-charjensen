const elements = [
    { name: "Hydrogen", symbol: "H", atomicNumber: 1, group: "Nonmetals" },
    { name: "Helium", symbol: "He", atomicNumber: 2, group: "Noble gases" },
    { name: "Lithium", symbol: "Li", atomicNumber: 3, group: "Alkali metals" },
    { name: "Beryllium", symbol: "Be", atomicNumber: 4, group: "Alkaline earth metals" },
    { name: "Boron", symbol: "B", atomicNumber: 5, group: "Metalloids" },
    { name: "Carbon", symbol: "C", atomicNumber: 6, group: "Nonmetals" },
    { name: "Nitrogen", symbol: "N", atomicNumber: 7, group: "Nonmetals" },
    { name: "Oxygen", symbol: "O", atomicNumber: 8, group: "Nonmetals" },
    { name: "Fluorine", symbol: "F", atomicNumber: 9, group: "Halogens" },
    { name: "Neon", symbol: "Ne", atomicNumber: 10, group: "Noble gases" },
    { name: "Sodium", symbol: "Na", atomicNumber: 11, group: "Alkali metals" },
    { name: "Magnesium", symbol: "Mg", atomicNumber: 12, group: "Alkaline earth metals" },
    { name: "Aluminum", symbol: "Al", atomicNumber: 13, group: "Post-transition metals" },
    { name: "Silicon", symbol: "Si", atomicNumber: 14, group: "Metalloids" },
    { name: "Phosphorus", symbol: "P", atomicNumber: 15, group: "Nonmetals" },
    { name: "Sulfur", symbol: "S", atomicNumber: 16, group: "Nonmetals" },
    { name: "Chlorine", symbol: "Cl", atomicNumber: 17, group: "Halogens" },
    { name: "Argon", symbol: "Ar", atomicNumber: 18, group: "Noble gases" },
    { name: "Potassium", symbol: "K", atomicNumber: 19, group: "Alkali metals" },
    { name: "Calcium", symbol: "Ca", atomicNumber: 20, group: "Alkaline earth metals" },
    { name: "Scandium", symbol: "Sc", atomicNumber: 21, group: "Transition metals" },
    { name: "Titanium", symbol: "Ti", atomicNumber: 22, group: "Transition metals" },
    { name: "Vanadium", symbol: "V", atomicNumber: 23, group: "Transition metals" },
    { name: "Chromium", symbol: "Cr", atomicNumber: 24, group: "Transition metals" },
    { name: "Manganese", symbol: "Mn", atomicNumber: 25, group: "Transition metals" },
    { name: "Iron", symbol: "Fe", atomicNumber: 26, group: "Transition metals" },
    { name: "Cobalt", symbol: "Co", atomicNumber: 27, group: "Transition metals" },
    { name: "Nickel", symbol: "Ni", atomicNumber: 28, group: "Transition metals" },
    { name: "Copper", symbol: "Cu", atomicNumber: 29, group: "Transition metals" },
    { name: "Zinc", symbol: "Zn", atomicNumber: 30, group: "Transition metals" },
    { name: "Gallium", symbol: "Ga", atomicNumber: 31, group: "Post-transition metals" },
    { name: "Germanium", symbol: "Ge", atomicNumber: 32, group: "Metalloids" },
    { name: "Arsenic", symbol: "As", atomicNumber: 33, group: "Metalloids" },
    { name: "Selenium", symbol: "Se", atomicNumber: 34, group: "Nonmetals" },
    { name: "Bromine", symbol: "Br", atomicNumber: 35, group: "Halogens" },
    { name: "Krypton", symbol: "Kr", atomicNumber: 36, group: "Noble gases" },
    { name: "Rubidium", symbol: "Rb", atomicNumber: 37, group: "Alkali metals" },
    { name: "Strontium", symbol: "Sr", atomicNumber: 38, group: "Alkaline earth metals" },
    { name: "Yttrium", symbol: "Y", atomicNumber: 39, group: "Transition metals" },
    { name: "Zirconium", symbol: "Zr", atomicNumber: 40, group: "Transition metals" },
    { name: "Niobium", symbol: "Nb", atomicNumber: 41, group: "Transition metals" },
    { name: "Molybdenum", symbol: "Mo", atomicNumber: 42, group: "Transition metals" },
    { name: "Technetium", symbol: "Tc", atomicNumber: 43, group: "Transition metals" },
    { name: "Ruthenium", symbol: "Ru", atomicNumber: 44, group: "Transition metals" },
    { name: "Rhodium", symbol: "Rh", atomicNumber: 45, group: "Transition metals" },
    { name: "Palladium", symbol: "Pd", atomicNumber: 46, group: "Transition metals" },
    { name: "Silver", symbol: "Ag", atomicNumber: 47, group: "Transition metals" },
    { name: "Cadmium", symbol: "Cd", atomicNumber: 48, group: "Transition metals" },
    { name: "Indium", symbol: "In", atomicNumber: 49, group: "Post-transition metals" },
    { name: "Tin", symbol: "Sn", atomicNumber: 50, group: "Post-transition metals" },
    { name: "Antimony", symbol: "Sb", atomicNumber: 51, group: "Metalloids" },
    { name: "Tellurium", symbol: "Te", atomicNumber: 52, group: "Metalloids" },
    { name: "Iodine", symbol: "I", atomicNumber: 53, group: "Halogens" },
    { name: "Xenon", symbol: "Xe", atomicNumber: 54, group: "Noble gases" },
    { name: "Cesium", symbol: "Cs", atomicNumber: 55, group: "Alkali metals" },
    { name: "Barium", symbol: "Ba", atomicNumber: 56, group: "Alkaline earth metals" },
    { name: "Lanthanum", symbol: "La", atomicNumber: 57, group: "Lanthanides" },
    { name: "Cerium", symbol: "Ce", atomicNumber: 58, group: "Lanthanides" },
    { name: "Praseodymium", symbol: "Pr", atomicNumber: 59, group: "Lanthanides" },
    { name: "Neodymium", symbol: "Nd", atomicNumber: 60, group: "Lanthanides" },
    { name: "Promethium", symbol: "Pm", atomicNumber: 61, group: "Lanthanides" },
    { name: "Samarium", symbol: "Sm", atomicNumber: 62, group: "Lanthanides" },
    { name: "Europium", symbol: "Eu", atomicNumber: 63, group: "Lanthanides" },
    { name: "Gadolinium", symbol: "Gd", atomicNumber: 64, group: "Lanthanides" },
    { name: "Terbium", symbol: "Tb", atomicNumber: 65, group: "Lanthanides" },
    { name: "Dysprosium", symbol: "Dy", atomicNumber: 66, group: "Lanthanides" },
    { name: "Holmium", symbol: "Ho", atomicNumber: 67, group: "Lanthanides" },
    { name: "Erbium", symbol: "Er", atomicNumber: 68, group: "Lanthanides" },
    { name: "Thulium", symbol: "Tm", atomicNumber: 69, group: "Lanthanides" },
    { name: "Ytterbium", symbol: "Yb", atomicNumber: 70, group: "Lanthanides" },
    { name: "Lutetium", symbol: "Lu", atomicNumber: 71, group: "Lanthanides" },
    { name: "Hafnium", symbol: "Hf", atomicNumber: 72, group: "Transition metals" },
    { name: "Tantalum", symbol: "Ta", atomicNumber: 73, group: "Transition metals" },
    { name: "Tungsten", symbol: "W", atomicNumber: 74, group: "Transition metals" },
    { name: "Rhenium", symbol: "Re", atomicNumber: 75, group: "Transition metals" },
    { name: "Osmium", symbol: "Os", atomicNumber: 76, group: "Transition metals" },
    { name: "Iridium", symbol: "Ir", atomicNumber: 77, group: "Transition metals" },
    { name: "Platinum", symbol: "Pt", atomicNumber: 78, group: "Transition metals" },
    { name: "Gold", symbol: "Au", atomicNumber: 79, group: "Transition metals" },
    { name: "Mercury", symbol: "Hg", atomicNumber: 80, group: "Transition metals" },
    { name: "Thallium", symbol: "Tl", atomicNumber: 81, group: "Post-transition metals" },
    { name: "Lead", symbol: "Pb", atomicNumber: 82, group: "Post-transition metals" },
    { name: "Bismuth", symbol: "Bi", atomicNumber: 83, group: "Post-transition metals" },
    { name: "Polonium", symbol: "Po", atomicNumber: 84, group: "Metalloids" },
    { name: "Astatine", symbol: "At", atomicNumber: 85, group: "Halogens" },
    { name: "Radon", symbol: "Rn", atomicNumber: 86, group: "Noble gases" },
    { name: "Francium", symbol: "Fr", atomicNumber: 87, group: "Alkali metals" },
    { name: "Radium", symbol: "Ra", atomicNumber: 88, group: "Alkaline earth metals" },
    { name: "Actinium", symbol: "Ac", atomicNumber: 89, group: "Actinides" },
    { name: "Thorium", symbol: "Th", atomicNumber: 90, group: "Actinides" },
    { name: "Protactinium", symbol: "Pa", atomicNumber: 91, group: "Actinides" },
    { name: "Uranium", symbol: "U", atomicNumber: 92, group: "Actinides" },
    { name: "Neptunium", symbol: "Np", atomicNumber: 93, group: "Actinides" },
    { name: "Plutonium", symbol: "Pu", atomicNumber: 94, group: "Actinides" },
    { name: "Americium", symbol: "Am", atomicNumber: 95, group: "Actinides" },
    { name: "Curium", symbol: "Cm", atomicNumber: 96, group: "Actinides" },
    { name: "Berkelium", symbol: "Bk", atomicNumber: 97, group: "Actinides" },
    { name: "Californium", symbol: "Cf", atomicNumber: 98, group: "Actinides" },
    { name: "Einsteinium", symbol: "Es", atomicNumber: 99, group: "Actinides" },
    { name: "Fermium", symbol: "Fm", atomicNumber: 100, group: "Actinides" },
    { name: "Mendelevium", symbol: "Md", atomicNumber: 101, group: "Actinides" },
    { name: "Nobelium", symbol: "No", atomicNumber: 102, group: "Actinides" },
    { name: "Lawrencium", symbol: "Lr", atomicNumber: 103, group: "Actinides" },
    { name: "Rutherfordium", symbol: "Rf", atomicNumber: 104, group: "Transition metals" },
    { name: "Dubnium", symbol: "Db", atomicNumber: 105, group: "Transition metals" },
    { name: "Seaborgium", symbol: "Sg", atomicNumber: 106, group: "Transition metals" },
    { name: "Bohrium", symbol: "Bh", atomicNumber: 107, group: "Transition metals" },
    { name: "Hassium", symbol: "Hs", atomicNumber: 108, group: "Transition metals" },
    { name: "Meitnerium", symbol: "Mt", atomicNumber: 109, group: "Unknown properties" },
    { name: "Darmstadtium", symbol: "Ds", atomicNumber: 110, group: "Unknown properties" },
    { name: "Roentgenium", symbol: "Rg", atomicNumber: 111, group: "Unknown properties" },
    { name: "Copernicium", symbol: "Cn", atomicNumber: 112, group: "Unknown properties" },
    { name: "Nihonium", symbol: "Nh", atomicNumber: 113, group: "Unknown properties" },
    { name: "Flerovium", symbol: "Fl", atomicNumber: 114, group: "Unknown properties" },
    { name: "Moscovium", symbol: "Mc", atomicNumber: 115, group: "Unknown properties" },
    { name: "Livermorium", symbol: "Lv", atomicNumber: 116, group: "Unknown properties" },
    { name: "Tennessine", symbol: "Ts", atomicNumber: 117, group: "Unknown properties" },
    { name: "Oganesson", symbol: "Og", atomicNumber: 118, group: "Unknown properties" }
];

const periodicTable = document.getElementById('periodic-table');
const searchBar = document.getElementById('search-bar');
const elementInfo = document.getElementById('element-info');
const elementName = document.getElementById('element-name');
const elementSymbol = document.getElementById('element-symbol');
const atomicNumber = document.getElementById('atomic-number');
const elementGroup = document.getElementById('element-group');

function createPeriodicTable() {
    elements.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('element');
        div.textContent = element.symbol;
        div.addEventListener('click', () => displayElementInfo(element));
        periodicTable.appendChild(div);
    });
}

function displayElementInfo(element) {
    elementName.textContent = element.name;
    elementSymbol.textContent = element.symbol;
    atomicNumber.textContent = element.atomicNumber;
    elementGroup.textContent = element.group;

    document.querySelectorAll('.element').forEach(el => el.classList.remove('selected'));
    event.target.classList.add('selected');

    elementInfo.classList.remove('hidden');
}

function filterElements() {
    const query = searchBar.value.toLowerCase();
    const filteredElements = elements.filter(
        element =>
            element.name.toLowerCase().includes(query) ||
            element.symbol.toLowerCase().includes(query) ||
            element.atomicNumber.toString().includes(query)
    );

    periodicTable.innerHTML = '';
    filteredElements.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('element');
        div.textContent = element.symbol;
        div.addEventListener('click', () => displayElementInfo(element));
        periodicTable.appendChild(div);
    });
}

searchBar.addEventListener('input', filterElements);

createPeriodicTable();

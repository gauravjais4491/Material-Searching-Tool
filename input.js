const HCS = `[
    {
        "Material_Name": "AISI 1059",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.65,
        "Density": 7.87
    },
    {
        "Material_Name": "AISI 1060",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.66,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1065",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.7,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1070",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.75,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1075",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.8,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1080",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.88,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1084",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.93,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1085",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.95,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1086",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.93,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1090",
        "Young_Modulus": 205,
        "Poisons_Ratio": 0.29,
        "Percentage_Carbon": 0.98,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1095",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 1.03,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1566",
        "Young_Modulus": 210,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.71,
        "Density": 7.85
    },
    {
        "Material_Name": "SAE 1572",
        "Young_Modulus": 210,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.76,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 4161",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.64,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 4161H",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.65,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI E50100 ",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 1.1,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 5060",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.64,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 50B60",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.64,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 50B60H",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.65,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI E51100",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 1.1,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 5155",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.59,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 5155H",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.6,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 5160",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.64,
        "Density": 7.85
    }
]`;

const MCS = `[
    {
        "Material_Name": "AISI 409",
        "Young_Modulus": 206,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.5,
        "Density": 7.85
    },
    {
        "Material_Name": "SCM 435",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.38,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1030",
        "Young_Modulus": 206,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.34,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1034",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.38,
        "Density": 7.87
    },
    {
        "Material_Name": "AISI 1035",
        "Young_Modulus": 196,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.38,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1038",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.42,
        "Density": 7.845
    },
    {
        "Material_Name": "AISI 1040",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.44,
        "Density": 7.845
    },
    {
        "Material_Name": "AISI 1042",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.47,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1043",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.47,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1045",
        "Young_Modulus": 206,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.5,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1049",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.53,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1050",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.55,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1055",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.6,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1536",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.37,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1132",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.34,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1139",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.43,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1137",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.39,
        "Density": 7.87
    },
    {
        "Material_Name": "AISI 1140",
        "Young_Modulus": 210,
        "Percentage_Carbon": 0.44,
        "Density": 8.03
    },
    {
        "Material_Name": "AISI 1141",
        "Young_Modulus": 205,
        "Poissson_Ratio": 0.29,
        "Percentage_Carbon": 0.45,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1144",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.45,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1146",
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.49,
        "Density": 7.87
    }
]`;

const LCS = `[
    {
        "Material_Name": "AISI 304",
        "Young_Modulus": 193,
        "Poisson_Ratio": 0.265,
        "Percentage_Carbon": 0.07,
        "Density": 8
    },
    {
        "Material_Name": "ASTM A815",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.03,
        "Density": 7.805
    },
    {
        "Material_Name": "AISI 316L",
        "Young_Modulus": 193,
        "Poisson_Ratio": 0.25,
        "Percentage_Carbon": 0.03,
        "Density": 8
    },
    {
        "Material_Name": "AISI 1005",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.06,
        "Density": 7.872
    },
    {
        "Material_Name": "SAE AISI 1008",
        "Young_Modulus": 190,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.1,
        "Density": 7.872
    },
    {
        "Material_Name": "SAE AISI 1012",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.15,
        "Density": 7.87
    },
    {
        "Material_Name": "SAE AISI 1015",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.18,
        "Density": 7.87
    },
    {
        "Material_Name": "SAE AISI 1018",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.2,
        "Density": 7.87
    },
    {
        "Material_Name": "SAE AISI 1020",
        "Young_Modulus": 186,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.23,
        "Density": 7.87
    },
    {
        "Material_Name": "SAE AISI 1022",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.23,
        "Density": 7.868
    },
    {
        "Material_Name": "AISI 1023",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.25,
        "Density": 7.858
    },
    {
        "Material_Name": "SAE AISI 1025",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.28,
        "Density": 7.858
    },
    {
        "Material_Name": "AISI 1026",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.28,
        "Density": 7.858
    },
    {
        "Material_Name": "SAE AISI 1029",
        "Young_Modulus": 210,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.31,
        "Density": 8.03
    },
    {
        "Material_Name": "AISI 1108",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.13,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1110",
        "Percentage_Carbon": 0.13
    },
    {
        "Material_Name": "AISI 1116",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.2,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1117",
        "Young _odulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.2,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1118",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.2,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1119",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.2,
        "Density": 7.87
    },
    {
        "Material_Name": "AISI 1211",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.13,
        "Density": 7.87
    }
]`;

const Non_Ferous = `[]`;
const Cast_Iron = `[]`;
const Stainless_Steel = `[
    {
        "Material_Name": "SS301",
        "Young_Modulus": 197,
        "Poisson_Ratio": 0.275,
        "Percentage_Carbon": 0.15,
        "Density": 8.03
    },
    {
        "Material_Name": "SS302",
        "Young_Modulus": 193,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.15,
        "Density": 7.9
    },
    {
        "Material_Name": "SS303",
        "Young_Modulus": 193,
        "Poisson_Ratio": 0.28,
        "Percentage_Carbon": 0.15,
        "Density": 8.03
    },
    {
        "Material_Name": "SS304",
        "Young_Modulus": 193,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.08,
        "Density": 8
    },
    {
        "Material_Name": "SS304L",
        "Young_Modulus": 193,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.03,
        "Density": 7.9
    },
    {
        "Material_Name": "SS304H",
        "Young_Modulus": 190,
        "Poisson_Ratio": 0.275,
        "Percentage_Carbon": 0.1,
        "Density": 8
    },
    {
        "Material_Name": "SS309",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.2,
        "Density": 8
    },
    {
        "Material_Name": "SS309H",
        "Young_Modulus": 193,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.1,
        "Density": 7.9
    },
    {
        "Material_Name": "SS309S",
        "Young_Modulus": 193,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.15,
        "Density": 7.89
    },
    {
        "Material_Name": "SS310S",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.25,
        "Density": 8
    },
    {
        "Material_Name": "SS314",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.25,
        "Density": 7.8
    },
    {
        "Material_Name": "SS316",
        "Young_Modulus": 193,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.08,
        "Density": 8
    },
    {
        "Material_Name": "SS316F",
        "Young_Modulus": 193,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.08,
        "Density": 8
    },
    {
        "Material_Name": "SS316L",
        "Young_Modulus": 193,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.08,
        "Density": 8
    },
    {
        "Material_Name": "SS317",
        "Young_Modulus": 195,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.08,
        "Density": 8
    },
    {
        "Material_Name": "SS317L",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.03,
        "Density": 8
    },
    {
        "Material_Name": "SS317LMN",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.03,
        "Density": 8
    }
]`;
const Alloy_Steel = `[]`;
const Oxide_Ceramic = `[]`;
const Silicate_Ceramic = `[]`;
const Carbide_Ceramic = `[]`;
const Nitride_Ceramic = `[]`;
const Alloys = `[]`;
const Wrought_Iron = `[]`;
const Glass_Ceramic = `[]`;
const Polymer = `[]`;
const Smart_Material = `[]`;
const Composite = `[]`;

function search() {
    document.getElementById("outputTable").innerHTML = null;
    const cat = localStorage.getItem("category");
    var list = [];
    switch (cat) {
        case "HCS":
            list = JSON.parse(HCS);
            break;
        case "MCS":
            list = JSON.parse(MCS);
            break;
        case "LCS":
            list = JSON.parse(LCS);
            break;
        case "Non_Ferous":
            list = JSON.parse(Non_Ferous);
            break;
        case "Cast_Iron":
            list = JSON.parse(Cast_Iron);
            break;
        case "Stainless_Steel":
            list = JSON.parse(Stainless_Steel);
            break;
        case "Alloy_Steel":
            list = JSON.parse(Alloy_Steel);
            break;
        case "Oxide_Ceramic":
            list = JSON.parse(Oxide_Ceramic);
            break;
        case "Silicate_Ceramic":
            list = JSON.parse(Silicate_Ceramic);
            break;
        case "Carbide_Ceramic":
            list = JSON.parse(Carbide_Ceramic);
            break;
        case "Nitride_Ceramic":
            list = JSON.parse(Nitride_Ceramic);
            break;
        case "Alloys":
            list = JSON.parse(Alloys);
            break;
        case "Wrought_Iron":
            list = JSON.parse(Wrought_Iron);
            break;
        case "Glass_Ceramic":
            list = JSON.parse(Glass_Ceramic);
            break;
        case "Polymer":
            list = JSON.parse(Polymer);
            break;
        case "Smart_Material":
            list = JSON.parse(Smart_Material);
            break;
        case "Composite":
            list = JSON.parse(Composite);
            break;
    }
    var mod = parseFloat(document.getElementById("modulus").value);
    var den = parseFloat(document.getElementById("density").value);
    var rate = parseFloat(document.getElementById("ratio").value);
    var crbn = parseFloat(document.getElementById("carbon").value);
    if (((mod <= 215 && mod >= 185) || isNaN(mod)) && ((den >= 6 && den <= 10) || isNaN(den)) && ((rate <= 1 && rate >= -1) || isNaN(rate)) && ((crbn <= 2 && crbn >= -1) || isNaN(crbn))) {
        list.map((item) => {
            if (
                (item.Density >= den - 1 && item.Density <= den + 1) ||
                (item["Young_Modulus"] >= mod - 5 && item["Young_Modulus"] <= mod + 5) ||
                (item["Percentage_Carbon"] >= crbn - 0.01 && item["Percentage_Carbon"] <= crbn + 0.01) ||
                (item["Poisson_Ratio"] >= rate - 0.05 && item["Poisson_Ratio"] <= rate + 0.05)
            ) {
                var material = document.createElement("tr");
                var name = document.createElement("td");
                var modulus = document.createElement("td");
                var ratio = document.createElement("td");
                var density = document.createElement("td");
                var carbon = document.createElement("td");
                name.innerText = item["Material_Name"];
                material.appendChild(name);
                modulus.innerText = item["Young_Modulus"];
                material.appendChild(modulus);
                ratio.innerText = item["Poisson_Ratio"];
                material.appendChild(ratio);
                density.innerText = item.Density;
                material.appendChild(density);
                carbon.innerText = item["Percentage_Carbon"];
                material.appendChild(carbon);
                document.getElementById("outputTable").appendChild(material);
            }
        });
    }

    if (document.getElementById("outputTable").innerText == "") {
        window.alert("No Matching materials found!!!");
    }
}

function reset() {
    location.reload();
}

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        document.form1.text1.focus();
        return true;
    } else {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}

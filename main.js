// main.js - Kompletny konfigurator rowerów MTB z systemem kompatybilności

document.addEventListener('DOMContentLoaded', function() {
    // ========== ROZSZERZONE DANE KOMPONENTÓW ==========
    const componentsData = {
        frame: [
            { id: 1, name: "Trek Remedy 8", brand: "Trek", price: 12500, specs: "Aluminium, 29\", 150mm travel", material: "Aluminium", wheelSize: "29\"", travel: "150mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Horst Link", headAngle: "64.5°", seatAngle: "77°", bbDrop: "13mm", reach: "450mm", axleToCrown: "570mm", effectiveTopTube: "610mm" } },
            { id: 2, name: "Specialized Enduro Expert", brand: "Specialized", price: 18900, specs: "Carbon, 29\", 170mm travel", material: "Carbon", wheelSize: "29\"", travel: "170mm", wheelStandard: "SuperBoost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "BB92", dropoutSpacing: "157x12", technical: { suspension: "FSR with DW-Link", headAngle: "64°", seatAngle: "77.8°", bbDrop: "10mm", reach: "460mm", axleToCrown: "580mm", effectiveTopTube: "620mm" } },
            { id: 3, name: "Santa Cruz Bronson", brand: "Santa Cruz", price: 20900, specs: "Carbon, 27.5\", 150mm travel", material: "Carbon", wheelSize: "27.5\"", travel: "150mm", wheelStandard: "Boost", brakeMount: "IS Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "VPP", headAngle: "65°", seatAngle: "76.5°", bbDrop: "20mm", reach: "430mm", axleToCrown: "560mm", effectiveTopTube: "600mm" } },
            { id: 4, name: "Yeti SB150", brand: "Yeti", price: 24900, specs: "Carbon, 29\", 150mm travel", material: "Carbon", wheelSize: "29\"", travel: "150mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "Threaded", dropoutSpacing: "148x12", technical: { suspension: "Switch Infinity", headAngle: "64.3°", seatAngle: "77.5°", bbDrop: "15mm", reach: "455mm", axleToCrown: "570mm", effectiveTopTube: "615mm" } },
            { id: 5, name: "Canyon Spectral", brand: "Canyon", price: 10900, specs: "Aluminium, 29\", 150mm travel", material: "Aluminium", wheelSize: "29\"", travel: "150mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.5\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "Trail Motion", headAngle: "65°", seatAngle: "76.5°", bbDrop: "20mm", reach: "445mm", axleToCrown: "560mm", effectiveTopTube: "605mm" } },
            { id: 6, name: "Giant Reign", brand: "Giant", price: 10400, specs: "Aluminium, 29\", 160mm travel", material: "Aluminium", wheelSize: "29\"", travel: "160mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "Maestro", headAngle: "64.5°", seatAngle: "76.8°", bbDrop: "18mm", reach: "450mm", axleToCrown: "570mm", effectiveTopTube: "610mm" } },
            { id: 7, name: "Kona Process 153", brand: "Kona", price: 9900, specs: "Aluminium, 29\", 153mm travel", material: "Aluminium", wheelSize: "29\"", travel: "153mm", wheelStandard: "Boost", brakeMount: "IS Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "Three Point Link", headAngle: "65°", seatAngle: "76.7°", bbDrop: "22mm", reach: "440mm", axleToCrown: "565mm", effectiveTopTube: "600mm" } },
            { id: 8, name: "Scott Ransom", brand: "Scott", price: 17900, specs: "Carbon, 29\", 160mm travel", material: "Carbon", wheelSize: "29\"", travel: "160mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "TwinLoc", headAngle: "64.2°", seatAngle: "77°", bbDrop: "15mm", reach: "455mm", axleToCrown: "570mm", effectiveTopTube: "615mm" } },
            { id: 9, name: "Cannondale Jekyll", brand: "Cannondale", price: 19900, specs: "Carbon, 29\", 170mm travel", material: "Carbon", wheelSize: "29\"", travel: "170mm", wheelStandard: "SuperBoost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "BB30", dropoutSpacing: "157x12", technical: { suspension: "Proportional Response", headAngle: "63.8°", seatAngle: "77.3°", bbDrop: "12mm", reach: "460mm", axleToCrown: "580mm", effectiveTopTube: "620mm" } },
            { id: 10, name: "Pivot Firebird", brand: "Pivot", price: 25900, specs: "Carbon, 29\", 170mm travel", material: "Carbon", wheelSize: "29\"", travel: "170mm", wheelStandard: "SuperBoost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "PressFit", dropoutSpacing: "157x12", technical: { suspension: "DW-Link", headAngle: "64°", seatAngle: "77.5°", bbDrop: "14mm", reach: "465mm", axleToCrown: "580mm", effectiveTopTube: "625mm" } },
            { id: 11, name: "Norco Range", brand: "Norco", price: 11200, specs: "Aluminium, 29\", 170mm travel", material: "Aluminium", wheelSize: "29\"", travel: "170mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Four-Bar", headAngle: "64.7°", seatAngle: "76.5°", bbDrop: "18mm", reach: "445mm", axleToCrown: "570mm", effectiveTopTube: "605mm" } },
            { id: 12, name: "Transition Sentinel", brand: "Transition", price: 12900, specs: "Aluminium, 29\", 140mm travel", material: "Aluminium", wheelSize: "29\"", travel: "140mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "ABP", headAngle: "65.5°", seatAngle: "76°", bbDrop: "25mm", reach: "435mm", axleToCrown: "555mm", effectiveTopTube: "595mm" } },
            { id: 13, name: "Nukeproof Mega", brand: "Nukeproof", price: 10800, specs: "Aluminium, 29\", 170mm travel", material: "Aluminium", wheelSize: "29\"", travel: "170mm", wheelStandard: "Boost", brakeMount: "IS Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Horst Link", headAngle: "64.5°", seatAngle: "76.8°", bbDrop: "20mm", reach: "450mm", axleToCrown: "570mm", effectiveTopTube: "610mm" } },
            { id: 14, name: "YT Capra", brand: "YT Industries", price: 11800, specs: "Aluminium, 29\", 170mm travel", material: "Aluminium", wheelSize: "29\"", travel: "170mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "Four-Bar", headAngle: "64.3°", seatAngle: "76.7°", bbDrop: "18mm", reach: "455mm", axleToCrown: "570mm", effectiveTopTube: "615mm" } },
            { id: 15, name: "Propain Tyee", brand: "Propain", price: 12500, specs: "Aluminium, 29\", 160mm travel", material: "Aluminium", wheelSize: "29\"", travel: "160mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "Propain Floating Link", headAngle: "64.6°", seatAngle: "76.9°", bbDrop: "19mm", reach: "452mm", axleToCrown: "570mm", effectiveTopTube: "610mm" } },
            { id: 16, name: "Banshee Titan", brand: "Banshee", price: 9300, specs: "Aluminium, 29\", 150mm travel", material: "Aluminium", wheelSize: "29\"", travel: "150mm", wheelStandard: "Boost", brakeMount: "IS Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Switch Link", headAngle: "65°", seatAngle: "76.5°", bbDrop: "22mm", reach: "440mm", axleToCrown: "560mm", effectiveTopTube: "600mm" } },
            { id: 17, name: "Knolly Chilcotin", brand: "Knolly", price: 17900, specs: "Carbon, 27.5\", 167mm travel", material: "Carbon", wheelSize: "27.5\"", travel: "167mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "Delta System", headAngle: "65°", seatAngle: "76.8°", bbDrop: "15mm", reach: "435mm", axleToCrown: "565mm", effectiveTopTube: "600mm" } },
            { id: 18, name: "Devinci Spartan", brand: "Devinci", price: 12000, specs: "Aluminium, 29\", 170mm travel", material: "Aluminium", wheelSize: "29\"", travel: "170mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "Split Pivot", headAngle: "64.7°", seatAngle: "76.5°", bbDrop: "20mm", reach: "450mm", axleToCrown: "570mm", effectiveTopTube: "610mm" } },
            { id: 19, name: "Commencal Meta AM", brand: "Commencal", price: 10900, specs: "Aluminium, 29\", 160mm travel", material: "Aluminium", wheelSize: "29\"", travel: "160mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Single Pivot with Linkage", headAngle: "65°", seatAngle: "76.6°", bbDrop: "22mm", reach: "445mm", axleToCrown: "565mm", effectiveTopTube: "605mm" } },
            { id: 20, name: "Orbea Rallon", brand: "Orbea", price: 13800, specs: "Carbon, 29\", 160mm travel", material: "Carbon", wheelSize: "29\"", travel: "160mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "System O", headAngle: "64.1°", seatAngle: "77.2°", bbDrop: "13mm", reach: "460mm", axleToCrown: "575mm", effectiveTopTube: "620mm" } },
            { id: 21, name: "Cube Stereo", brand: "Cube", price: 8900, specs: "Aluminium, 29\", 150mm travel", material: "Aluminium", wheelSize: "29\"", travel: "150mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Four-Bar", headAngle: "65°", seatAngle: "76°", bbDrop: "22mm", reach: "440mm", axleToCrown: "560mm", effectiveTopTube: "600mm" } },
            { id: 22, name: "Rose Ground Control", brand: "Rose", price: 11900, specs: "Aluminium, 29\", 140mm travel", material: "Aluminium", wheelSize: "29\"", travel: "140mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Horst Link", headAngle: "65.5°", seatAngle: "76.5°", bbDrop: "25mm", reach: "435mm", axleToCrown: "555mm", effectiveTopTube: "595mm" } },
            { id: 23, name: "Radon Swoop", brand: "Radon", price: 10400, specs: "Aluminium, 29\", 170mm travel", material: "Aluminium", wheelSize: "29\"", travel: "170mm", wheelStandard: "Boost", brakeMount: "IS Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Horst Link", headAngle: "64.3°", seatAngle: "76.8°", bbDrop: "18mm", reach: "450mm", axleToCrown: "570mm", effectiveTopTube: "610mm" } },
            { id: 24, name: "Ghost Slamr", brand: "Ghost", price: 9200, specs: "Aluminium, 29\", 150mm travel", material: "Aluminium", wheelSize: "29\"", travel: "150mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Traction Link", headAngle: "65°", seatAngle: "76°", bbDrop: "22mm", reach: "440mm", axleToCrown: "560mm", effectiveTopTube: "600mm" } },
            { id: 25, name: "Fezzari La Sal", brand: "Fezzari", price: 12900, specs: "Carbon, 29\", 160mm travel", material: "Carbon", wheelSize: "29\"", travel: "160mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "TetraLink", headAngle: "64.5°", seatAngle: "77°", bbDrop: "15mm", reach: "455mm", axleToCrown: "570mm", effectiveTopTube: "615mm" } },
            { id: 26, name: "BMC Twostroke", brand: "BMC", price: 16900, specs: "Carbon, 29\", 130mm travel", material: "Carbon", wheelSize: "29\"", travel: "130mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.4\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "APS", headAngle: "66.5°", seatAngle: "75°", bbDrop: "35mm", reach: "430mm", axleToCrown: "540mm", effectiveTopTube: "590mm" } },
            { id: 27, name: "Lapierre Spicy", brand: "Lapierre", price: 13900, specs: "Carbon, 29\", 170mm travel", material: "Carbon", wheelSize: "29\"", travel: "170mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "OST+", headAngle: "64.2°", seatAngle: "77°", bbDrop: "15mm", reach: "460mm", axleToCrown: "575mm", effectiveTopTube: "620mm" } },
            { id: 28, name: "BH Lynx", brand: "BH Bikes", price: 12100, specs: "Carbon, 29\", 150mm travel", material: "Carbon", wheelSize: "29\"", travel: "150mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "Split Pivot", headAngle: "65°", seatAngle: "76.5°", bbDrop: "20mm", reach: "445mm", axleToCrown: "560mm", effectiveTopTube: "605mm" } },
            { id: 29, name: "Fantic XF1", brand: "Fantic", price: 9900, specs: "Aluminium, 29\", 140mm travel", material: "Aluminium", wheelSize: "29\"", travel: "140mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Single Pivot", headAngle: "66°", seatAngle: "75.5°", bbDrop: "28mm", reach: "430mm", axleToCrown: "550mm", effectiveTopTube: "590mm" } },
            { id: 30, name: "NS Bikes Snabb", brand: "NS Bikes", price: 8400, specs: "Aluminium, 27.5\", 140mm travel", material: "Aluminium", wheelSize: "27.5\"", travel: "140mm", wheelStandard: "Boost", brakeMount: "IS Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Horst Link", headAngle: "65.5°", seatAngle: "76°", bbDrop: "20mm", reach: "425mm", axleToCrown: "550mm", effectiveTopTube: "585mm" } },
            { id: 31, name: "Ridley Creed", brand: "Ridley", price: 12900, specs: "Carbon, 29\", 120mm travel", material: "Carbon", wheelSize: "29\"", travel: "120mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.4\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "Four-Bar", headAngle: "67°", seatAngle: "75°", bbDrop: "35mm", reach: "420mm", axleToCrown: "530mm", effectiveTopTube: "580mm" } },
            { id: 32, name: "Bergamont Revox", brand: "Bergamont", price: 9500, specs: "Aluminium, 29\", 140mm travel", material: "Aluminium", wheelSize: "29\"", travel: "140mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Single Pivot", headAngle: "66°", seatAngle: "75.5°", bbDrop: "30mm", reach: "430mm", axleToCrown: "550mm", effectiveTopTube: "590mm" } },
            { id: 33, name: "Bulls Sonic", brand: "Bulls", price: 10200, specs: "Aluminium, 29\", 150mm travel", material: "Aluminium", wheelSize: "29\"", travel: "150mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Horst Link", headAngle: "65°", seatAngle: "76°", bbDrop: "22mm", reach: "440mm", axleToCrown: "560mm", effectiveTopTube: "600mm" } },
            { id: 34, name: "Corratec X Vert", brand: "Corratec", price: 8800, specs: "Aluminium, 29\", 130mm travel", material: "Aluminium", wheelSize: "29\"", travel: "130mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.4\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Single Pivot", headAngle: "66.5°", seatAngle: "75°", bbDrop: "32mm", reach: "425mm", axleToCrown: "540mm", effectiveTopTube: "585mm" } },
            { id: 35, name: "Dartmoor Primal", brand: "Dartmoor", price: 7900, specs: "Aluminium, 27.5\", 160mm travel", material: "Aluminium", wheelSize: "27.5\"", travel: "160mm", wheelStandard: "Boost", brakeMount: "IS Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Hardtail", headAngle: "64°", seatAngle: "76°", bbDrop: "10mm", reach: "440mm", axleToCrown: "565mm", effectiveTopTube: "600mm" } },
            { id: 36, name: "Evil Following", brand: "Evil", price: 21900, specs: "Carbon, 29\", 130mm travel", material: "Carbon", wheelSize: "29\"", travel: "130mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "DELTA", headAngle: "66°", seatAngle: "75.8°", bbDrop: "30mm", reach: "445mm", axleToCrown: "545mm", effectiveTopTube: "605mm" } },
            { id: 37, name: "Framed Minnesota", brand: "Framed", price: 7600, specs: "Aluminium, 29\", 120mm travel", material: "Aluminium", wheelSize: "29\"", travel: "120mm", wheelStandard: "Standard", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.4\"", bottomBracket: "BSA", dropoutSpacing: "142x12", technical: { suspension: "Single Pivot", headAngle: "67°", seatAngle: "75°", bbDrop: "35mm", reach: "420mm", axleToCrown: "530mm", effectiveTopTube: "580mm" } },
            { id: 38, name: "GT Force", brand: "GT", price: 10900, specs: "Aluminium, 29\", 150mm travel", material: "Aluminium", wheelSize: "29\"", travel: "150mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "LTS", headAngle: "65°", seatAngle: "76°", bbDrop: "22mm", reach: "445mm", axleToCrown: "560mm", effectiveTopTube: "605mm" } },
            { id: 39, name: "Haro Shift", brand: "Haro", price: 9200, specs: "Aluminium, 29\", 140mm travel", material: "Aluminium", wheelSize: "29\"", travel: "140mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Horst Link", headAngle: "65.5°", seatAngle: "76°", bbDrop: "25mm", reach: "435mm", axleToCrown: "555mm", effectiveTopTube: "595mm" } },
            { id: 40, name: "Ibis Ripmo", brand: "Ibis", price: 22900, specs: "Carbon, 29\", 147mm travel", material: "Carbon", wheelSize: "29\"", travel: "147mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "Threaded", dropoutSpacing: "148x12", technical: { suspension: "DW-Link", headAngle: "64.9°", seatAngle: "77°", bbDrop: "17mm", reach: "460mm", axleToCrown: "570mm", effectiveTopTube: "620mm" } },
            { id: 41, name: "Jamis Portal", brand: "Jamis", price: 9900, specs: "Aluminium, 29\", 140mm travel", material: "Aluminium", wheelSize: "29\"", travel: "140mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Horst Link", headAngle: "65.5°", seatAngle: "76°", bbDrop: "25mm", reach: "435mm", axleToCrown: "555mm", effectiveTopTube: "595mm" } },
            { id: 42, name: "KHS SixFifty", brand: "KHS", price: 8400, specs: "Aluminium, 27.5\", 150mm travel", material: "Aluminium", wheelSize: "27.5\"", travel: "150mm", wheelStandard: "Boost", brakeMount: "IS Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Four-Bar", headAngle: "65°", seatAngle: "76°", bbDrop: "22mm", reach: "430mm", axleToCrown: "560mm", effectiveTopTube: "590mm" } },
            { id: 43, name: "Litespeed Pinhoti", brand: "Litespeed", price: 24900, specs: "Titanium, 29\", 120mm travel", material: "Titanium", wheelSize: "29\"", travel: "120mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.4\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Hardtail", headAngle: "67°", seatAngle: "75°", bbDrop: "30mm", reach: "430mm", axleToCrown: "530mm", effectiveTopTube: "590mm" } },
            { id: 44, name: "Marin Alpine", brand: "Marin", price: 10900, specs: "Carbon, 29\", 150mm travel", material: "Carbon", wheelSize: "29\"", travel: "150mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "MultiTrac", headAngle: "65°", seatAngle: "76.5°", bbDrop: "20mm", reach: "445mm", axleToCrown: "560mm", effectiveTopTube: "605mm" } },
            { id: 45, name: "Niner RIP", brand: "Niner", price: 16900, specs: "Carbon, 29\", 150mm travel", material: "Carbon", wheelSize: "29\"", travel: "150mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "PressFit", dropoutSpacing: "148x12", technical: { suspension: "CVA", headAngle: "65°", seatAngle: "76.8°", bbDrop: "18mm", reach: "455mm", axleToCrown: "560mm", effectiveTopTube: "615mm" } },
            { id: 46, name: "On-One Hello Dave", brand: "On-One", price: 7200, specs: "Steel, 29\", 130mm travel", material: "Steel", wheelSize: "29\"", travel: "130mm", wheelStandard: "Standard", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "3.0\"", bottomBracket: "BSA", dropoutSpacing: "142x12", technical: { suspension: "Hardtail", headAngle: "62°", seatAngle: "75°", bbDrop: "20mm", reach: "460mm", axleToCrown: "540mm", effectiveTopTube: "620mm" } },
            { id: 47, name: "Pole Stamina", brand: "Pole", price: 25900, specs: "Aluminium, 29\", 180mm travel", material: "Aluminium", wheelSize: "29\"", travel: "180mm", wheelStandard: "SuperBoost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "PressFit", dropoutSpacing: "157x12", technical: { suspension: "Single Pivot", headAngle: "63°", seatAngle: "78°", bbDrop: "10mm", reach: "480mm", axleToCrown: "585mm", effectiveTopTube: "640mm" } },
            { id: 48, name: "QBP Salsa", brand: "Salsa", price: 11900, specs: "Aluminium, 29\", 140mm travel", material: "Aluminium", wheelSize: "29\"", travel: "140mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Split Pivot", headAngle: "65.5°", seatAngle: "76°", bbDrop: "25mm", reach: "435mm", axleToCrown: "555mm", effectiveTopTube: "595mm" } },
            { id: 49, name: "Ragley Marley", brand: "Ragley", price: 7800, specs: "Steel, 27.5\", 140mm travel", material: "Steel", wheelSize: "27.5\"", travel: "140mm", wheelStandard: "Boost", brakeMount: "IS Mount", headtube: "Tapered", maxTireSize: "2.8\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Hardtail", headAngle: "64°", seatAngle: "75°", bbDrop: "15mm", reach: "440mm", axleToCrown: "550mm", effectiveTopTube: "600mm" } },
            { id: 50, name: "Sonder Signal", brand: "Sonder", price: 8600, specs: "Aluminium, 29\", 140mm travel", material: "Aluminium", wheelSize: "29\"", travel: "140mm", wheelStandard: "Boost", brakeMount: "Post Mount", headtube: "Tapered", maxTireSize: "2.6\"", bottomBracket: "BSA", dropoutSpacing: "148x12", technical: { suspension: "Single Pivot", headAngle: "66°", seatAngle: "75.5°", bbDrop: "28mm", reach: "430mm", axleToCrown: "550mm", effectiveTopTube: "590mm" } }
        ],
        fork: [
            { id: 1, name: "Fox 36 Factory", brand: "Fox", price: 7800, specs: "29\", 160mm, Kashima", wheelSize: "29\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "180mm", crownRace: "ZS44/56", technical: { damping: "FIT4", adjusters: "Rebound & Compression", weight: "2230g", stanchionDiameter: "36mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 2, name: "RockShox Lyrik Ultimate", brand: "RockShox", price: 7200, specs: "29\", 170mm, Charger 2.1", wheelSize: "29\"", travel: "170mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "180mm", crownRace: "ZS44/56", technical: { damping: "Charger 2.1 RC2", adjusters: "Rebound & Compression", weight: "2270g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "39mm" } },
            { id: 3, name: "Öhlins RXF36 m.2", brand: "Öhlins", price: 8900, specs: "29\", 160mm, TTX", wheelSize: "29\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "TTX", adjusters: "Rebound & Compression", weight: "2250g", stanchionDiameter: "36mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 4, name: "Manitou Mattoc Pro", brand: "Manitou", price: 4700, specs: "29\", 160mm, IRT", wheelSize: "29\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "IRT", adjusters: "Rebound & Compression", weight: "2320g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "39mm" } },
            { id: 5, name: "Fox 38 Factory", brand: "Fox", price: 8700, specs: "29\", 170mm, Kashima", wheelSize: "29\"", travel: "170mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "190mm", crownRace: "ZS49/56", technical: { damping: "FIT4", adjusters: "Rebound & Compression", weight: "2400g", stanchionDiameter: "38mm", axleType: "15x110 Boost", crownHeight: "40mm" } },
            { id: 6, name: "RockShox Zeb Ultimate", brand: "RockShox", price: 8200, specs: "29\", 180mm, Charger 2.1", wheelSize: "29\"", travel: "180mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "190mm", crownRace: "ZS49/56", technical: { damping: "Charger 2.1 RC2", adjusters: "Rebound & Compression", weight: "2350g", stanchionDiameter: "38mm", axleType: "15x110 Boost", crownHeight: "40mm" } },
            { id: 7, name: "Marzocchi Z1 Coil", brand: "Marzocchi", price: 4200, specs: "29\", 160mm, Coil", wheelSize: "29\"", travel: "160mm", type: "Coil", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "Coil", adjusters: "Rebound & Compression", weight: "2800g", stanchionDiameter: "36mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 8, name: "DT Swiss F232 ONE", brand: "DT Swiss", price: 6700, specs: "29\", 150mm, HVC", wheelSize: "29\"", travel: "150mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "160mm", crownRace: "ZS44/56", technical: { damping: "HVC", adjusters: "Rebound & Compression", weight: "2200g", stanchionDiameter: "32mm", axleType: "15x110 Boost", crownHeight: "37mm" } },
            { id: 9, name: "Cane Creek Helm MKII", brand: "Cane Creek", price: 6300, specs: "29\", 160mm, VVC", wheelSize: "29\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "VVC", adjusters: "Rebound & Compression", weight: "2280g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "39mm" } },
            { id: 10, name: "EXT ERA", brand: "EXT", price: 10400, specs: "29\", 160mm, VVC", wheelSize: "29\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "VVC", adjusters: "Rebound & Compression", weight: "2200g", stanchionDiameter: "36mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 11, name: "Fox 34 Performance", brand: "Fox", price: 4300, specs: "29\", 140mm, GRIP", wheelSize: "29\"", travel: "140mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "150mm", crownRace: "ZS44/56", technical: { damping: "GRIP", adjusters: "Rebound & Compression", weight: "2150g", stanchionDiameter: "34mm", axleType: "15x110 Boost", crownHeight: "37mm" } },
            { id: 12, name: "RockShox Pike Select", brand: "RockShox", price: 5200, specs: "29\", 140mm, Charger 2.1", wheelSize: "29\"", travel: "140mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "150mm", crownRace: "ZS44/56", technical: { damping: "Charger 2.1", adjusters: "Rebound & Compression", weight: "2200g", stanchionDiameter: "34mm", axleType: "15x110 Boost", crownHeight: "37mm" } },
            { id: 13, name: "Öhlins RXF34 m.2", brand: "Öhlins", price: 7800, specs: "29\", 140mm, TTX", wheelSize: "29\"", travel: "140mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "150mm", crownRace: "ZS44/56", technical: { damping: "TTX", adjusters: "Rebound & Compression", weight: "2180g", stanchionDiameter: "34mm", axleType: "15x110 Boost", crownHeight: "37mm" } },
            { id: 14, name: "Manitou Mezzer Pro", brand: "Manitou", price: 6700, specs: "29\", 170mm, IRT", wheelSize: "29\"", travel: "170mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "180mm", crownRace: "ZS44/56", technical: { damping: "IRT", adjusters: "Rebound & Compression", weight: "2350g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "39mm" } },
            { id: 15, name: "Fox 32 SC", brand: "Fox", price: 4100, specs: "29\", 120mm, FIT4", wheelSize: "29\"", travel: "120mm", type: "Air", axleType: "15x100", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "130mm", crownRace: "ZS44/56", technical: { damping: "FIT4", adjusters: "Rebound & Compression", weight: "2100g", stanchionDiameter: "32mm", axleType: "15x100", crownHeight: "36mm" } },
            { id: 16, name: "SR Suntour Durolux", brand: "SR Suntour", price: 3800, specs: "29\", 160mm, QLC", wheelSize: "29\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "QLC", adjusters: "Rebound & Compression", weight: "2320g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 17, name: "RST Pluton", brand: "RST", price: 3100, specs: "29\", 140mm, Hydraulic", wheelSize: "29\"", travel: "140mm", type: "Air", axleType: "15x110 Boost", steererTube: "Straight", brakeMount: "Post Mount", maxTravel: "150mm", crownRace: "EC44", technical: { damping: "Hydraulic", adjusters: "Rebound", weight: "2150g", stanchionDiameter: "32mm", axleType: "15x110 Boost", crownHeight: "37mm" } },
            { id: 18, name: "X-Fusion H1", brand: "X-Fusion", price: 4300, specs: "29\", 160mm, Sweep", wheelSize: "29\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "Sweep", adjusters: "Rebound & Compression", weight: "2280g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 19, name: "Formula Selva", brand: "Formula", price: 4600, specs: "29\", 160mm, C2", wheelSize: "29\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "C2", adjusters: "Rebound & Compression", weight: "2300g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 20, name: "DVO Diamond", brand: "DVO", price: 6700, specs: "29\", 160mm, OTT", wheelSize: "29\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "OTT", adjusters: "Rebound & Compression", weight: "2280g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 21, name: "Fox 36 Performance", brand: "Fox", price: 5800, specs: "29\", 160mm, GRIP", wheelSize: "29\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "GRIP", adjusters: "Rebound & Compression", weight: "2260g", stanchionDiameter: "36mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 22, name: "RockShox Lyrik Select", brand: "RockShox", price: 6200, specs: "29\", 170mm, Charger 2.1", wheelSize: "29\"", travel: "170mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "180mm", crownRace: "ZS44/56", technical: { damping: "Charger 2.1", adjusters: "Rebound & Compression", weight: "2290g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "39mm" } },
            { id: 23, name: "Marzocchi Bomber Z2", brand: "Marzocchi", price: 3100, specs: "29\", 140mm, GRIP", wheelSize: "29\"", travel: "140mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "150mm", crownRace: "ZS44/56", technical: { damping: "GRIP", adjusters: "Rebound & Compression", weight: "2200g", stanchionDiameter: "34mm", axleType: "15x110 Boost", crownHeight: "37mm" } },
            { id: 24, name: "DT Swiss F535 ONE", brand: "DT Swiss", price: 6700, specs: "29\", 150mm, HVC", wheelSize: "29\"", travel: "150mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "160mm", crownRace: "ZS44/56", technical: { damping: "HVC", adjusters: "Rebound & Compression", weight: "2200g", stanchionDiameter: "32mm", axleType: "15x110 Boost", crownHeight: "37mm" } },
            { id: 25, name: "Cane Creek Helm Air", brand: "Cane Creek", price: 4900, specs: "29\", 150mm, VVC", wheelSize: "29\"", travel: "150mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "160mm", crownRace: "ZS44/56", technical: { damping: "VVC", adjusters: "Rebound & Compression", weight: "2230g", stanchionDiameter: "34mm", axleType: "15x110 Boost", crownHeight: "37mm" } },
            { id: 26, name: "Fox 40 Factory", brand: "Fox", price: 9800, specs: "29\", 200mm, Kashima", wheelSize: "29\"", travel: "200mm", type: "Air", axleType: "20x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "210mm", crownRace: "ZS49/56", technical: { damping: "FIT4", adjusters: "Rebound & Compression", weight: "2600g", stanchionDiameter: "40mm", axleType: "20x110 Boost", crownHeight: "42mm" } },
            { id: 27, name: "RockShox Boxxer Ultimate", brand: "RockShox", price: 9200, specs: "29\", 200mm, Charger 2.1", wheelSize: "29\"", travel: "200mm", type: "Air", axleType: "20x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "210mm", crownRace: "ZS49/56", technical: { damping: "Charger 2.1 RC2", adjusters: "Rebound & Compression", weight: "2550g", stanchionDiameter: "38mm", axleType: "20x110 Boost", crownHeight: "42mm" } },
            { id: 28, name: "Öhlins DH38", brand: "Öhlins", price: 10400, specs: "29\", 200mm, TTX", wheelSize: "29\"", travel: "200mm", type: "Air", axleType: "20x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "210mm", crownRace: "ZS49/56", technical: { damping: "TTX", adjusters: "Rebound & Compression", weight: "2600g", stanchionDiameter: "38mm", axleType: "20x110 Boost", crownHeight: "42mm" } },
            { id: 29, name: "Marzocchi 888", brand: "Marzocchi", price: 7200, specs: "29\", 200mm, Coil", wheelSize: "29\"", travel: "200mm", type: "Coil", axleType: "20x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "210mm", crownRace: "ZS49/56", technical: { damping: "Coil", adjusters: "Rebound & Compression", weight: "2850g", stanchionDiameter: "38mm", axleType: "20x110 Boost", crownHeight: "42mm" } },
            { id: 30, name: "Fox 36 Float", brand: "Fox", price: 6500, specs: "27.5\", 160mm, FIT4", wheelSize: "27.5\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "FIT4", adjusters: "Rebound & Compression", weight: "2240g", stanchionDiameter: "36mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 31, name: "RockShox Lyrik 27.5", brand: "RockShox", price: 7000, specs: "27.5\", 170mm, Charger 2.1", wheelSize: "27.5\"", travel: "170mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "180mm", crownRace: "ZS44/56", technical: { damping: "Charger 2.1 RC2", adjusters: "Rebound & Compression", weight: "2260g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "39mm" } },
            { id: 32, name: "Öhlins RXF36 27.5", brand: "Öhlins", price: 8600, specs: "27.5\", 160mm, TTX", wheelSize: "27.5\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "TTX", adjusters: "Rebound & Compression", weight: "2240g", stanchionDiameter: "36mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 33, name: "Manitou Mattoc 27.5", brand: "Manitou", price: 4500, specs: "27.5\", 160mm, IRT", wheelSize: "27.5\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "IRT", adjusters: "Rebound & Compression", weight: "2300g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "39mm" } },
            { id: 34, name: "Fox 38 27.5", brand: "Fox", price: 8500, specs: "27.5\", 170mm, Kashima", wheelSize: "27.5\"", travel: "170mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "180mm", crownRace: "ZS49/56", technical: { damping: "FIT4", adjusters: "Rebound & Compression", weight: "2380g", stanchionDiameter: "38mm", axleType: "15x110 Boost", crownHeight: "40mm" } },
            { id: 35, name: "RockShox Zeb 27.5", brand: "RockShox", price: 8000, specs: "27.5\", 180mm, Charger 2.1", wheelSize: "27.5\"", travel: "180mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "190mm", crownRace: "ZS49/56", technical: { damping: "Charger 2.1 RC2", adjusters: "Rebound & Compression", weight: "2330g", stanchionDiameter: "38mm", axleType: "15x110 Boost", crownHeight: "40mm" } },
            { id: 36, name: "Marzocchi Z1 Coil 27.5", brand: "Marzocchi", price: 4000, specs: "27.5\", 160mm, Coil", wheelSize: "27.5\"", travel: "160mm", type: "Coil", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "Coil", adjusters: "Rebound & Compression", weight: "2780g", stanchionDiameter: "36mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 37, name: "DT Swiss F232 ONE 27.5", brand: "DT Swiss", price: 6500, specs: "27.5\", 150mm, HVC", wheelSize: "27.5\"", travel: "150mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "160mm", crownRace: "ZS44/56", technical: { damping: "HVC", adjusters: "Rebound & Compression", weight: "2180g", stanchionDiameter: "32mm", axleType: "15x110 Boost", crownHeight: "37mm" } },
            { id: 38, name: "Cane Creek Helm MKII 27.5", brand: "Cane Creek", price: 6100, specs: "27.5\", 160mm, VVC", wheelSize: "27.5\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "VVC", adjusters: "Rebound & Compression", weight: "2260g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "39mm" } },
            { id: 39, name: "EXT ERA 27.5", brand: "EXT", price: 10200, specs: "27.5\", 160mm, VVC", wheelSize: "27.5\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "VVC", adjusters: "Rebound & Compression", weight: "2180g", stanchionDiameter: "36mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 40, name: "Fox 34 Performance 27.5", brand: "Fox", price: 4200, specs: "27.5\", 140mm, GRIP", wheelSize: "27.5\"", travel: "140mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "150mm", crownRace: "ZS44/56", technical: { damping: "GRIP", adjusters: "Rebound & Compression", weight: "2130g", stanchionDiameter: "34mm", axleType: "15x110 Boost", crownHeight: "37mm" } },
            { id: 41, name: "RockShox Pike Select 27.5", brand: "RockShox", price: 5100, specs: "27.5\", 140mm, Charger 2.1", wheelSize: "27.5\"", travel: "140mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "150mm", crownRace: "ZS44/56", technical: { damping: "Charger 2.1", adjusters: "Rebound & Compression", weight: "2180g", stanchionDiameter: "34mm", axleType: "15x110 Boost", crownHeight: "37mm" } },
            { id: 42, name: "Öhlins RXF34 m.2 27.5", brand: "Öhlins", price: 7600, specs: "27.5\", 140mm, TTX", wheelSize: "27.5\"", travel: "140mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "150mm", crownRace: "ZS44/56", technical: { damping: "TTX", adjusters: "Rebound & Compression", weight: "2160g", stanchionDiameter: "34mm", axleType: "15x110 Boost", crownHeight: "37mm" } },
            { id: 43, name: "Manitou Mezzer Pro 27.5", brand: "Manitou", price: 6500, specs: "27.5\", 170mm, IRT", wheelSize: "27.5\"", travel: "170mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "180mm", crownRace: "ZS44/56", technical: { damping: "IRT", adjusters: "Rebound & Compression", weight: "2330g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "39mm" } },
            { id: 44, name: "Fox 32 SC 27.5", brand: "Fox", price: 4000, specs: "27.5\", 120mm, FIT4", wheelSize: "27.5\"", travel: "120mm", type: "Air", axleType: "15x100", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "130mm", crownRace: "ZS44/56", technical: { damping: "FIT4", adjusters: "Rebound & Compression", weight: "2080g", stanchionDiameter: "32mm", axleType: "15x100", crownHeight: "36mm" } },
            { id: 45, name: "SR Suntour Durolux 27.5", brand: "SR Suntour", price: 3700, specs: "27.5\", 160mm, QLC", wheelSize: "27.5\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "QLC", adjusters: "Rebound & Compression", weight: "2300g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 46, name: "RST Pluton 27.5", brand: "RST", price: 3000, specs: "27.5\", 140mm, Hydraulic", wheelSize: "27.5\"", travel: "140mm", type: "Air", axleType: "15x110 Boost", steererTube: "Straight", brakeMount: "Post Mount", maxTravel: "150mm", crownRace: "EC44", technical: { damping: "Hydraulic", adjusters: "Rebound", weight: "2130g", stanchionDiameter: "32mm", axleType: "15x110 Boost", crownHeight: "37mm" } },
            { id: 47, name: "X-Fusion H1 27.5", brand: "X-Fusion", price: 4200, specs: "27.5\", 160mm, Sweep", wheelSize: "27.5\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "Sweep", adjusters: "Rebound & Compression", weight: "2260g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 48, name: "Formula Selva 27.5", brand: "Formula", price: 4500, specs: "27.5\", 160mm, C2", wheelSize: "27.5\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "C2", adjusters: "Rebound & Compression", weight: "2280g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 49, name: "DVO Diamond 27.5", brand: "DVO", price: 6500, specs: "27.5\", 160mm, OTT", wheelSize: "27.5\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "OTT", adjusters: "Rebound & Compression", weight: "2260g", stanchionDiameter: "35mm", axleType: "15x110 Boost", crownHeight: "38mm" } },
            { id: 50, name: "Fox 36 Performance 27.5", brand: "Fox", price: 5700, specs: "27.5\", 160mm, GRIP", wheelSize: "27.5\"", travel: "160mm", type: "Air", axleType: "15x110 Boost", steererTube: "Tapered", brakeMount: "Post Mount", maxTravel: "170mm", crownRace: "ZS44/56", technical: { damping: "GRIP", adjusters: "Rebound & Compression", weight: "2240g", stanchionDiameter: "36mm", axleType: "15x110 Boost", crownHeight: "38mm" } }
        ],
        damper: [
            { id: 1, name: "Fox Float X2 Factory", brand: "Fox", price: 4900, specs: "205x65mm, Kashima, dwustopniowa komora powietrzna, regulacja kompresji i odbicia", stroke: "65mm", travel: "205mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Fox", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "Yes" },
            { id: 2, name: "RockShox Super Deluxe Ultimate", brand: "RockShox", price: 4100, specs: "205x65mm, Charger 2.1, powietrzny, regulacja odbicia i kompresji", stroke: "65mm", travel: "205mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "RockShox", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "Yes" },
            { id: 3, name: "Öhlins TTX22M", brand: "Öhlins", price: 5500, specs: "205x65mm, TTX, dwustopniowa regulacja kompresji, wysokiej klasy tłumik", stroke: "65mm", travel: "205mm", type: "Coil", eyeletSize: "20x8mm", mountingHardware: "Öhlins", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "No" },
            { id: 4, name: "Cane Creek DB IL Coil", brand: "Cane Creek", price: 4200, specs: "205x65mm, stalowy tłumik, precyzyjna regulacja odbicia i kompresji", stroke: "65mm", travel: "205mm", type: "Coil", eyeletSize: "20x8mm", mountingHardware: "Cane Creek", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "Yes" },
            { id: 5, name: "Fox Float X", brand: "Fox", price: 3800, specs: "210x55mm, powietrzny, regulacja odbicia, lekka konstrukcja", stroke: "55mm", travel: "210mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Fox", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 6, name: "RockShox Deluxe Select+", brand: "RockShox", price: 2500, specs: "210x55mm, powietrzny, regulacja odbicia, przystosowany do e-MTB", stroke: "55mm", travel: "210mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "RockShox", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 7, name: "DT Swiss 232 ONE", brand: "DT Swiss", price: 3600, specs: "205x65mm, HVC, powietrzny, precyzyjna regulacja odbicia", stroke: "65mm", travel: "205mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "DT Swiss", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "Yes" },
            { id: 8, name: "MRP Hazzard", brand: "MRP", price: 2800, specs: "205x65mm, powietrzny, prosta regulacja kompresji i odbicia", stroke: "65mm", travel: "205mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "MRP", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 9, name: "EXT Storia Lok", brand: "EXT", price: 6200, specs: "205x65mm, Coil, pełna regulacja kompresji i odbicia, lekkie aluminium", stroke: "65mm", travel: "205mm", type: "Coil", eyeletSize: "20x8mm", mountingHardware: "EXT", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "No" },
            { id: 10, name: "DVO Topaz", brand: "DVO", price: 2700, specs: "210x55mm, powietrzny, precyzyjna regulacja odbicia, lekkie materiały", stroke: "55mm", travel: "210mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "DVO", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 11, name: "Fox DHX2 Factory", brand: "Fox", price: 5000, specs: "250x75mm, Coil, dwustopniowa regulacja kompresji, wysokiej klasy tłumik", stroke: "75mm", travel: "250mm", type: "Coil", eyeletSize: "24x8mm", mountingHardware: "Fox", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "No" },
            { id: 12, name: "RockShox Vivid", brand: "RockShox", price: 4200, specs: "250x75mm, Coil, precyzyjna regulacja odbicia i kompresji", stroke: "75mm", travel: "250mm", type: "Coil", eyeletSize: "24x8mm", mountingHardware: "RockShox", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "No" },
            { id: 13, name: "Öhlins TTX", brand: "Öhlins", price: 6000, specs: "250x75mm, Coil, pełna regulacja kompresji i odbicia, profesjonalny tłumik wyścigowy", stroke: "75mm", travel: "250mm", type: "Coil", eyeletSize: "24x8mm", mountingHardware: "Öhlins", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "No" },
            { id: 14, name: "DT Swiss 235 ONE", brand: "DT Swiss", price: 4800, specs: "250x75mm, Coil, regulacja odbicia i kompresji, trwała konstrukcja", stroke: "75mm", travel: "250mm", type: "Coil", eyeletSize: "24x8mm", mountingHardware: "DT Swiss", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "No" },
            { id: 15, name: "EXT Arma", brand: "EXT", price: 7000, specs: "250x75mm, Coil, profesjonalna regulacja, lekkie materiały", stroke: "75mm", travel: "250mm", type: "Coil", eyeletSize: "24x8mm", mountingHardware: "EXT", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "No" },
            { id: 16, name: "DVO Jade", brand: "DVO", price: 4500, specs: "250x75mm, Coil, precyzyjna regulacja, lekki tłumik", stroke: "75mm", travel: "250mm", type: "Coil", eyeletSize: "24x8mm", mountingHardware: "DVO", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "No" },
            { id: 17, name: "Fox Float DPS", brand: "Fox", price: 2200, specs: "190x45mm, powietrzny, lekki, regulacja odbicia", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Fox", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 18, name: "RockShox Monarch", brand: "RockShox", price: 1500, specs: "190x45mm, powietrzny, regulacja odbicia, ekonomiczny model", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "RockShox", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "None", lockout: "Yes" },
            { id: 19, name: "DT Swiss 210", brand: "DT Swiss", price: 2000, specs: "190x45mm, powietrzny, precyzyjna regulacja odbicia", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "DT Swiss", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 20, name: "SR Suntour Raidon", brand: "SR Suntour", price: 1200, specs: "190x45mm, powietrzny, prosty tłumik, regulacja odbicia", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "SR Suntour", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "None", lockout: "Yes" },
            { id: 21, name: "X-Fusion RL", brand: "X-Fusion", price: 1800, specs: "190x45mm, powietrzny, precyzyjna regulacja odbicia", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "X-Fusion", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 22, name: "Formula Selva R", brand: "Formula", price: 2000, specs: "190x45mm, powietrzny, regulacja odbicia, lekkie materiały", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Formula", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 23, name: "Push 11-6", brand: "Push", price: 7000, specs: "190x45mm, powietrzny, profesjonalna regulacja, lekki tłumik", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Push", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "Yes" },
            { id: 24, name: "BOS Vivid Air", brand: "BOS", price: 4200, specs: "190x45mm, powietrzny, regulacja odbicia i kompresji, profesjonalny model", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "BOS", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "Yes" },
            { id: 25, name: "Marzocchi Bomber CR", brand: "Marzocchi", price: 1800, specs: "190x45mm, powietrzny, regulacja odbicia, solidna konstrukcja", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Marzocchi", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "None", lockout: "Yes" },
            { id: 26, name: "Manitou Machete", brand: "Manitou", price: 1600, specs: "190x45mm, powietrzny, lekki tłumik, regulacja odbicia", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Manitou", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "None", lockout: "Yes" },
            { id: 27, name: "Cane Creek Inline", brand: "Cane Creek", price: 2000, specs: "190x45mm, powietrzny, precyzyjna regulacja odbicia i kompresji", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Cane Creek", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 28, name: "Fox Nude", brand: "Fox", price: 2500, specs: "190x45mm, powietrzny, regulacja odbicia i kompresji, lekka konstrukcja", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Fox", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 29, name: "RockShox Ario", brand: "RockShox", price: 1800, specs: "190x45mm, powietrzny, regulacja odbicia, ekonomiczny model", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "RockShox", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "None", lockout: "Yes" },
            { id: 30, name: "DT Swiss 230", brand: "DT Swiss", price: 2200, specs: "190x45mm, powietrzny, precyzyjna regulacja odbicia", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "DT Swiss", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 31, name: "SR Suntour Edge", brand: "SR Suntour", price: 1200, specs: "190x45mm, powietrzny, prosty tłumik, regulacja odbicia", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "SR Suntour", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "None", lockout: "Yes" },
            { id: 32, name: "X-Fusion Vector", brand: "X-Fusion", price: 1600, specs: "190x45mm, powietrzny, regulacja odbicia i kompresji, lekka konstrukcja", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "X-Fusion", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 33, name: "Formula R1", brand: "Formula", price: 1800, specs: "190x45mm, powietrzny, regulacja odbicia, profesjonalny tłumik", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Formula", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 34, name: "Push 9.5", brand: "Push", price: 6200, specs: "190x45mm, powietrzny, profesjonalna regulacja, lekkie materiały", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Push", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "Yes" },
            { id: 35, name: "BOS Deville", brand: "BOS", price: 5200, specs: "190x45mm, powietrzny, regulacja odbicia i kompresji, profesjonalny model", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "BOS", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "Yes" },
            { id: 36, name: "Marzocchi CR", brand: "Marzocchi", price: 2400, specs: "210x55mm, powietrzny, regulacja odbicia, solidna konstrukcja", stroke: "55mm", travel: "210mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Marzocchi", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "None", lockout: "Yes" },
            { id: 37, name: "Manitou Mara", brand: "Manitou", price: 2800, specs: "205x65mm, powietrzny, lekka konstrukcja, regulacja odbicia", stroke: "65mm", travel: "205mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Manitou", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 38, name: "Cane Creek DB Air", brand: "Cane Creek", price: 3200, specs: "210x55mm, powietrzny, regulacja kompresji i odbicia, wydajny tłumik", stroke: "55mm", travel: "210mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Cane Creek", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 39, name: "Fox DHX", brand: "Fox", price: 4500, specs: "250x75mm, Coil, regulacja odbicia i kompresji, downhill", stroke: "75mm", travel: "250mm", type: "Coil", eyeletSize: "24x8mm", mountingHardware: "Fox", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "No" },
            { id: 40, name: "RockShox Vivid R2C", brand: "RockShox", price: 3800, specs: "250x75mm, Coil, regulacja odbicia, downhill", stroke: "75mm", travel: "250mm", type: "Coil", eyeletSize: "24x8mm", mountingHardware: "RockShox", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "Low Speed", lockout: "No" },
            { id: 41, name: "Öhlins STX", brand: "Öhlins", price: 5800, specs: "250x75mm, Coil, pełna regulacja, profesjonalny", stroke: "75mm", travel: "250mm", type: "Coil", eyeletSize: "24x8mm", mountingHardware: "Öhlins", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "No" },
            { id: 42, name: "DT Swiss EXC", brand: "DT Swiss", price: 5200, specs: "250x75mm, Coil, regulacja odbicia i kompresji, trwała", stroke: "75mm", travel: "250mm", type: "Coil", eyeletSize: "24x8mm", mountingHardware: "DT Swiss", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "No" },
            { id: 43, name: "EXT Storia V3", brand: "EXT", price: 6800, specs: "250x75mm, Coil, profesjonalna regulacja, lekki", stroke: "75mm", travel: "250mm", type: "Coil", eyeletSize: "24x8mm", mountingHardware: "EXT", shockHardware: "Metric", shockType: "Coil", reboundAdjustments: "High/Low Speed", compressionAdjustments: "High/Low Speed", lockout: "No" },
            { id: 44, name: "DVO Topaz T3", brand: "DVO", price: 3000, specs: "210x55mm, powietrzny, regulacja odbicia, trail", stroke: "55mm", travel: "210mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "DVO", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 45, name: "Fox Float DPS EVOL", brand: "Fox", price: 2400, specs: "190x45mm, powietrzny, lekki, regulacja odbicia", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Fox", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 46, name: "RockShox Monarch Plus", brand: "RockShox", price: 1800, specs: "190x45mm, powietrzny, regulacja odbicia, ekonomiczny", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "RockShox", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 47, name: "DT Swiss 240", brand: "DT Swiss", price: 2600, specs: "190x45mm, powietrzny, precyzyjna regulacja odbicia", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "DT Swiss", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 48, name: "SR Suntour TriAir", brand: "SR Suntour", price: 1400, specs: "190x45mm, powietrzny, prosty tłumik, regulacja odbicia", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "SR Suntour", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "None", lockout: "Yes" },
            { id: 49, name: "X-Fusion O2 Pro", brand: "X-Fusion", price: 2200, specs: "190x45mm, powietrzny, precyzyjna regulacja odbicia i kompresji", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "X-Fusion", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" },
            { id: 50, name: "Formula MOD", brand: "Formula", price: 2400, specs: "190x45mm, powietrzny, regulacja odbicia, lekkie materiały", stroke: "45mm", travel: "190mm", type: "Air", eyeletSize: "20x8mm", mountingHardware: "Formula", shockHardware: "Metric", shockType: "Air", reboundAdjustments: "Low Speed", compressionAdjustments: "Low Speed", lockout: "Yes" }
        ],
        crank: [
            { id: 1, name: "Shimano XTR M9100", brand: "Shimano", price: 450, specs: "34T, 170mm, DUB, karbonowa konstrukcja, lekka i sztywna", teeth: "34T", length: "170mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 12-speed", crankArmMaterial: "Carbon", weight_g: 380 },
            { id: 2, name: "SRAM XX1 Eagle DUB", brand: "SRAM", price: 500, specs: "34T, 170mm, DUB, karbonowa, precyzyjna linia łańcucha", teeth: "34T", length: "170mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Carbon", weight_g: 370 },
            { id: 3, name: "RaceFace Turbine Cinch", brand: "RaceFace", price: 350, specs: "32T, 175mm, aluminium, system Cinch, lekka i wytrzymała", teeth: "32T", length: "175mm", type: "1x", bottomBracket: "Cinch", spindleType: "30mm", chainline: "52mm", qFactor: "170mm", compatibility: "Shimano/SRAM 12-speed", crankArmMaterial: "Aluminium", weight_g: 420 },
            { id: 4, name: "Shimano XT M8100", brand: "Shimano", price: 280, specs: "32T, 170mm, aluminium, Dyna-Sys 12-speed, sztywna konstrukcja", teeth: "32T", length: "170mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 12-speed", crankArmMaterial: "Aluminium", weight_g: 450 },
            { id: 5, name: "SRAM GX Eagle DUB", brand: "SRAM", price: 250, specs: "32T, 170mm, aluminium, DUB, sztywna i lekka", teeth: "32T", length: "170mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 460 },
            { id: 6, name: "Truvativ Descendant", brand: "Truvativ", price: 200, specs: "30T, 175mm, aluminium, mocna konstrukcja do enduro", teeth: "30T", length: "175mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "170mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 480 },
            { id: 7, name: "Shimano SLX M7100", brand: "Shimano", price: 220, specs: "32T, 170mm, aluminium, Dyna-Sys, trwała konstrukcja", teeth: "32T", length: "170mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 12-speed", crankArmMaterial: "Aluminium", weight_g: 470 },
            { id: 8, name: "SRAM NX Eagle", brand: "SRAM", price: 180, specs: "32T, 170mm, aluminium, Eagle 12-speed, lekka i trwała", teeth: "32T", length: "170mm", type: "1x", bottomBracket: "PowerSpline", spindleType: "24mm", chainline: "52mm", qFactor: "170mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 490 },
            { id: 9, name: "RaceFace Aeffect", brand: "RaceFace", price: 150, specs: "30T, 175mm, aluminium, wytrzymała konstrukcja do all-mountain", teeth: "30T", length: "175mm", type: "1x", bottomBracket: "Cinch", spindleType: "30mm", chainline: "52mm", qFactor: "170mm", compatibility: "Shimano/SRAM 12-speed", crankArmMaterial: "Aluminium", weight_g: 500 },
            { id: 10, name: "Shimano Deore M6100", brand: "Shimano", price: 120, specs: "32T, 170mm, aluminium, Dyna-Sys 12-speed, sztywna i lekka", teeth: "32T", length: "170mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 12-speed", crankArmMaterial: "Aluminium", weight_g: 510 },
            { id: 11, name: "SRAM SX Eagle", brand: "SRAM", price: 100, specs: "30T, 170mm, aluminium, Eagle, wytrzymała do trail i XC", teeth: "30T", length: "170mm", type: "1x", bottomBracket: "PowerSpline", spindleType: "24mm", chainline: "52mm", qFactor: "170mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 520 },
            { id: 12, name: "Truvativ Stylo", brand: "Truvativ", price: 180, specs: "34T, 175mm, aluminium, lekka i sztywna konstrukcja", teeth: "34T", length: "175mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 460 },
            { id: 13, name: "Shimano FC-MT500", brand: "Shimano", price: 90, specs: "32T, 170mm, aluminium, sztywna i wytrzymała", teeth: "32T", length: "170mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 12-speed", crankArmMaterial: "Aluminium", weight_g: 530 },
            { id: 14, name: "SRAM XX1 Carbon", brand: "SRAM", price: 550, specs: "34T, 170mm, karbonowa, ultralekka i sztywna", teeth: "34T", length: "170mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Carbon", weight_g: 360 },
            { id: 15, name: "RaceFace Next R", brand: "RaceFace", price: 400, specs: "34T, 170mm, karbonowa, sztywna, mocna konstrukcja", teeth: "34T", length: "170mm", type: "1x", bottomBracket: "Cinch", spindleType: "30mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano/SRAM 12-speed", crankArmMaterial: "Carbon", weight_g: 380 },
            { id: 16, name: "Shimano XTR M9120", brand: "Shimano", price: 480, specs: "34T, 175mm, karbonowa, bardzo lekka i sztywna", teeth: "34T", length: "175mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 12-speed", crankArmMaterial: "Carbon", weight_g: 370 },
            { id: 17, name: "SRAM X01 Eagle", brand: "SRAM", price: 400, specs: "34T, 170mm, karbonowa, system Eagle, sztywna", teeth: "34T", length: "170mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Carbon", weight_g: 390 },
            { id: 18, name: "Truvativ Descendant Carbon", brand: "Truvativ", price: 350, specs: "34T, 175mm, karbonowa, wytrzymała konstrukcja do enduro", teeth: "34T", length: "175mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Carbon", weight_g: 400 },
            { id: 19, name: "Shimano XT M8120", brand: "Shimano", price: 300, specs: "32T, 175mm, aluminium, Dyna-Sys, lekka i sztywna", teeth: "32T", length: "175mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 12-speed", crankArmMaterial: "Aluminium", weight_g: 460 },
            { id: 20, name: "SRAM GX Carbon", brand: "SRAM", price: 320, specs: "32T, 170mm, karbonowa, lekka i sztywna", teeth: "32T", length: "170mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Carbon", weight_g: 410 },
            { id: 21, name: "RaceFace Chester", brand: "RaceFace", price: 120, specs: "30T, 170mm, aluminium, wytrzymała, all-mountain", teeth: "30T", length: "170mm", type: "1x", bottomBracket: "Cinch", spindleType: "30mm", chainline: "52mm", qFactor: "170mm", compatibility: "Shimano/SRAM 12-speed", crankArmMaterial: "Aluminium", weight_g: 490 },
            { id: 22, name: "Shimano FC-M8100", brand: "Shimano", price: 260, specs: "34T, 170mm, aluminium, lekka i sztywna", teeth: "34T", length: "170mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 12-speed", crankArmMaterial: "Aluminium", weight_g: 470 },
            { id: 23, name: "SRAM Eagle DUB", brand: "SRAM", price: 280, specs: "34T, 175mm, aluminium, system DUB, sztywna konstrukcja", teeth: "34T", length: "175mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 480 },
            { id: 24, name: "Truvativ Hussefelt", brand: "Truvativ", price: 140, specs: "32T, 170mm, aluminium, mocna i trwała", teeth: "32T", length: "170mm", type: "1x", bottomBracket: "PowerSpline", spindleType: "24mm", chainline: "52mm", qFactor: "170mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 500 },
            { id: 25, name: "Shimano Deore XT", brand: "Shimano", price: 240, specs: "34T, 175mm, aluminium, sztywna i lekka", teeth: "34T", length: "175mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 12-speed", crankArmMaterial: "Aluminium", weight_g: 480 },
            { id: 26, name: "SRAM NX DUB", brand: "SRAM", price: 160, specs: "32T, 170mm, aluminium, DUB, lekka i trwała", teeth: "32T", length: "170mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 490 },
            { id: 27, name: "RaceFace Ride", brand: "RaceFace", price: 100, specs: "30T, 170mm, aluminium, solidna konstrukcja", teeth: "30T", length: "170mm", type: "1x", bottomBracket: "Cinch", spindleType: "30mm", chainline: "52mm", qFactor: "170mm", compatibility: "Shimano/SRAM 12-speed", crankArmMaterial: "Aluminium", weight_g: 510 },
            { id: 28, name: "Shimano FC-M5100", brand: "Shimano", price: 110, specs: "32T, 175mm, aluminium, trwała konstrukcja", teeth: "32T", length: "175mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 12-speed", crankArmMaterial: "Aluminium", weight_g: 520 },
            { id: 29, name: "SRAM XG-1299", brand: "SRAM", price: 380, specs: "34T, 170mm, karbonowa, lekka i sztywna", teeth: "34T", length: "170mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Carbon", weight_g: 400 },
            { id: 30, name: "Truvativ PowerSpline", brand: "Truvativ", price: 130, specs: "32T, 175mm, aluminium, solidna konstrukcja", teeth: "32T", length: "175mm", type: "1x", bottomBracket: "PowerSpline", spindleType: "24mm", chainline: "52mm", qFactor: "170mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 510 },
            { id: 31, name: "Shimano FC-MT800", brand: "Shimano", price: 200, specs: "34T, 170mm, aluminium, lekka i trwała", teeth: "34T", length: "170mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 12-speed", crankArmMaterial: "Aluminium", weight_g: 490 },
            { id: 32, name: "SRAM GX AXS", brand: "SRAM", price: 450, specs: "34T, 170mm, bezprzewodowa, karbonowa, sztywna", teeth: "34T", length: "170mm", type: "Wireless", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle AXS 12-speed", crankArmMaterial: "Carbon", weight_g: 420 },
            { id: 33, name: "RaceFace Turbine", brand: "RaceFace", price: 280, specs: "32T, 175mm, aluminium, lekka i sztywna", teeth: "32T", length: "175mm", type: "1x", bottomBracket: "Cinch", spindleType: "30mm", chainline: "52mm", qFactor: "170mm", compatibility: "Shimano/SRAM 12-speed", crankArmMaterial: "Aluminium", weight_g: 470 },
            { id: 34, name: "Shimano FC-M7000", brand: "Shimano", price: 180, specs: "34T, 170mm, aluminium, trwała i lekka", teeth: "34T", length: "170mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 11-speed", crankArmMaterial: "Aluminium", weight_g: 500 },
            { id: 35, name: "SRAM XX1 AXS", brand: "SRAM", price: 600, specs: "34T, 170mm, karbonowa, bezprzewodowa, ultralekka", teeth: "34T", length: "170mm", type: "Wireless", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle AXS 12-speed", crankArmMaterial: "Carbon", weight_g: 380 },
            { id: 36, name: "Truvativ Aeffect", brand: "Truvativ", price: 160, specs: "32T, 170mm, aluminium, trwała konstrukcja", teeth: "32T", length: "170mm", type: "1x", bottomBracket: "PowerSpline", spindleType: "24mm", chainline: "52mm", qFactor: "170mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 500 },
            { id: 37, name: "Shimano FC-M9000", brand: "Shimano", price: 400, specs: "34T, 175mm, aluminium, lekka i sztywna", teeth: "34T", length: "175mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 11-speed", crankArmMaterial: "Aluminium", weight_g: 480 },
            { id: 38, name: "SRAM X01 AXS", brand: "SRAM", price: 500, specs: "34T, 170mm, karbonowa, bezprzewodowa, sztywna", teeth: "34T", length: "170mm", type: "Wireless", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle AXS 12-speed", crankArmMaterial: "Carbon", weight_g: 390 },
            { id: 39, name: "RaceFace Cinch", brand: "RaceFace", price: 320, specs: "34T, 175mm, aluminium, system Cinch, mocna konstrukcja", teeth: "34T", length: "175mm", type: "1x", bottomBracket: "Cinch", spindleType: "30mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano/SRAM 12-speed", crankArmMaterial: "Aluminium", weight_g: 480 },
            { id: 40, name: "Shimano FC-M8000", brand: "Shimano", price: 250, specs: "32T, 170mm, aluminium, trwała i lekka", teeth: "32T", length: "170mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 11-speed", crankArmMaterial: "Aluminium", weight_g: 490 },
            { id: 41, name: "SRAM GX DH", brand: "SRAM", price: 220, specs: "34T, 165mm, aluminium, sztywna i trwała", teeth: "34T", length: "165mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle 7-speed", crankArmMaterial: "Aluminium", weight_g: 510 },
            { id: 42, name: "Truvativ Ruktion", brand: "Truvativ", price: 190, specs: "32T, 170mm, aluminium, solidna konstrukcja", teeth: "32T", length: "170mm", type: "1x", bottomBracket: "PowerSpline", spindleType: "24mm", chainline: "52mm", qFactor: "170mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 500 },
            { id: 43, name: "Shimano FC-M9020", brand: "Shimano", price: 420, specs: "34T, 170mm, aluminium, lekka i sztywna", teeth: "34T", length: "170mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 12-speed", crankArmMaterial: "Aluminium", weight_g: 470 },
            { id: 44, name: "SRAM XG-1275", brand: "SRAM", price: 300, specs: "34T, 175mm, aluminium, wytrzymała konstrukcja", teeth: "34T", length: "175mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 480 },
            { id: 45, name: "RaceFace Atlas", brand: "RaceFace", price: 350, specs: "34T, 170mm, aluminium, solidna konstrukcja", teeth: "34T", length: "170mm", type: "1x", bottomBracket: "Cinch", spindleType: "30mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano/SRAM 12-speed", crankArmMaterial: "Aluminium", weight_g: 490 },
            { id: 46, name: "Shimano FC-M6000", brand: "Shimano", price: 140, specs: "32T, 170mm, aluminium, trwała i lekka", teeth: "32T", length: "170mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 11-speed", crankArmMaterial: "Aluminium", weight_g: 510 },
            { id: 47, name: "SRAM XG-1150", brand: "SRAM", price: 240, specs: "32T, 175mm, aluminium, trwała konstrukcja", teeth: "32T", length: "175mm", type: "1x", bottomBracket: "PowerSpline", spindleType: "24mm", chainline: "52mm", qFactor: "170mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 500 },
            { id: 48, name: "Truvativ Howitzer", brand: "Truvativ", price: 170, specs: "34T, 170mm, aluminium, solidna konstrukcja", teeth: "34T", length: "170mm", type: "1x", bottomBracket: "PowerSpline", spindleType: "24mm", chainline: "52mm", qFactor: "170mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 510 },
            { id: 49, name: "Shimano FC-MT501", brand: "Shimano", price: 95, specs: "30T, 170mm, aluminium, trwała i lekka", teeth: "30T", length: "170mm", type: "1x", bottomBracket: "BSA", spindleType: "24mm", chainline: "52mm", qFactor: "168mm", compatibility: "Shimano 12-speed", crankArmMaterial: "Aluminium", weight_g: 520 },
            { id: 50, name: "SRAM X-Sync", brand: "SRAM", price: 260, specs: "34T, 170mm, aluminium, wytrzymała i sztywna", teeth: "34T", length: "170mm", type: "1x", bottomBracket: "DUB", spindleType: "28.99mm", chainline: "52mm", qFactor: "168mm", compatibility: "SRAM Eagle 12-speed", crankArmMaterial: "Aluminium", weight_g: 480 }
        ],
        derailleur: [
    { id: 1, name: "Shimano XTR M9100 SGS", brand: "Shimano", price: 400, specs: "12-speed, Shadow RD+, aluminium", speeds: "12", cage: "SGS" },
    { id: 2, name: "SRAM XX1 Eagle AXS", brand: "SRAM", price: 600, specs: "12-speed, wireless, karbonowa", speeds: "12", cage: "SGS" },
    { id: 3, name: "Shimano XT M8100 SGS", brand: "Shimano", price: 200, specs: "12-speed, Shadow RD+, aluminium", speeds: "12", cage: "SGS" },
    { id: 4, name: "SRAM GX Eagle", brand: "SRAM", price: 180, specs: "12-speed, aluminium, sztywna", speeds: "12", cage: "SGS" },
    { id: 5, name: "Shimano SLX M7100", brand: "Shimano", price: 150, specs: "12-speed, Shadow RD+, aluminium", speeds: "12", cage: "SGS" },
    { id: 6, name: "SRAM NX Eagle", brand: "SRAM", price: 120, specs: "12-speed, aluminium, trwała", speeds: "12", cage: "SGS" },
    { id: 7, name: "Shimano Deore M6100", brand: "Shimano", price: 100, specs: "12-speed, Shadow RD, aluminium", speeds: "12", cage: "SGS" },
    { id: 8, name: "SRAM SX Eagle", brand: "SRAM", price: 80, specs: "12-speed, aluminium, budżetowa", speeds: "12", cage: "SGS" },
    { id: 9, name: "Shimano XTR M9120", brand: "Shimano", price: 450, specs: "12-speed, Shadow RD+, karbonowa", speeds: "12", cage: "SGS" },
    { id: 10, name: "SRAM X01 Eagle", brand: "SRAM", price: 350, specs: "12-speed, aluminium, wytrzymała", speeds: "12", cage: "SGS" },
    { id: 11, name: "Shimano XT M8120", brand: "Shimano", price: 220, specs: "12-speed, Shadow RD+, aluminium", speeds: "12", cage: "SGS" },
    { id: 12, name: "SRAM GX AXS", brand: "SRAM", price: 400, specs: "12-speed, wireless, karbonowa", speeds: "12", cage: "SGS" },
    { id: 13, name: "Shimano Deore XT", brand: "Shimano", price: 180, specs: "12-speed, Shadow RD, aluminium", speeds: "12", cage: "SGS" },
    { id: 14, name: "SRAM XX1", brand: "SRAM", price: 500, specs: "12-speed, aluminium, precyzyjna", speeds: "12", cage: "SGS" },
    { id: 15, name: "Shimano SLX", brand: "Shimano", price: 130, specs: "12-speed, Shadow RD, aluminium", speeds: "12", cage: "SGS" },
    { id: 16, name: "SRAM X01 AXS", brand: "SRAM", price: 550, specs: "12-speed, wireless, karbonowa", speeds: "12", cage: "SGS" },
    { id: 17, name: "Shimano Deore", brand: "Shimano", price: 90, specs: "12-speed, Shadow RD, aluminium", speeds: "12", cage: "SGS" },
    { id: 18, name: "SRAM GX DH", brand: "SRAM", price: 200, specs: "7-speed, aluminium, downhill", speeds: "7", cage: "SGS" },
    { id: 19, name: "Shimano Zee", brand: "Shimano", price: 140, specs: "10-speed, aluminium, downhill", speeds: "10", cage: "SGS" },
    { id: 20, name: "SRAM X7", brand: "SRAM", price: 110, specs: "10-speed, aluminium, solidna", speeds: "10", cage: "SGS" },
    { id: 21, name: "Shimano Saint", brand: "Shimano", price: 250, specs: "10-speed, aluminium, downhill", speeds: "10", cage: "SGS" },
    { id: 22, name: "SRAM X9", brand: "SRAM", price: 160, specs: "10-speed, aluminium, precyzyjna", speeds: "10", cage: "SGS" },
    { id: 23, name: "Shimano XTR M9000", brand: "Shimano", price: 350, specs: "11-speed, aluminium, lekka", speeds: "11", cage: "SGS" },
    { id: 24, name: "SRAM X0", brand: "SRAM", price: 300, specs: "11-speed, aluminium, precyzyjna", speeds: "11", cage: "SGS" },
    { id: 25, name: "Shimano XT M8000", brand: "Shimano", price: 170, specs: "11-speed, aluminium, trwała", speeds: "11", cage: "SGS" },
    { id: 26, name: "SRAM NX 11", brand: "SRAM", price: 100, specs: "11-speed, aluminium, wytrzymała", speeds: "11", cage: "SGS" },
    { id: 27, name: "Shimano SLX M7000", brand: "Shimano", price: 120, specs: "11-speed, aluminium, trwała", speeds: "11", cage: "SGS" },
    { id: 28, name: "SRAM GX 11", brand: "SRAM", price: 140, specs: "11-speed, aluminium, precyzyjna", speeds: "11", cage: "SGS" },
    { id: 29, name: "Shimano Deore M6000", brand: "Shimano", price: 80, specs: "11-speed, aluminium, solidna", speeds: "11", cage: "SGS" },
    { id: 30, name: "SRAM X5", brand: "SRAM", price: 70, specs: "10-speed, aluminium, wytrzymała", speeds: "10", cage: "SGS" },
    { id: 31, name: "Shimano Altus", brand: "Shimano", price: 50, specs: "9-speed, aluminium, budżetowa", speeds: "9", cage: "SGS" },
    { id: 32, name: "SRAM X4", brand: "SRAM", price: 45, specs: "9-speed, aluminium, lekka", speeds: "9", cage: "SGS" },
    { id: 33, name: "Shimano Acera", brand: "Shimano", price: 60, specs: "9-speed, aluminium, solidna", speeds: "9", cage: "SGS" },
    { id: 34, name: "SRAM X3", brand: "SRAM", price: 40, specs: "8-speed, aluminium, budżetowa", speeds: "8", cage: "SGS" },
    { id: 35, name: "Shimano Alivio", brand: "Shimano", price: 55, specs: "9-speed, aluminium, solidna", speeds: "9", cage: "SGS" },
    { id: 36, name: "SRAM XX", brand: "SRAM", price: 400, specs: "11-speed, aluminium, sztywna", speeds: "11", cage: "SGS" },
    { id: 37, name: "Shimano 105", brand: "Shimano", price: 180, specs: "11-speed, aluminium, precyzyjna", speeds: "11", cage: "SGS" },
    { id: 38, name: "SRAM Force", brand: "SRAM", price: 250, specs: "11-speed, aluminium, wytrzymała", speeds: "11", cage: "SGS" },
    { id: 39, name: "Shimano Ultegra", brand: "Shimano", price: 220, specs: "11-speed, aluminium, lekka", speeds: "11", cage: "SGS" },
    { id: 40, name: "SRAM Red", brand: "SRAM", price: 350, specs: "11-speed, aluminium, sztywna", speeds: "11", cage: "SGS" },
    { id: 41, name: "Shimano Dura-Ace", brand: "Shimano", price: 500, specs: "11-speed, aluminium, ultralekka", speeds: "11", cage: "SGS" },
    { id: 42, name: "SRAM XX Eagle", brand: "SRAM", price: 450, specs: "12-speed, aluminium, lekka", speeds: "12", cage: "SGS" },
    { id: 43, name: "Shimano XTR Di2", brand: "Shimano", price: 700, specs: "12-speed, electronic, karbonowa", speeds: "12", cage: "SGS" },
    { id: 44, name: "SRAM XX1 DH", brand: "SRAM", price: 300, specs: "7-speed, aluminium, downhill", speeds: "7", cage: "SGS" },
    { id: 45, name: "Shimano XT Di2", brand: "Shimano", price: 500, specs: "12-speed, electronic, aluminium", speeds: "12", cage: "SGS" },
    { id: 46, name: "SRAM GX DH 7", brand: "SRAM", price: 180, specs: "7-speed, aluminium, downhill", speeds: "7", cage: "SGS" },
    { id: 47, name: "Shimano SLX Di2", brand: "Shimano", price: 400, specs: "12-speed, electronic, aluminium", speeds: "12", cage: "SGS" },
    { id: 48, name: "SRAM NX 12", brand: "SRAM", price: 130, specs: "12-speed, aluminium, solidna", speeds: "12", cage: "SGS" },
    { id: 49, name: "Shimano Deore Di2", brand: "Shimano", price: 300, specs: "12-speed, electronic, aluminium", speeds: "12", cage: "SGS" },
    { id: 50, name: "SRAM SX 12", brand: "SRAM", price: 90, specs: "12-speed, aluminium, budżetowa", speeds: "12", cage: "SGS" }
],
shifter: [
    { id: 1, name: "Shimano XTR M9100", brand: "Shimano", price: 250, specs: "12-speed, I-Spec EV, aluminium", speeds: "12", type: "Mechanical" },
    { id: 2, name: "SRAM XX1 Eagle AXS Controller", brand: "SRAM", price: 350, specs: "Wireless, 12-speed, karbonowa", speeds: "12", type: "Wireless" },
    { id: 3, name: "Shimano XT M8100", brand: "Shimano", price: 120, specs: "12-speed, I-Spec EV, aluminium", speeds: "12", type: "Mechanical" },
    { id: 4, name: "SRAM GX Eagle Trigger", brand: "SRAM", price: 100, specs: "12-speed, aluminium, ergonomiczna", speeds: "12", type: "Mechanical" },
    { id: 5, name: "Shimano SLX M7100", brand: "Shimano", price: 90, specs: "12-speed, I-Spec EV, aluminium", speeds: "12", type: "Mechanical" },
    { id: 6, name: "SRAM NX Eagle Trigger", brand: "SRAM", price: 70, specs: "12-speed, aluminium, trwała", speeds: "12", type: "Mechanical" },
    { id: 7, name: "Shimano Deore M6100", brand: "Shimano", price: 60, specs: "12-speed, aluminium, trwała", speeds: "12", type: "Mechanical" },
    { id: 8, name: "SRAM SX Eagle Trigger", brand: "SRAM", price: 50, specs: "12-speed, aluminium, solidna", speeds: "12", type: "Mechanical" },
    { id: 9, name: "Shimano XTR Di2", brand: "Shimano", price: 400, specs: "12-speed, electronic, karbonowa", speeds: "12", type: "Electronic" },
    { id: 10, name: "SRAM X01 Eagle AXS", brand: "SRAM", price: 300, specs: "Wireless, 12-speed, karbonowa", speeds: "12", type: "Wireless" },
    { id: 11, name: "Shimano XT Di2", brand: "Shimano", price: 250, specs: "12-speed, electronic, aluminium", speeds: "12", type: "Electronic" },
    { id: 12, name: "SRAM GX AXS Controller", brand: "SRAM", price: 200, specs: "Wireless, 12-speed, karbonowa", speeds: "12", type: "Wireless" },
    { id: 13, name: "Shimano SLX Di2", brand: "Shimano", price: 180, specs: "12-speed, electronic, aluminium", speeds: "12", type: "Electronic" },
    { id: 14, name: "SRAM XX1 Trigger", brand: "SRAM", price: 200, specs: "12-speed, aluminium, lekka", speeds: "12", type: "Mechanical" },
    { id: 15, name: "Shimano XTR M9000", brand: "Shimano", price: 180, specs: "11-speed, I-Spec EV, aluminium", speeds: "11", type: "Mechanical" },
    { id: 16, name: "SRAM X01 Trigger", brand: "SRAM", price: 150, specs: "12-speed, aluminium, trwała", speeds: "12", type: "Mechanical" },
    { id: 17, name: "Shimano XT M8000", brand: "Shimano", price: 100, specs: "11-speed, I-Spec EV, aluminium", speeds: "11", type: "Mechanical" },
    { id: 18, name: "SRAM GX Trigger 11", brand: "SRAM", price: 80, specs: "11-speed, aluminium, ergonomiczna", speeds: "11", type: "Mechanical" },
    { id: 19, name: "Shimano SLX M7000", brand: "Shimano", price: 70, specs: "11-speed, aluminium, solidna", speeds: "11", type: "Mechanical" },
    { id: 20, name: "SRAM NX Trigger 11", brand: "SRAM", price: 60, specs: "11-speed, aluminium, trwała", speeds: "11", type: "Mechanical" },
    { id: 21, name: "Shimano Deore M6000", brand: "Shimano", price: 50, specs: "11-speed, aluminium, solidna", speeds: "11", type: "Mechanical" },
    { id: 22, name: "SRAM X7 Trigger", brand: "SRAM", price: 45, specs: "10-speed, aluminium, solidna", speeds: "10", type: "Mechanical" },
    { id: 23, name: "Shimano Saint", brand: "Shimano", price: 120, specs: "10-speed, aluminium, precyzyjna", speeds: "10", type: "Mechanical" },
    { id: 24, name: "SRAM X9 Trigger", brand: "SRAM", price: 70, specs: "10-speed, aluminium, solidna", speeds: "10", type: "Mechanical" },
    { id: 25, name: "Shimano Zee", brand: "Shimano", price: 80, specs: "10-speed, aluminium, wytrzymała", speeds: "10", type: "Mechanical" },
    { id: 26, name: "SRAM X0 Trigger", brand: "SRAM", price: 120, specs: "11-speed, aluminium, precyzyjna", speeds: "11", type: "Mechanical" },
    { id: 27, name: "Shimano 105", brand: "Shimano", price: 100, specs: "11-speed, aluminium, lekka", speeds: "11", type: "Mechanical" },
    { id: 28, name: "SRAM Force", brand: "SRAM", price: 130, specs: "11-speed, aluminium, solidna", speeds: "11", type: "Mechanical" },
    { id: 29, name: "Shimano Ultegra", brand: "Shimano", price: 150, specs: "11-speed, aluminium, lekka", speeds: "11", type: "Mechanical" },
    { id: 30, name: "SRAM Red", brand: "SRAM", price: 200, specs: "11-speed, aluminium, sztywna", speeds: "11", type: "Mechanical" },
    { id: 31, name: "Shimano Dura-Ace", brand: "Shimano", price: 250, specs: "11-speed, aluminium, ultralekka", speeds: "11", type: "Mechanical" },
    { id: 32, name: "SRAM XX Trigger", brand: "SRAM", price: 180, specs: "11-speed, aluminium, precyzyjna", speeds: "11", type: "Mechanical" },
    { id: 33, name: "Shimano Altus", brand: "Shimano", price: 30, specs: "9-speed, aluminium, budżetowa", speeds: "9", type: "Mechanical" },
    { id: 34, name: "SRAM X4 Trigger", brand: "SRAM", price: 25, specs: "9-speed, aluminium, trwała", speeds: "9", type: "Mechanical" },
    { id: 35, name: "Shimano Acera", brand: "Shimano", price: 35, specs: "9-speed, aluminium, solidna", speeds: "9", type: "Mechanical" },
    { id: 36, name: "SRAM X3 Trigger", brand: "SRAM", price: 20, specs: "8-speed, aluminium, budżetowa", speeds: "8", type: "Mechanical" },
    { id: 37, name: "Shimano Alivio", brand: "Shimano", price: 40, specs: "9-speed, aluminium, trwała", speeds: "9", type: "Mechanical" },
    { id: 38, name: "SRAM X5 Trigger", brand: "SRAM", price: 35, specs: "10-speed, aluminium, solidna", speeds: "10", type: "Mechanical" },
    { id: 39, name: "Shimano Tourney", brand: "Shimano", price: 20, specs: "7-speed, aluminium, budżetowa", speeds: "7", type: "Mechanical" },
    { id: 40, name: "SRAM Attack", brand: "SRAM", price: 30, specs: "8-speed, aluminium, trwała", speeds: "8", type: "Mechanical" },
    { id: 41, name: "Shimano Rapidfire", brand: "Shimano", price: 25, specs: "8-speed, aluminium, precyzyjna", speeds: "8", type: "Mechanical" },
    { id: 42, name: "SRAM Matchmaker", brand: "SRAM", price: 40, specs: "10-speed, aluminium, solidna", speeds: "10", type: "Mechanical" },
    { id: 43, name: "Shimano EZ-Fire", brand: "Shimano", price: 15, specs: "7-speed, aluminium, budżetowa", speeds: "7", type: "Mechanical" },
    { id: 44, name: "SRAM Twist Shifter", brand: "SRAM", price: 20, specs: "8-speed, aluminium, ergonomiczna", speeds: "8", type: "Mechanical" },
    { id: 45, name: "Shimano Revo Shift", brand: "Shimano", price: 18, specs: "7-speed, aluminium, solidna", speeds: "7", type: "Mechanical" },
    { id: 46, name: "SRAM Grip Shift", brand: "SRAM", price: 25, specs: "9-speed, aluminium, ergonomiczna", speeds: "9", type: "Mechanical" },
    { id: 47, name: "Shimano Nexus", brand: "Shimano", price: 60, specs: "8-speed, internal, aluminium", speeds: "8", type: "Mechanical" },
    { id: 48, name: "SRAM ESP 9.0", brand: "SRAM", price: 40, specs: "9-speed, aluminium, precyzyjna", speeds: "9", type: "Mechanical" },
    { id: 49, name: "Shimano Alfine", brand: "Shimano", price: 80, specs: "11-speed, internal, aluminium", speeds: "11", type: "Mechanical" },
    { id: 50, name: "SRAM 1:1", brand: "SRAM", price: 35, specs: "10-speed, aluminium, ergonomiczna", speeds: "10", type: "Mechanical" }
],
cassette: [
    { id: 1, name: "Shimano XTR M9100", brand: "Shimano", price: 350, specs: "10-51T, 12-speed, ultralight", range: "10-51T", speeds: "12" },
    { id: 2, name: "SRAM XX1 Eagle XG-1299", brand: "SRAM", price: 400, specs: "10-52T, 12-speed, carbon steel", range: "10-52T", speeds: "12" },
    { id: 3, name: "Shimano XT M8100", brand: "Shimano", price: 180, specs: "10-51T, 12-speed, durable", range: "10-51T", speeds: "12" },
    { id: 4, name: "SRAM GX Eagle XG-1275", brand: "SRAM", price: 150, specs: "10-52T, 12-speed, steel", range: "10-52T", speeds: "12" },
    { id: 5, name: "Shimano SLX M7100", brand: "Shimano", price: 130, specs: "10-51T, 12-speed, lightweight", range: "10-51T", speeds: "12" },
    { id: 6, name: "SRAM NX Eagle PG-1230", brand: "SRAM", price: 100, specs: "11-50T, 12-speed, durable", range: "11-50T", speeds: "12" },
    { id: 7, name: "Shimano Deore M6100", brand: "Shimano", price: 90, specs: "10-51T, 12-speed", range: "10-51T", speeds: "12" },
    { id: 8, name: "SRAM SX Eagle PG-1210", brand: "SRAM", price: 70, specs: "11-50T, 12-speed, budget", range: "11-50T", speeds: "12" },
    { id: 9, name: "Shimano XTR M9000", brand: "Shimano", price: 300, specs: "11-40T, 11-speed, ultralight", range: "11-40T", speeds: "11" },
    { id: 10, name: "SRAM X01 Eagle XG-1295", brand: "SRAM", price: 350, specs: "10-52T, 12-speed", range: "10-52T", speeds: "12" },
    { id: 11, name: "Shimano XT M8000", brand: "Shimano", price: 150, specs: "11-46T, 11-speed", range: "11-46T", speeds: "11" },
    { id: 12, name: "SRAM GX 11-speed", brand: "SRAM", price: 120, specs: "10-42T, 11-speed", range: "10-42T", speeds: "11" },
    { id: 13, name: "Shimano SLX M7000", brand: "Shimano", price: 110, specs: "11-46T, 11-speed", range: "11-46T", speeds: "11" },
    { id: 14, name: "SRAM NX 11-speed", brand: "SRAM", price: 90, specs: "11-42T, 11-speed", range: "11-42T", speeds: "11" },
    { id: 15, name: "Shimano Deore M6000", brand: "Shimano", price: 80, specs: "11-42T, 11-speed", range: "11-42T", speeds: "11" },
    { id: 16, name: "SRAM XG-1150", brand: "SRAM", price: 200, specs: "10-42T, 11-speed, lightweight", range: "10-42T", speeds: "11" },
    { id: 17, name: "Shimano 105", brand: "Shimano", price: 120, specs: "11-32T, 11-speed", range: "11-32T", speeds: "11" },
    { id: 18, name: "SRAM PG-1130", brand: "SRAM", price: 80, specs: "11-36T, 11-speed", range: "11-36T", speeds: "11" },
    { id: 19, name: "Shimano Ultegra", brand: "Shimano", price: 180, specs: "11-30T, 11-speed", range: "11-30T", speeds: "11" },
    { id: 20, name: "SRAM XG-1199", brand: "SRAM", price: 300, specs: "10-42T, 11-speed", range: "10-42T", speeds: "11" },
    { id: 21, name: "Shimano Dura-Ace", brand: "Shimano", price: 350, specs: "11-28T, 11-speed", range: "11-28T", speeds: "11" },
    { id: 22, name: "SRAM XX", brand: "SRAM", price: 320, specs: "10-42T, 11-speed", range: "10-42T", speeds: "11" },
    { id: 23, name: "Shimano XTR 10-speed", brand: "Shimano", price: 250, specs: "11-36T, 10-speed", range: "11-36T", speeds: "10" },
    { id: 24, name: "SRAM X0 10-speed", brand: "SRAM", price: 220, specs: "11-36T, 10-speed", range: "11-36T", speeds: "10" },
    { id: 25, name: "Shimano XT 10-speed", brand: "Shimano", price: 130, specs: "11-36T, 10-speed", range: "11-36T", speeds: "10" },
    { id: 26, name: "SRAM X9 10-speed", brand: "SRAM", price: 110, specs: "11-36T, 10-speed", range: "11-36T", speeds: "10" },
    { id: 27, name: "Shimano SLX 10-speed", brand: "Shimano", price: 100, specs: "11-36T, 10-speed", range: "11-36T", speeds: "10" },
    { id: 28, name: "SRAM X7 10-speed", brand: "SRAM", price: 80, specs: "11-36T, 10-speed", range: "11-36T", speeds: "10" },
    { id: 29, name: "Shimano Deore 10-speed", brand: "Shimano", price: 70, specs: "11-36T, 10-speed", range: "11-36T", speeds: "10" },
    { id: 30, name: "SRAM X5 10-speed", brand: "SRAM", price: 60, specs: "11-36T, 10-speed", range: "11-36T", speeds: "10" },
    { id: 31, name: "Shimano Alivio 9-speed", brand: "Shimano", price: 50, specs: "11-34T, 9-speed", range: "11-34T", speeds: "9" },
    { id: 32, name: "SRAM PG-950", brand: "SRAM", price: 40, specs: "11-32T, 9-speed", range: "11-32T", speeds: "9" },
    { id: 33, name: "Shimano Acera 9-speed", brand: "Shimano", price: 45, specs: "11-34T, 9-speed", range: "11-34T", speeds: "9" },
    { id: 34, name: "SRAM PG-850", brand: "SRAM", price: 35, specs: "11-32T, 8-speed", range: "11-32T", speeds: "8" },
    { id: 35, name: "Shimano Altus 9-speed", brand: "Shimano", price: 40, specs: "11-34T, 9-speed", range: "11-34T", speeds: "9" },
    { id: 36, name: "SRAM PG-720", brand: "SRAM", price: 30, specs: "11-28T, 7-speed", range: "11-28T", speeds: "7" },
    { id: 37, name: "Shimano Tourney 7-speed", brand: "Shimano", price: 25, specs: "14-28T, 7-speed", range: "14-28T", speeds: "7" },
    { id: 38, name: "SRAM PG-830", brand: "SRAM", price: 32, specs: "11-30T, 8-speed", range: "11-30T", speeds: "8" },
    { id: 39, name: "Shimano Nexus 8-speed", brand: "Shimano", price: 80, specs: "Internal, 8-speed", range: "Internal", speeds: "8" },
    { id: 40, name: "SRAM ESP 9.0", brand: "SRAM", price: 60, specs: "11-34T, 9-speed", range: "11-34T", speeds: "9" },
    { id: 41, name: "Shimano Alfine 11-speed", brand: "Shimano", price: 150, specs: "Internal, 11-speed", range: "Internal", speeds: "11" },
    { id: 42, name: "SRAM 1:1 10-speed", brand: "SRAM", price: 50, specs: "11-36T, 10-speed", range: "11-36T", speeds: "10" },
    { id: 43, name: "Shimano Capreo", brand: "Shimano", price: 120, specs: "9-26T, 9-speed", range: "9-26T", speeds: "9" },
    { id: 44, name: "SRAM PG-1070", brand: "SRAM", price: 90, specs: "12-36T, 10-speed", range: "12-36T", speeds: "10" },
    { id: 45, name: "Shimano HG400", brand: "Shimano", price: 55, specs: "11-34T, 9-speed", range: "11-34T", speeds: "9" },
    { id: 46, name: "SRAM PG-1050", brand: "SRAM", price: 70, specs: "11-32T, 10-speed", range: "11-32T", speeds: "10" },
    { id: 47, name: "Shimano HG200", brand: "Shimano", price: 35, specs: "14-28T, 8-speed", range: "14-28T", speeds: "8" },
    { id: 48, name: "SRAM PG-1020", brand: "SRAM", price: 45, specs: "11-32T, 9-speed", range: "11-32T", speeds: "9" },
    { id: 49, name: "Shimano CS-HG50", brand: "Shimano", price: 65, specs: "11-34T, 9-speed", range: "11-34T", speeds: "9" },
    { id: 50, name: "SRAM PG-1030", brand: "SRAM", price: 55, specs: "11-36T, 10-speed", range: "11-36T", speeds: "10" }
],
chain: [
    { id: 1, name: "Shimano XTR CN-M9100", brand: "Shimano", price: 80, specs: "12-speed, Hollow Pin, ultralight", speeds: "12" },
    { id: 2, name: "SRAM XX1 Eagle", brand: "SRAM", price: 90, specs: "12-speed, Flattop, strong", speeds: "12" },
    { id: 3, name: "Shimano XT CN-M8100", brand: "Shimano", price: 50, specs: "12-speed, durable", speeds: "12" },
    { id: 4, name: "SRAM GX Eagle", brand: "SRAM", price: 45, specs: "12-speed, steel", speeds: "12" },
    { id: 5, name: "Shimano SLX CN-M7100", brand: "Shimano", price: 40, specs: "12-speed, lightweight", speeds: "12" },
    { id: 6, name: "SRAM NX Eagle", brand: "SRAM", price: 35, specs: "12-speed, durable", speeds: "12" },
    { id: 7, name: "Shimano Deore CN-M6100", brand: "Shimano", price: 30, specs: "12-speed, reliable", speeds: "12" },
    { id: 8, name: "SRAM SX Eagle", brand: "SRAM", price: 25, specs: "12-speed, budget", speeds: "12" },
    { id: 9, name: "Shimano XTR CN-M9000", brand: "Shimano", price: 70, specs: "11-speed, ultralight", speeds: "11" },
    { id: 10, name: "SRAM X01 Eagle", brand: "SRAM", price: 75, specs: "12-speed, strong", speeds: "12" },
    { id: 11, name: "Shimano XT CN-M8000", brand: "Shimano", price: 45, specs: "11-speed", speeds: "11" },
    { id: 12, name: "SRAM GX 11-speed", brand: "SRAM", price: 40, specs: "11-speed", speeds: "11" },
    { id: 13, name: "Shimano SLX CN-M7000", brand: "Shimano", price: 35, specs: "11-speed", speeds: "11" },
    { id: 14, name: "SRAM NX 11-speed", brand: "SRAM", price: 30, specs: "11-speed", speeds: "11" },
    { id: 15, name: "Shimano Deore CN-M6000", brand: "Shimano", price: 25, specs: "11-speed", speeds: "11" },
    { id: 16, name: "SRAM PC-1130", brand: "SRAM", price: 35, specs: "11-speed", speeds: "11" },
    { id: 17, name: "Shimano 105 CN-5800", brand: "Shimano", price: 40, specs: "11-speed", speeds: "11" },
    { id: 18, name: "SRAM PC-1170", brand: "SRAM", price: 50, specs: "11-speed", speeds: "11" },
    { id: 19, name: "Shimano Ultegra CN-6800", brand: "Shimano", price: 55, specs: "11-speed", speeds: "11" },
    { id: 20, name: "SRAM PC-XX1", brand: "SRAM", price: 80, specs: "11-speed", speeds: "11" },
    { id: 21, name: "Shimano Dura-Ace CN-9000", brand: "Shimano", price: 85, specs: "11-speed", speeds: "11" },
    { id: 22, name: "SRAM PC-X01", brand: "SRAM", price: 70, specs: "11-speed", speeds: "11" },
    { id: 23, name: "Shimano XTR 10-speed", brand: "Shimano", price: 60, specs: "10-speed", speeds: "10" },
    { id: 24, name: "SRAM PC-1091", brand: "SRAM", price: 65, specs: "10-speed", speeds: "10" },
    { id: 25, name: "Shimano XT 10-speed", brand: "Shimano", price: 40, specs: "10-speed", speeds: "10" },
    { id: 26, name: "SRAM PC-1071", brand: "SRAM", price: 45, specs: "10-speed", speeds: "10" },
    { id: 27, name: "Shimano SLX 10-speed", brand: "Shimano", price: 35, specs: "10-speed", speeds: "10" },
    { id: 28, name: "SRAM PC-1051", brand: "SRAM", price: 30, specs: "10-speed", speeds: "10" },
    { id: 29, name: "Shimano Deore 10-speed", brand: "Shimano", price: 25, specs: "10-speed", speeds: "10" },
    { id: 30, name: "SRAM PC-1031", brand: "SRAM", price: 20, specs: "10-speed", speeds: "10" },
    { id: 31, name: "Shimano Alivio 9-speed", brand: "Shimano", price: 18, specs: "9-speed", speeds: "9" },
    { id: 32, name: "SRAM PC-951", brand: "SRAM", price: 15, specs: "9-speed", speeds: "9" },
    { id: 33, name: "Shimano Acera 9-speed", brand: "Shimano", price: 16, specs: "9-speed", speeds: "9" },
    { id: 34, name: "SRAM PC-851", brand: "SRAM", price: 12, specs: "8-speed", speeds: "8" },
    { id: 35, name: "Shimano Altus 9-speed", brand: "Shimano", price: 15, specs: "9-speed", speeds: "9" },
    { id: 36, name: "SRAM PC-731", brand: "SRAM", price: 10, specs: "7-speed", speeds: "7" },
    { id: 37, name: "Shimano Tourney 7-speed", brand: "Shimano", price: 8, specs: "7-speed", speeds: "7" },
    { id: 38, name: "SRAM PC-830", brand: "SRAM", price: 14, specs: "8-speed", speeds: "8" },
    { id: 39, name: "Shimano Nexus 8-speed", brand: "Shimano", price: 25, specs: "8-speed, internal", speeds: "8" },
    { id: 40, name: "SRAM PC-991", brand: "SRAM", price: 20, specs: "9-speed", speeds: "9" },
    { id: 41, name: "Shimano Alfine 11-speed", brand: "Shimano", price: 35, specs: "11-speed, internal", speeds: "11" },
    { id: 42, name: "SRAM PC-101", brand: "SRAM", price: 18, specs: "10-speed", speeds: "10" },
    { id: 43, name: "Shimano Capreo", brand: "Shimano", price: 30, specs: "9-speed", speeds: "9" },
    { id: 44, name: "SRAM PC-1070", brand: "SRAM", price: 40, specs: "10-speed", speeds: "10" },
    { id: 45, name: "Shimano CN-HG53", brand: "Shimano", price: 20, specs: "9-speed", speeds: "9" },
    { id: 46, name: "SRAM PC-1050", brand: "SRAM", price: 25, specs: "10-speed", speeds: "10" },
    { id: 47, name: "Shimano CN-HG40", brand: "Shimano", price: 12, specs: "8-speed", speeds: "8" },
    { id: 48, name: "SRAM PC-1020", brand: "SRAM", price: 15, specs: "9-speed", speeds: "9" },
    { id: 49, name: "Shimano CN-HG54", brand: "Shimano", price: 22, specs: "9-speed", speeds: "9" },
    { id: 50, name: "SRAM PC-1030", brand: "SRAM", price: 18, specs: "10-speed", speeds: "10" }
],
brakes: [
    { id: 1, name: "Shimano XTR M9120", brand: "Shimano", price: 1899, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 2, name: "SRAM Code RSC", brand: "SRAM", price: 1699, specs: "4-tłoczkowe, 200mm", pistons: "4", rotorSize: "200mm", type: "Hydraulic" },
    { id: 3, name: "Magura MT7", brand: "Magura", price: 1599, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 4, name: "Hope Tech 4 V4", brand: "Hope", price: 2199, specs: "4-tłoczkowe, 220mm", pistons: "4", rotorSize: "220mm", type: "Hydraulic" },
    { id: 5, name: "Shimano XT M8120", brand: "Shimano", price: 1249, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 6, name: "SRAM Guide RSC", brand: "SRAM", price: 1399, specs: "4-tłoczkowe, 200mm", pistons: "4", rotorSize: "200mm", type: "Hydraulic" },
    { id: 7, name: "Magura MT5", brand: "Magura", price: 899, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 8, name: "Hope Tech 3 E4", brand: "Hope", price: 1799, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 9, name: "Shimano SLX M7120", brand: "Shimano", price: 899, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 10, name: "SRAM G2 RSC", brand: "SRAM", price: 1499, specs: "4-tłoczkowe, 200mm", pistons: "4", rotorSize: "200mm", type: "Hydraulic" },
    { id: 11, name: "Magura MT4", brand: "Magura", price: 699, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 12, name: "Hope Tech 3 V2", brand: "Hope", price: 1499, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 13, name: "Shimano Deore M6120", brand: "Shimano", price: 749, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 14, name: "SRAM Level T", brand: "SRAM", price: 549, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 15, name: "Magura MT2", brand: "Magura", price: 599, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 16, name: "Hope Tech X2", brand: "Hope", price: 1299, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 17, name: "Shimano Zee", brand: "Shimano", price: 1049, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 18, name: "SRAM Code R", brand: "SRAM", price: 1349, specs: "4-tłoczkowe, 200mm", pistons: "4", rotorSize: "200mm", type: "Hydraulic" },
    { id: 19, name: "Magura MT8", brand: "Magura", price: 1999, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 20, name: "Hope Tech 4 X2", brand: "Hope", price: 1599, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 21, name: "Shimano Saint", brand: "Shimano", price: 1299, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 22, name: "SRAM Guide R", brand: "SRAM", price: 999, specs: "4-tłoczkowe, 200mm", pistons: "4", rotorSize: "200mm", type: "Hydraulic" },
    { id: 23, name: "Magura MT Trail", brand: "Magura", price: 1199, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 24, name: "Hope Tech 3 M4", brand: "Hope", price: 1699, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 25, name: "Shimano XTR M9020", brand: "Shimano", price: 1649, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 26, name: "SRAM Level Ultimate", brand: "SRAM", price: 1599, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 27, name: "Magura MT6", brand: "Magura", price: 1099, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 28, name: "Hope Tech 3 C2", brand: "Hope", price: 1399, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 29, name: "Shimano XT M8020", brand: "Shimano", price: 1149, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 30, name: "SRAM G2 Ultimate", brand: "SRAM", price: 1799, specs: "4-tłoczkowe, 200mm", pistons: "4", rotorSize: "200mm", type: "Hydraulic" },
    { id: 31, name: "Magura MT Next", brand: "Magura", price: 999, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 32, name: "Hope Tech 3 Mini", brand: "Hope", price: 1199, specs: "2-tłoczkowe, 160mm", pistons: "2", rotorSize: "160mm", type: "Hydraulic" },
    { id: 33, name: "Shimano SLX M7000", brand: "Shimano", price: 749, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 34, name: "SRAM Level", brand: "SRAM", price: 699, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 35, name: "Magura MT Sport", brand: "Magura", price: 649, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 36, name: "Hope Tech 3 Evo", brand: "Hope", price: 1399, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 37, name: "Shimano Deore M6000", brand: "Shimano", price: 599, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 38, name: "SRAM DB8", brand: "SRAM", price: 799, specs: "4-tłoczkowe, 200mm", pistons: "4", rotorSize: "200mm", type: "Hydraulic" },
    { id: 39, name: "Magura MT8 Pro", brand: "Magura", price: 2199, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 40, name: "Hope Tech 4 M4", brand: "Hope", price: 1999, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 41, name: "Shimano XT M8100 2-piston", brand: "Shimano", price: 999, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 42, name: "SRAM Code Ultimate", brand: "SRAM", price: 2199, specs: "4-tłoczkowe, 200mm", pistons: "4", rotorSize: "200mm", type: "Hydraulic" },
    { id: 43, name: "Magura MT7 Pro", brand: "Magura", price: 1799, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 44, name: "Hope Tech 4 E4", brand: "Hope", price: 2299, specs: "4-tłoczkowe, 220mm", pistons: "4", rotorSize: "220mm", type: "Hydraulic" },
    { id: 45, name: "Shimano SLX M7100 4-piston", brand: "Shimano", price: 999, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 46, name: "SRAM G2 R", brand: "SRAM", price: 1099, specs: "4-tłoczkowe, 200mm", pistons: "4", rotorSize: "200mm", type: "Hydraulic" },
    { id: 47, name: "Magura MT5 Pro", brand: "Magura", price: 1299, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 48, name: "Hope Tech 3 X2", brand: "Hope", price: 1499, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" },
    { id: 49, name: "Shimano Deore M6100 4-piston", brand: "Shimano", price: 849, specs: "4-tłoczkowe, 203mm", pistons: "4", rotorSize: "203mm", type: "Hydraulic" },
    { id: 50, name: "SRAM Level TLM", brand: "SRAM", price: 1199, specs: "2-tłoczkowe, 180mm", pistons: "2", rotorSize: "180mm", type: "Hydraulic" }
],
tires: [
    { id: 1, name: "Maxxis Minion DHF/DHR II", brand: "Maxxis", price: 289, specs: "29x2.5WT, EXO+, 3C", size: "29x2.5\"", compound: "3C" },
    { id: 2, name: "Schwalbe Magic Mary", brand: "Schwalbe", price: 279, specs: "29x2.4, Super Gravity", size: "29x2.4\"", compound: "Super Gravity" },
    { id: 3, name: "Continental Kryptotal", brand: "Continental", price: 269, specs: "29x2.4, Endurance", size: "29x2.4\"", compound: "Endurance" },
    { id: 4, name: "Michelin Wild Enduro", brand: "Michelin", price: 259, specs: "29x2.4, Gum-X", size: "29x2.4\"", compound: "Gum-X" },
    { id: 5, name: "Maxxis Assegai", brand: "Maxxis", price: 299, specs: "29x2.5, DoubleDown", size: "29x2.5\"", compound: "3C" },
    { id: 6, name: "Schwalbe Hans Dampf", brand: "Schwalbe", price: 249, specs: "29x2.35, Addix Soft", size: "29x2.35\"", compound: "Addix Soft" },
    { id: 7, name: "Continental Der Baron", brand: "Continental", price: 259, specs: "29x2.4, BlackChili", size: "29x2.4\"", compound: "BlackChili" },
    { id: 8, name: "Michelin Force AM", brand: "Michelin", price: 239, specs: "29x2.35, Gum-X", size: "29x2.35\"", compound: "Gum-X" },
    { id: 9, name: "Maxxis High Roller II", brand: "Maxxis", price: 269, specs: "29x2.4, EXO+", size: "29x2.4\"", compound: "Dual" },
    { id: 10, name: "Schwalbe Nobby Nic", brand: "Schwalbe", price: 239, specs: "29x2.35, Addix Speed", size: "29x2.35\"", compound: "Addix Speed" },
    { id: 11, name: "Continental Mountain King", brand: "Continental", price: 219, specs: "29x2.4, Protection", size: "29x2.4\"", compound: "BlackChili" },
    { id: 12, name: "Michelin Wild AM", brand: "Michelin", price: 249, specs: "29x2.35, Gum-X", size: "29x2.35\"", compound: "Gum-X" },
    { id: 13, name: "Maxxis Ardent", brand: "Maxxis", price: 219, specs: "29x2.4, EXO", size: "29x2.4\"", compound: "Dual" },
    { id: 14, name: "Schwalbe Rock Razor", brand: "Schwalbe", price: 239, specs: "29x2.35, Addix SpeedGrip", size: "29x2.35\"", compound: "Addix SpeedGrip" },
    { id: 15, name: "Continental Trail King", brand: "Continental", price: 209, specs: "29x2.4, Protection", size: "29x2.4\"", compound: "BlackChili" },
    { id: 16, name: "Michelin Wild Race", brand: "Michelin", price: 269, specs: "29x2.4, Gum-X", size: "29x2.4\"", compound: "Gum-X" },
    { id: 17, name: "Maxxis DHR II", brand: "Maxxis", price: 289, specs: "29x2.4, DoubleDown", size: "29x2.4\"", compound: "3C" },
    { id: 18, name: "Schwalbe Big Betty", brand: "Schwalbe", price: 279, specs: "29x2.4, Super Gravity", size: "29x2.4\"", compound: "Addix Soft" },
    { id: 19, name: "Continental Xynotal", brand: "Continental", price: 269, specs: "29x2.4, Endurance", size: "29x2.4\"", compound: "Endurance" },
    { id: 20, name: "Michelin DH22", brand: "Michelin", price: 319, specs: "29x2.5, Gum-X", size: "29x2.5\"", compound: "Gum-X" },
    { id: 21, name: "Maxxis Shorty", brand: "Maxxis", price: 299, specs: "29x2.5, Downhill", size: "29x2.5\"", compound: "3C" },
    { id: 22, name: "Schwalbe Fat Albert", brand: "Schwalbe", price: 259, specs: "29x2.6, Addix Soft", size: "29x2.6\"", compound: "Addix Soft" },
    { id: 23, name: "Continental Argotal", brand: "Continental", price: 279, specs: "29x2.6, Endurance", size: "29x2.6\"", compound: "Endurance" },
    { id: 24, name: "Michelin Wild Grip'R", brand: "Michelin", price: 259, specs: "29x2.6, Gum-X", size: "29x2.6\"", compound: "Gum-X" },
    { id: 25, name: "Maxxis Rekon", brand: "Maxxis", price: 229, specs: "29x2.4, EXO", size: "29x2.4\"", compound: "Dual" },
    { id: 26, name: "Schwalbe Racing Ralph", brand: "Schwalbe", price: 219, specs: "29x2.25, Addix Speed", size: "29x2.25\"", compound: "Addix Speed" },
    { id: 27, name: "Continental Cross King", brand: "Continental", price: 209, specs: "29x2.3, Protection", size: "29x2.3\"", compound: "BlackChili" },
    { id: 28, name: "Michelin Jet XCR", brand: "Michelin", price: 219, specs: "29x2.35, Gum-X", size: "29x2.35\"", compound: "Gum-X" },
    { id: 29, name: "Maxxis Ikon", brand: "Maxxis", price: 219, specs: "29x2.35, EXO", size: "29x2.35\"", compound: "Dual" },
    { id: 30, name: "Schwalbe Thunder Burt", brand: "Schwalbe", price: 199, specs: "29x2.1, Addix Speed", size: "29x2.1\"", compound: "Addix Speed" },
    { id: 31, name: "Continental Race King", brand: "Continental", price: 199, specs: "29x2.2, Protection", size: "29x2.2\"", compound: "BlackChili" },
    { id: 32, name: "Michelin Wild XC", brand: "Michelin", price: 219, specs: "29x2.25, Gum-X", size: "29x2.25\"", compound: "Gum-X" },
    { id: 33, name: "Maxxis Crossmark", brand: "Maxxis", price: 189, specs: "29x2.25, EXO", size: "29x2.25\"", compound: "Dual" },
    { id: 34, name: "Schwalbe Rocket Ron", brand: "Schwalbe", price: 239, specs: "29x2.25, Addix SpeedGrip", size: "29x2.25\"", compound: "Addix SpeedGrip" },
    { id: 35, name: "Continental Ruban", brand: "Continental", price: 259, specs: "29x2.4, Endurance", size: "29x2.4\"", compound: "Endurance" },
    { id: 36, name: "Michelin Power All Terrain", brand: "Michelin", price: 249, specs: "29x2.4, Gum-X", size: "29x2.4\"", compound: "Gum-X" },
    { id: 37, name: "Maxxis Forekaster", brand: "Maxxis", price: 249, specs: "29x2.35, EXO", size: "29x2.35\"", compound: "Dual" },
    { id: 38, name: "Schwalbe Wicked Will", brand: "Schwalbe", price: 269, specs: "29x2.4, Addix Soft", size: "29x2.4\"", compound: "Addix Soft" },
    { id: 39, name: "Continental Hydrotal", brand: "Continental", price: 279, specs: "29x2.4, Endurance", size: "29x2.4\"", compound: "Endurance" },
    { id: 40, name: "Michelin Wild Mud", brand: "Michelin", price: 259, specs: "29x2.4, Gum-X", size: "29x2.4\"", compound: "Gum-X" },
    { id: 41, name: "Maxxis Aggressor", brand: "Maxxis", price: 289, specs: "29x2.5, DoubleDown", size: "29x2.5\"", compound: "3C" },
    { id: 42, name: "Schwalbe Dirty Dan", brand: "Schwalbe", price: 299, specs: "29x2.5, Super Gravity", size: "29x2.5\"", compound: "Addix Soft" },
    { id: 43, name: "Continental Mud King", brand: "Continental", price: 269, specs: "29x2.4, BlackChili", size: "29x2.4\"", compound: "BlackChili" },
    { id: 44, name: "Michelin Wild Rock'R", brand: "Michelin", price: 279, specs: "29x2.5, Gum-X", size: "29x2.5\"", compound: "Gum-X" },
    { id: 45, name: "Maxxis Tomahawk", brand: "Maxxis", price: 259, specs: "29x2.4, EXO+", size: "29x2.4\"", compound: "3C" },
    { id: 46, name: "Schwalbe G-One", brand: "Schwalbe", price: 229, specs: "29x2.35, Addix SpeedGrip", size: "29x2.35\"", compound: "Addix SpeedGrip" },
    { id: 47, name: "Continental Terra Trail", brand: "Continental", price: 239, specs: "29x2.4, BlackChili", size: "29x2.4\"", compound: "BlackChili" },
    { id: 48, name: "Michelin Power Gravel", brand: "Michelin", price: 229, specs: "29x2.3, Gum-X", size: "29x2.3\"", compound: "Gum-X" },
    { id: 49, name: "Maxxis Pace", brand: "Maxxis", price: 209, specs: "29x2.25, EXO", size: "29x2.25\"", compound: "Dual" },
    { id: 50, name: "Schwalbe Marathon", brand: "Schwalbe", price: 199, specs: "29x2.0, Addix", size: "29x2.0\"", compound: "Addix" }
],
rims: [
    { id: 1, name: "DT Swiss EX 511", brand: "DT Swiss", price: 1150, specs: "29\", 30mm szerokości obręczy, aluminium", size: "29\"", width: "30mm", material: "Aluminium" },
    { id: 2, name: "Stan's NoTubes Flow MK4", brand: "Stan's NoTubes", price: 1050, specs: "29\", 30mm szerokości, aluminium", size: "29\"", width: "30mm", material: "Aluminium" },
    { id: 3, name: "RaceFace ARC HD 30", brand: "RaceFace", price: 1250, specs: "29\", 30mm, aluminium", size: "29\"", width: "30mm", material: "Aluminium" },
    { id: 4, name: "ENVE M730", brand: "ENVE", price: 4800, specs: "29\", 30mm, carbon", size: "29\"", width: "30mm", material: "Carbon" },
    { id: 5, name: "DT Swiss XM 481", brand: "DT Swiss", price: 1100, specs: "29\", 25mm, aluminium", size: "29\"", width: "25mm", material: "Aluminium" },
    { id: 6, name: "Stan's NoTubes Arch MK4", brand: "Stan's NoTubes", price: 990, specs: "29\", 25mm, aluminium", size: "29\"", width: "25mm", material: "Aluminium" },
    { id: 7, name: "RaceFace AR 30", brand: "RaceFace", price: 1150, specs: "29\", 30mm, aluminium", size: "29\"", width: "30mm", material: "Aluminium" },
    { id: 8, name: "ENVE M525", brand: "ENVE", price: 4600, specs: "27.5\", 30mm, carbon", size: "27.5\"", width: "30mm", material: "Carbon" },
    { id: 9, name: "DT Swiss FR 541", brand: "DT Swiss", price: 1200, specs: "29\", 35mm, aluminium", size: "29\"", width: "35mm", material: "Aluminium" },
    { id: 10, name: "Stan's NoTubes Baron MK4", brand: "Stan's NoTubes", price: 1120, specs: "29\", 35mm, aluminium", size: "29\"", width: "35mm", material: "Aluminium" },
    { id: 11, name: "RaceFace Vault", brand: "RaceFace", price: 1350, specs: "29\", 30mm, aluminium", size: "29\"", width: "30mm", material: "Aluminium" },
    { id: 12, name: "ENVE M630", brand: "ENVE", price: 5000, specs: "29\", 30mm, carbon", size: "29\"", width: "30mm", material: "Carbon" },
    { id: 13, name: "DT Swiss XRC 1501", brand: "DT Swiss", price: 2550, specs: "29\", 25mm, carbon", size: "29\"", width: "25mm", material: "Carbon" },
    { id: 14, name: "Stan's NoTubes Flow EX3", brand: "Stan's NoTubes", price: 1180, specs: "29\", 32mm, aluminium", size: "29\"", width: "32mm", material: "Aluminium" },
    { id: 15, name: "RaceFace Next R", brand: "RaceFace", price: 2800, specs: "29\", 30mm, carbon", size: "29\"", width: "30mm", material: "Carbon" },
    { id: 16, name: "ENVE M735", brand: "ENVE", price: 5200, specs: "29\", 35mm, carbon", size: "29\"", width: "35mm", material: "Carbon" },
    { id: 17, name: "DT Swiss HX 531", brand: "DT Swiss", price: 1300, specs: "29\", 31mm, aluminium", size: "29\"", width: "31mm", material: "Aluminium" },
    { id: 18, name: "Stan's NoTubes Sentry MK4", brand: "Stan's NoTubes", price: 1080, specs: "29\", 28mm, aluminium", size: "29\"", width: "28mm", material: "Aluminium" },
    { id: 19, name: "RaceFace Affect", brand: "RaceFace", price: 950, specs: "29\", 28mm, aluminium", size: "29\"", width: "28mm", material: "Aluminium" },
    { id: 20, name: "ENVE M930", brand: "ENVE", price: 5500, specs: "29\", 30mm, carbon", size: "29\"", width: "30mm", material: "Carbon" },
    { id: 21, name: "DT Swiss EX 471", brand: "DT Swiss", price: 1150, specs: "27.5\", 30mm, aluminium", size: "27.5\"", width: "30mm", material: "Aluminium" },
    { id: 22, name: "Stan's NoTubes Flow MK3", brand: "Stan's NoTubes", price: 1020, specs: "27.5\", 30mm, aluminium", size: "27.5\"", width: "30mm", material: "Aluminium" },
    { id: 23, name: "RaceFace ARC 27", brand: "RaceFace", price: 1080, specs: "27.5\", 30mm, aluminium", size: "27.5\"", width: "30mm", material: "Aluminium" },
    { id: 24, name: "ENVE M725", brand: "ENVE", price: 4700, specs: "27.5\", 25mm, carbon", size: "27.5\"", width: "25mm", material: "Carbon" },
    { id: 25, name: "DT Swiss XM 421", brand: "DT Swiss", price: 1080, specs: "27.5\", 25mm, aluminium", size: "27.5\"", width: "25mm", material: "Aluminium" },
    { id: 26, name: "Stan's NoTubes Arch MK3", brand: "Stan's NoTubes", price: 960, specs: "27.5\", 25mm, aluminium", size: "27.5\"", width: "25mm", material: "Aluminium" },
    { id: 27, name: "RaceFace AR 27", brand: "RaceFace", price: 1020, specs: "27.5\", 27mm, aluminium", size: "27.5\"", width: "27mm", material: "Aluminium" },
    { id: 28, name: "ENVE M625", brand: "ENVE", price: 4500, specs: "27.5\", 25mm, carbon", size: "27.5\"", width: "25mm", material: "Carbon" },
    { id: 29, name: "DT Swiss FR 441", brand: "DT Swiss", price: 1180, specs: "27.5\", 35mm, aluminium", size: "27.5\"", width: "35mm", material: "Aluminium" },
    { id: 30, name: "Stan's NoTubes Baron MK3", brand: "Stan's NoTubes", price: 1040, specs: "27.5\", 35mm, aluminium", size: "27.5\"", width: "35mm", material: "Aluminium" },
    { id: 31, name: "RaceFace Vault 27", brand: "RaceFace", price: 1200, specs: "27.5\", 30mm, aluminium", size: "27.5\"", width: "30mm", material: "Aluminium" },
    { id: 32, name: "ENVE M635", brand: "ENVE", price: 5000, specs: "27.5\", 30mm, carbon", size: "27.5\"", width: "30mm", material: "Carbon" },
    { id: 33, name: "DT Swiss XRC 1201", brand: "DT Swiss", price: 2500, specs: "27.5\", 25mm, carbon", size: "27.5\"", width: "25mm", material: "Carbon" },
    { id: 34, name: "Stan's NoTubes Flow EX3 27", brand: "Stan's NoTubes", price: 1100, specs: "27.5\", 32mm, aluminium", size: "27.5\"", width: "32mm", material: "Aluminium" },
    { id: 35, name: "RaceFace Next R 27", brand: "RaceFace", price: 2700, specs: "27.5\", 30mm, carbon", size: "27.5\"", width: "30mm", material: "Carbon" },
    { id: 36, name: "ENVE M735 27", brand: "ENVE", price: 5100, specs: "27.5\", 35mm, carbon", size: "27.5\"", width: "35mm", material: "Carbon" },
    { id: 37, name: "DT Swiss HX 431", brand: "DT Swiss", price: 1250, specs: "27.5\", 31mm, aluminium", size: "27.5\"", width: "31mm", material: "Aluminium" },
    { id: 38, name: "Stan's NoTubes Sentry MK3", brand: "Stan's NoTubes", price: 980, specs: "27.5\", 28mm, aluminium", size: "27.5\"", width: "28mm", material: "Aluminium" },
    { id: 39, name: "RaceFace Affect 27", brand: "RaceFace", price: 900, specs: "27.5\", 28mm, aluminium", size: "27.5\"", width: "28mm", material: "Aluminium" },
    { id: 40, name: "ENVE M935", brand: "ENVE", price: 5300, specs: "27.5\", 30mm, carbon", size: "27.5\"", width: "30mm", material: "Carbon" },
    { id: 41, name: "DT Swiss XM 1501", brand: "DT Swiss", price: 2600, specs: "29\", 30mm, carbon", size: "29\"", width: "30mm", material: "Carbon" },
    { id: 42, name: "Stan's NoTubes Crest MK4", brand: "Stan's NoTubes", price: 920, specs: "29\", 25mm, aluminium", size: "29\"", width: "25mm", material: "Aluminium" },
    { id: 43, name: "RaceFace ARC 40", brand: "RaceFace", price: 1350, specs: "29\", 40mm, aluminium", size: "29\"", width: "40mm", material: "Aluminium" },
    { id: 44, name: "ENVE M740", brand: "ENVE", price: 5400, specs: "29\", 40mm, carbon", size: "29\"", width: "40mm", material: "Carbon" },
    { id: 45, name: "DT Swiss EX 1700", brand: "DT Swiss", price: 1400, specs: "29\", 30mm, aluminium", size: "29\"", width: "30mm", material: "Aluminium" },
    { id: 46, name: "Stan's NoTubes Flow D", brand: "Stan's NoTubes", price: 1320, specs: "29\", 32mm, aluminium", size: "29\"", width: "32mm", material: "Aluminium" },
    { id: 47, name: "RaceFace AR 40", brand: "RaceFace", price: 1420, specs: "29\", 40mm, aluminium", size: "29\"", width: "40mm", material: "Aluminium" },
    { id: 48, name: "ENVE M840", brand: "ENVE", price: 5800, specs: "29\", 40mm, carbon", size: "29\"", width: "40mm", material: "Carbon" },
    { id: 49, name: "DT Swiss XR 1501", brand: "DT Swiss", price: 2700, specs: "29\", 25mm, carbon", size: "29\"", width: "25mm", material: "Carbon" },
    { id: 50, name: "Stan's NoTubes Flow Pro", brand: "Stan's NoTubes", price: 1250, specs: "29\", 35mm, aluminium", size: "29\"", width: "35mm", material: "Aluminium" }
],
hubs: [
    { id: 1, name: "DT Swiss 350", brand: "DT Swiss", price: 1520, specs: "Centrelock, 36T ratchet, wysokiej klasy zapadka", type: "Centerlock", engagement: "36T" },
    { id: 2, name: "Hope Pro 4", brand: "Hope", price: 1780, specs: "Centrelock, 44T pawls, precyzyjne łożyska", type: "Centerlock", engagement: "44T" },
    { id: 3, name: "Industry Nine Hydra", brand: "Industry Nine", price: 2890, specs: "6-pawls, 690 points, ultraszybkie załączanie", type: "Centerlock", engagement: "690 points" },
    { id: 4, name: "Shimano XT M8120", brand: "Shimano", price: 1220, specs: "Centrelock, Micro Spline, kompatybilność Shimano", type: "Centerlock", engagement: "Standard" },
    { id: 5, name: "DT Swiss 240", brand: "DT Swiss", price: 2250, specs: "Centrelock, 36T ratchet, precyzyjne łożyska", type: "Centerlock", engagement: "36T" },
    { id: 6, name: "Hope Pro 5", brand: "Hope", price: 1900, specs: "Centrelock, 44T pawls, trwałe łożyska", type: "Centerlock", engagement: "44T" },
    { id: 7, name: "Industry Nine 1/1", brand: "Industry Nine", price: 2700, specs: "3-pawls, 90 points, mocna konstrukcja", type: "Centerlock", engagement: "90 points" },
    { id: 8, name: "Shimano XTR M9100", brand: "Shimano", price: 1750, specs: "Centrelock, Micro Spline, precyzyjna praca", type: "Centerlock", engagement: "Standard" },
    { id: 9, name: "DT Swiss 180", brand: "DT Swiss", price: 2400, specs: "Centrelock, 54T ratchet, szybkie załączanie", type: "Centerlock", engagement: "54T" },
    { id: 10, name: "Hope Fortus", brand: "Hope", price: 1950, specs: "Centrelock, 44T pawls, odporne na błoto", type: "Centerlock", engagement: "44T" },
    { id: 11, name: "Industry Nine Torch", brand: "Industry Nine", price: 3050, specs: "6-pawls, 690 points, wysoka sztywność", type: "Centerlock", engagement: "690 points" },
    { id: 12, name: "Shimano SLX M7110", brand: "Shimano", price: 1190, specs: "Centrelock, Micro Spline, płynna praca", type: "Centerlock", engagement: "Standard" },
    { id: 13, name: "DT Swiss 370", brand: "DT Swiss", price: 1680, specs: "Centrelock, 18T ratchet, dobra trwałość", type: "Centerlock", engagement: "18T" },
    { id: 14, name: "Hope RS4", brand: "Hope", price: 1600, specs: "Centrelock, 24T pawls, płynne załączanie", type: "Centerlock", engagement: "24T" },
    { id: 15, name: "Industry Nine Enduro", brand: "Industry Nine", price: 2850, specs: "6-pawls, 690 points, idealne pod enduro", type: "Centerlock", engagement: "690 points" },
    { id: 16, name: "Shimano Deore M6100", brand: "Shimano", price: 880, specs: "Centrelock, Micro Spline, budżetowa, trwała", type: "Centerlock", engagement: "Standard" },
    { id: 17, name: "DT Swiss 190", brand: "DT Swiss", price: 2550, specs: "Centrelock, 54T ratchet, szybko załączające się", type: "Centerlock", engagement: "54T" },
    { id: 18, name: "Hope Tech Enduro", brand: "Hope", price: 1950, specs: "Centrelock, 44T pawls, odporne łożyska", type: "Centerlock", engagement: "44T" },
    { id: 19, name: "Industry Nine DH", brand: "Industry Nine", price: 3000, specs: "6-pawls, 690 points, ekstremalna wytrzymałość", type: "Centerlock", engagement: "690 points" },
    { id: 20, name: "Shimano Saint", brand: "Shimano", price: 1420, specs: "Centrelock, 6-bolt, wysoka trwałość", type: "Centerlock", engagement: "Standard" },
    { id: 21, name: "DT Swiss 540", brand: "DT Swiss", price: 1350, specs: "6-bolt, 18T ratchet, dobra trwałość", type: "6-bolt", engagement: "18T" },
    { id: 22, name: "Hope Pro 4 Evo", brand: "Hope", price: 1820, specs: "6-bolt, 44T pawls, płynna praca", type: "6-bolt", engagement: "44T" },
    { id: 23, name: "Industry Nine Trail", brand: "Industry Nine", price: 2650, specs: "6-pawls, 690 points, trailowa piasta", type: "6-bolt", engagement: "690 points" },
    { id: 24, name: "Shimano XT M8000", brand: "Shimano", price: 1240, specs: "6-bolt, Micro Spline, niezawodna praca", type: "6-bolt", engagement: "Standard" },
    { id: 25, name: "DT Swiss 340", brand: "DT Swiss", price: 1580, specs: "6-bolt, 36T ratchet, dobre łożyska", type: "6-bolt", engagement: "36T" },
    { id: 26, name: "Hope Pro 3", brand: "Hope", price: 1470, specs: "6-bolt, 44T pawls, solidna konstrukcja", type: "6-bolt", engagement: "44T" },
    { id: 27, name: "Industry Nine Classic", brand: "Industry Nine", price: 2520, specs: "3-pawls, 90 points, mocna i lekka", type: "6-bolt", engagement: "90 points" },
    { id: 28, name: "Shimano XTR M9000", brand: "Shimano", price: 1380, specs: "6-bolt, Micro Spline, precyzyjna praca", type: "6-bolt", engagement: "Standard" },
    { id: 29, name: "DT Swiss 150", brand: "DT Swiss", price: 2100, specs: "6-bolt, 54T ratchet, szybkie załączanie", type: "6-bolt", engagement: "54T" },
    { id: 30, name: "Hope Pro 2", brand: "Hope", price: 1320, specs: "6-bolt, 24T pawls, kompaktowa piasta", type: "6-bolt", engagement: "24T" },
    { id: 31, name: "Industry Nine Gravel", brand: "Industry Nine", price: 2450, specs: "6-pawls, 690 points, gravelowy model", type: "6-bolt", engagement: "690 points" },
    { id: 32, name: "Shimano SLX M7000", brand: "Shimano", price: 1080, specs: "6-bolt, Micro Spline, płynna praca", type: "6-bolt", engagement: "Standard" },
    { id: 33, name: "DT Swiss 360", brand: "DT Swiss", price: 1620, specs: "6-bolt, 36T ratchet, dobra trwałość", type: "6-bolt", engagement: "36T" },
    { id: 34, name: "Hope RS8", brand: "Hope", price: 1700, specs: "6-bolt, 44T pawls, płynne załączanie", type: "6-bolt", engagement: "44T" },
    { id: 35, name: "Industry Nine XC", brand: "Industry Nine", price: 2720, specs: "6-pawls, 690 points, lekka pod XC", type: "6-bolt", engagement: "690 points" },
    { id: 36, name: "Shimano Deore M6000", brand: "Shimano", price: 880, specs: "6-bolt, Micro Spline, budżetowy model", type: "6-bolt", engagement: "Standard" },
    { id: 37, name: "DT Swiss 170", brand: "DT Swiss", price: 2350, specs: "6-bolt, 54T ratchet, szybkie załączanie", type: "6-bolt", engagement: "54T" },
    { id: 38, name: "Hope Tech XC", brand: "Hope", price: 1680, specs: "6-bolt, 44T pawls, trwałe łożyska", type: "6-bolt", engagement: "44T" },
    { id: 39, name: "Industry Nine Road", brand: "Industry Nine", price: 2650, specs: "6-pawls, 690 points, optymalna pod szosę", type: "6-bolt", engagement: "690 points" },
    { id: 40, name: "Shimano 105", brand: "Shimano", price: 960, specs: "6-bolt, 11-speed kompatybilność", type: "6-bolt", engagement: "Standard" },
    { id: 41, name: "DT Swiss 160", brand: "DT Swiss", price: 2280, specs: "Centerlock, 54T ratchet, szybkie załączanie", type: "Centerlock", engagement: "54T" },
    { id: 42, name: "Hope Road", brand: "Hope", price: 1520, specs: "Centerlock, 44T pawls, precyzyjna praca", type: "Centerlock", engagement: "44T" },
    { id: 43, name: "Industry Nine CX", brand: "Industry Nine", price: 2490, specs: "6-pawls, 690 points, gravelowi klasa", type: "Centerlock", engagement: "690 points" },
    { id: 44, name: "Shimano Ultegra", brand: "Shimano", price: 1310, specs: "Centerlock, 11-speed kompatybilność", type: "Centerlock", engagement: "Standard" },
    { id: 45, name: "DT Swiss 140", brand: "DT Swiss", price: 2190, specs: "Centerlock, 36T ratchet, trwałe łożyska", type: "Centerlock", engagement: "36T" },
    { id: 46, name: "Hope Gravel", brand: "Hope", price: 1480, specs: "Centerlock, 44T pawls, gravelowa piasta", type: "Centerlock", engagement: "44T" },
    { id: 47, name: "Industry Nine MTB", brand: "Industry Nine", price: 2620, specs: "6-pawls, 690 points, MTB klasy premium", type: "Centerlock", engagement: "690 points" },
    { id: 48, name: "Shimano Dura-Ace", brand: "Shimano", price: 1550, specs: "Centerlock, 11-speed kompatybilność, wyższa precyzja", type: "Centerlock", engagement: "Standard" },
    { id: 49, name: "DT Swiss 130", brand: "DT Swiss", price: 2080, specs: "Centerlock, 36T ratchet, dobra trwałość", type: "Centerlock", engagement: "36T" },
    { id: 50, name: "Hope All Mountain", brand: "Hope", price: 1620, specs: "Centerlock, 44T pawls, uniwersalna piasta", type: "Centerlock", engagement: "44T" }
],
handlebar: [
    { id: 1, name: "Renthal FatBar 35", brand: "Renthal", price: 650, specs: "800mm szerokości, 20mm rise, aluminium 7050", width: "800mm", rise: "20mm", material: "Aluminium" },
    { id: 2, name: "RaceFace Turbine R", brand: "RaceFace", price: 580, specs: "800mm szerokości, 20mm rise, aluminium", width: "800mm", rise: "20mm", material: "Aluminium" },
    { id: 3, name: "Spank Spoon 800", brand: "Spank", price: 450, specs: "800mm szerokości, 20mm rise, aluminium", width: "800mm", rise: "20mm", material: "Aluminium" },
    { id: 4, name: "PNW Range Carbon", brand: "PNW", price: 1150, specs: "800mm szerokości, 30mm rise, carbon UD", width: "800mm", rise: "30mm", material: "Carbon" },
    { id: 5, name: "Renthal FatBar Carbon", brand: "Renthal", price: 1300, specs: "800mm szerokości, 20mm rise, carbon", width: "800mm", rise: "20mm", material: "Carbon" },
    { id: 6, name: "RaceFace Next R Carbon", brand: "RaceFace", price: 1100, specs: "800mm szerokości, 20mm rise, carbon", width: "800mm", rise: "20mm", material: "Carbon" },
    { id: 7, name: "Spank Spike 800 Vibrocore", brand: "Spank", price: 780, specs: "800mm szerokości, 20mm rise, aluminium z Vibrocore", width: "800mm", rise: "20mm", material: "Aluminium" },
    { id: 8, name: "PNW Range Alloy", brand: "PNW", price: 600, specs: "800mm szerokości, 30mm rise, aluminium", width: "800mm", rise: "30mm", material: "Aluminium" },
    { id: 9, name: "Renthal FatBar Lite", brand: "Renthal", price: 620, specs: "780mm szerokości, 20mm rise, aluminium 7050", width: "780mm", rise: "20mm", material: "Aluminium" },
    { id: 10, name: "RaceFace Chester", brand: "RaceFace", price: 420, specs: "780mm szerokości, 20mm rise, aluminium", width: "780mm", rise: "20mm", material: "Aluminium" },
    { id: 11, name: "Spank Spoon 780", brand: "Spank", price: 440, specs: "780mm szerokości, 20mm rise, aluminium", width: "780mm", rise: "20mm", material: "Aluminium" },
    { id: 12, name: "PNW Loam Carbon", brand: "PNW", price: 1050, specs: "800mm szerokości, 30mm rise, carbon UD", width: "800mm", rise: "30mm", material: "Carbon" },
    { id: 13, name: "Renthal FatBar 35 820mm", brand: "Renthal", price: 670, specs: "820mm szerokości, 20mm rise, aluminium 7050", width: "820mm", rise: "20mm", material: "Aluminium" },
    { id: 14, name: "RaceFace Turbine 35 820mm", brand: "RaceFace", price: 600, specs: "820mm szerokości, 20mm rise, aluminium", width: "820mm", rise: "20mm", material: "Aluminium" },
    { id: 15, name: "Spank Spoon 820", brand: "Spank", price: 480, specs: "820mm szerokości, 20mm rise, aluminium", width: "820mm", rise: "20mm", material: "Aluminium" },
    { id: 16, name: "PNW Range 820 Carbon", brand: "PNW", price: 1180, specs: "820mm szerokości, 30mm rise, carbon UD", width: "820mm", rise: "30mm", material: "Carbon" },
    { id: 17, name: "Renthal FatBar 35 40mm", brand: "Renthal", price: 700, specs: "800mm szerokości, 40mm rise, aluminium 7050", width: "800mm", rise: "40mm", material: "Aluminium" },
    { id: 18, name: "RaceFace Turbine 35 40mm", brand: "RaceFace", price: 630, specs: "800mm szerokości, 40mm rise, aluminium", width: "800mm", rise: "40mm", material: "Aluminium" },
    { id: 19, name: "Spank Spoon 800 40mm", brand: "Spank", price: 550, specs: "800mm szerokości, 40mm rise, aluminium", width: "800mm", rise: "40mm", material: "Aluminium" },
    { id: 20, name: "PNW Range 40mm Carbon", brand: "PNW", price: 1200, specs: "800mm szerokości, 40mm rise, carbon UD", width: "800mm", rise: "40mm", material: "Carbon" },
    { id: 21, name: "Renthal FatBar 31.8", brand: "Renthal", price: 610, specs: "800mm szerokości, 20mm rise, aluminium 7050", width: "800mm", rise: "20mm", material: "Aluminium" },
    { id: 22, name: "RaceFace Turbine 31.8", brand: "RaceFace", price: 530, specs: "800mm szerokości, 20mm rise, aluminium", width: "800mm", rise: "20mm", material: "Aluminium" },
    { id: 23, name: "Spank Spoon 31.8", brand: "Spank", price: 470, specs: "800mm szerokości, 20mm rise, aluminium", width: "800mm", rise: "20mm", material: "Aluminium" },
    { id: 24, name: "PNW Range 31.8 Carbon", brand: "PNW", price: 980, specs: "800mm szerokości, 30mm rise, carbon UD", width: "800mm", rise: "30mm", material: "Carbon" },
    { id: 25, name: "Renthal FatBar 35 760mm", brand: "Renthal", price: 630, specs: "760mm szerokości, 20mm rise, aluminium 7050", width: "760mm", rise: "20mm", material: "Aluminium" },
    { id: 26, name: "RaceFace Turbine 35 760mm", brand: "RaceFace", price: 560, specs: "760mm szerokości, 20mm rise, aluminium", width: "760mm", rise: "20mm", material: "Aluminium" },
    { id: 27, name: "Spank Spoon 760", brand: "Spank", price: 490, specs: "760mm szerokości, 20mm rise, aluminium", width: "760mm", rise: "20mm", material: "Aluminium" },
    { id: 28, name: "PNW Range 760 Carbon", brand: "PNW", price: 1020, specs: "760mm szerokości, 30mm rise, carbon UD", width: "760mm", rise: "30mm", material: "Carbon" },
    { id: 29, name: "Renthal FatBar 35 0mm", brand: "Renthal", price: 640, specs: "800mm szerokości, 0mm rise, aluminium 7050", width: "800mm", rise: "0mm", material: "Aluminium" },
    { id: 30, name: "RaceFace Turbine 35 0mm", brand: "RaceFace", price: 580, specs: "800mm szerokości, 0mm rise, aluminium", width: "800mm", rise: "0mm", material: "Aluminium" },
    { id: 31, name: "Spank Spoon 800 0mm", brand: "Spank", price: 500, specs: "800mm szerokości, 0mm rise, aluminium", width: "800mm", rise: "0mm", material: "Aluminium" },
    { id: 32, name: "PNW Range 0mm Carbon", brand: "PNW", price: 1080, specs: "800mm szerokości, 0mm rise, carbon UD", width: "800mm", rise: "0mm", material: "Carbon" },
    { id: 33, name: "Renthal FatBar 35 10mm", brand: "Renthal", price: 650, specs: "800mm szerokości, 10mm rise, aluminium 7050", width: "800mm", rise: "10mm", material: "Aluminium" },
    { id: 34, name: "RaceFace Turbine 35 10mm", brand: "RaceFace", price: 580, specs: "800mm szerokości, 10mm rise, aluminium", width: "800mm", rise: "10mm", material: "Aluminium" },
    { id: 35, name: "Spank Spoon 800 10mm", brand: "Spank", price: 500, specs: "800mm szerokości, 10mm rise, aluminium", width: "800mm", rise: "10mm", material: "Aluminium" },
    { id: 36, name: "PNW Range 10mm Carbon", brand: "PNW", price: 1090, specs: "800mm szerokości, 10mm rise, carbon UD", width: "800mm", rise: "10mm", material: "Carbon" },
    { id: 37, name: "Renthal FatBar 35 5mm", brand: "Renthal", price: 645, specs: "800mm szerokości, 5mm rise, aluminium 7050", width: "800mm", rise: "5mm", material: "Aluminium" },
    { id: 38, name: "RaceFace Turbine 35 5mm", brand: "RaceFace", price: 575, specs: "800mm szerokości, 5mm rise, aluminium", width: "800mm", rise: "5mm", material: "Aluminium" },
    { id: 39, name: "Spank Spoon 800 5mm", brand: "Spank", price: 495, specs: "800mm szerokości, 5mm rise, aluminium", width: "800mm", rise: "5mm", material: "Aluminium" },
    { id: 40, name: "PNW Range 5mm Carbon", brand: "PNW", price: 1085, specs: "800mm szerokości, 5mm rise, carbon UD", width: "800mm", rise: "5mm", material: "Carbon" },
    { id: 41, name: "Renthal FatBar 35 15mm", brand: "Renthal", price: 655, specs: "800mm szerokości, 15mm rise, aluminium 7050", width: "800mm", rise: "15mm", material: "Aluminium" },
    { id: 42, name: "RaceFace Turbine 35 15mm", brand: "RaceFace", price: 585, specs: "800mm szerokości, 15mm rise, aluminium", width: "800mm", rise: "15mm", material: "Aluminium" },
    { id: 43, name: "Spank Spoon 800 15mm", brand: "Spank", price: 505, specs: "800mm szerokości, 15mm rise, aluminium", width: "800mm", rise: "15mm", material: "Aluminium" },
    { id: 44, name: "PNW Range 15mm Carbon", brand: "PNW", price: 1100, specs: "800mm szerokości, 15mm rise, carbon UD", width: "800mm", rise: "15mm", material: "Carbon" },
    { id: 45, name: "Renthal FatBar 35 25mm", brand: "Renthal", price: 675, specs: "800mm szerokości, 25mm rise, aluminium 7050", width: "800mm", rise: "25mm", material: "Aluminium" },
    { id: 46, name: "RaceFace Turbine 35 25mm", brand: "RaceFace", price: 605, specs: "800mm szerokości, 25mm rise, aluminium", width: "800mm", rise: "25mm", material: "Aluminium" },
    { id: 47, name: "Spank Spoon 800 25mm", brand: "Spank", price: 525, specs: "800mm szerokości, 25mm rise, aluminium", width: "800mm", rise: "25mm", material: "Aluminium" },
    { id: 48, name: "PNW Range 25mm Carbon", brand: "PNW", price: 1120, specs: "800mm szerokości, 25mm rise, carbon UD", width: "800mm", rise: "25mm", material: "Carbon" },
    { id: 49, name: "Renthal FatBar 35 35mm", brand: "Renthal", price: 695, specs: "800mm szerokości, 35mm rise, aluminium 7050", width: "800mm", rise: "35mm", material: "Aluminium" },
    { id: 50, name: "RaceFace Turbine 35 35mm", brand: "RaceFace", price: 620, specs: "800mm szerokości, 35mm rise, aluminium", width: "800mm", rise: "35mm", material: "Aluminium" }
],
stem: [
    { id: 1, name: "Renthal Apex 35", brand: "Renthal", price: 480, specs: "35mm clamp, 50mm długości, aluminium 7050", length: "50mm", material: "Aluminium" },
    { id: 2, name: "RaceFace Turbine 35", brand: "RaceFace", price: 430, specs: "35mm clamp, 50mm długości, aluminium", length: "50mm", material: "Aluminium" },
    { id: 3, name: "Spank Spike 35", brand: "Spank", price: 380, specs: "35mm clamp, 50mm długości, aluminium", length: "50mm", material: "Aluminium" },
    { id: 4, name: "Deity Copperhead 35", brand: "Deity", price: 500, specs: "35mm clamp, 50mm długości, aluminium", length: "50mm", material: "Aluminium" },
    { id: 5, name: "Renthal Apex 31.8", brand: "Renthal", price: 460, specs: "31.8mm clamp, 50mm długości, aluminium 7050", length: "50mm", material: "Aluminium" },
    { id: 6, name: "RaceFace Turbine 31.8", brand: "RaceFace", price: 410, specs: "31.8mm clamp, 50mm długości, aluminium", length: "50mm", material: "Aluminium" },
    { id: 7, name: "Spank Spike 31.8", brand: "Spank", price: 370, specs: "31.8mm clamp, 50mm długości, aluminium", length: "50mm", material: "Aluminium" },
    { id: 8, name: "Deity Copperhead 31.8", brand: "Deity", price: 490, specs: "31.8mm clamp, 50mm długości, aluminium", length: "50mm", material: "Aluminium" },
    { id: 9, name: "Renthal Apex 35 40mm", brand: "Renthal", price: 485, specs: "35mm clamp, 40mm długości, aluminium 7050", length: "40mm", material: "Aluminium" },
    { id: 10, name: "RaceFace Turbine 35 40mm", brand: "RaceFace", price: 435, specs: "35mm clamp, 40mm długości, aluminium", length: "40mm", material: "Aluminium" },
    { id: 11, name: "Spank Spike 35 40mm", brand: "Spank", price: 385, specs: "35mm clamp, 40mm długości, aluminium", length: "40mm", material: "Aluminium" },
    { id: 12, name: "Deity Copperhead 35 40mm", brand: "Deity", price: 505, specs: "35mm clamp, 40mm długości, aluminium", length: "40mm", material: "Aluminium" },
    { id: 13, name: "Renthal Apex 31.8 40mm", brand: "Renthal", price: 465, specs: "31.8mm clamp, 40mm długości, aluminium", length: "40mm", material: "Aluminium" },
    { id: 14, name: "RaceFace Turbine 31.8 40mm", brand: "RaceFace", price: 415, specs: "31.8mm clamp, 40mm długości, aluminium", length: "40mm", material: "Aluminium" },
    { id: 15, name: "Spank Spike 31.8 40mm", brand: "Spank", price: 375, specs: "31.8mm clamp, 40mm długości, aluminium", length: "40mm", material: "Aluminium" },
    { id: 16, name: "Deity Copperhead 31.8 40mm", brand: "Deity", price: 495, specs: "31.8mm clamp, 40mm długości, aluminium", length: "40mm", material: "Aluminium" },
    { id: 17, name: "Renthal Apex 35 60mm", brand: "Renthal", price: 490, specs: "35mm clamp, 60mm długości, aluminium 7050", length: "60mm", material: "Aluminium" },
    { id: 18, name: "RaceFace Turbine 35 60mm", brand: "RaceFace", price: 440, specs: "35mm clamp, 60mm długości, aluminium", length: "60mm", material: "Aluminium" },
    { id: 19, name: "Spank Spike 35 60mm", brand: "Spank", price: 390, specs: "35mm clamp, 60mm długości, aluminium", length: "60mm", material: "Aluminium" },
    { id: 20, name: "Deity Copperhead 35 60mm", brand: "Deity", price: 510, specs: "35mm clamp, 60mm długości, aluminium", length: "60mm", material: "Aluminium" },
    { id: 21, name: "Renthal Apex 31.8 60mm", brand: "Renthal", price: 470, specs: "31.8mm clamp, 60mm długości, aluminium", length: "60mm", material: "Aluminium" },
    { id: 22, name: "RaceFace Turbine 31.8 60mm", brand: "RaceFace", price: 420, specs: "31.8mm clamp, 60mm długości, aluminium", length: "60mm", material: "Aluminium" },
    { id: 23, name: "Spank Spike 31.8 60mm", brand: "Spank", price: 380, specs: "31.8mm clamp, 60mm długości, aluminium", length: "60mm", material: "Aluminium" },
    { id: 24, name: "Deity Copperhead 31.8 60mm", brand: "Deity", price: 500, specs: "31.8mm clamp, 60mm długości, aluminium", length: "60mm", material: "Aluminium" },
    { id: 25, name: "Renthal Apex 35 70mm", brand: "Renthal", price: 495, specs: "35mm clamp, 70mm długości, aluminium 7050", length: "70mm", material: "Aluminium" },
    { id: 26, name: "RaceFace Turbine 35 70mm", brand: "RaceFace", price: 445, specs: "35mm clamp, 70mm długości, aluminium", length: "70mm", material: "Aluminium" },
    { id: 27, name: "Spank Spike 35 70mm", brand: "Spank", price: 395, specs: "35mm clamp, 70mm długości, aluminium", length: "70mm", material: "Aluminium" },
    { id: 28, name: "Deity Copperhead 35 70mm", brand: "Deity", price: 515, specs: "35mm clamp, 70mm długości, aluminium", length: "70mm", material: "Aluminium" },
    { id: 29, name: "Renthal Apex 31.8 70mm", brand: "Renthal", price: 475, specs: "31.8mm clamp, 70mm długości, aluminium", length: "70mm", material: "Aluminium" },
    { id: 30, name: "RaceFace Turbine 31.8 70mm", brand: "RaceFace", price: 425, specs: "31.8mm clamp, 70mm długości, aluminium", length: "70mm", material: "Aluminium" },
    { id: 31, name: "Spank Spike 31.8 70mm", brand: "Spank", price: 385, specs: "31.8mm clamp, 70mm długości, aluminium", length: "70mm", material: "Aluminium" },
    { id: 32, name: "Deity Copperhead 31.8 70mm", brand: "Deity", price: 505, specs: "31.8mm clamp, 70mm długości, aluminium", length: "70mm", material: "Aluminium" },
    { id: 33, name: "Renthal Apex 35 80mm", brand: "Renthal", price: 500, specs: "35mm clamp, 80mm długości, aluminium 7050", length: "80mm", material: "Aluminium" },
    { id: 34, name: "RaceFace Turbine 35 80mm", brand: "RaceFace", price: 450, specs: "35mm clamp, 80mm długości, aluminium", length: "80mm", material: "Aluminium" },
    { id: 35, name: "Spank Spike 35 80mm", brand: "Spank", price: 400, specs: "35mm clamp, 80mm długości, aluminium", length: "80mm", material: "Aluminium" },
    { id: 36, name: "Deity Copperhead 35 80mm", brand: "Deity", price: 520, specs: "35mm clamp, 80mm długości, aluminium", length: "80mm", material: "Aluminium" },
    { id: 37, name: "Renthal Apex 31.8 80mm", brand: "Renthal", price: 480, specs: "31.8mm clamp, 80mm długości, aluminium", length: "80mm", material: "Aluminium" },
    { id: 38, name: "RaceFace Turbine 31.8 80mm", brand: "RaceFace", price: 430, specs: "31.8mm clamp, 80mm długości, aluminium", length: "80mm", material: "Aluminium" },
    { id: 39, name: "Spank Spike 31.8 80mm", brand: "Spank", price: 390, specs: "31.8mm clamp, 80mm długości, aluminium", length: "80mm", material: "Aluminium" },
    { id: 40, name: "Deity Copperhead 31.8 80mm", brand: "Deity", price: 510, specs: "31.8mm clamp, 80mm długości, aluminium", length: "80mm", material: "Aluminium" },
    { id: 41, name: "Renthal Apex 35 90mm", brand: "Renthal", price: 505, specs: "35mm clamp, 90mm długości, aluminium 7050", length: "90mm", material: "Aluminium" },
    { id: 42, name: "RaceFace Turbine 35 90mm", brand: "RaceFace", price: 455, specs: "35mm clamp, 90mm długości, aluminium", length: "90mm", material: "Aluminium" },
    { id: 43, name: "Spank Spike 35 90mm", brand: "Spank", price: 405, specs: "35mm clamp, 90mm długości, aluminium", length: "90mm", material: "Aluminium" },
    { id: 44, name: "Deity Copperhead 35 90mm", brand: "Deity", price: 525, specs: "35mm clamp, 90mm długości, aluminium", length: "90mm", material: "Aluminium" },
    { id: 45, name: "Renthal Apex 31.8 90mm", brand: "Renthal", price: 485, specs: "31.8mm clamp, 90mm długości, aluminium", length: "90mm", material: "Aluminium" },
    { id: 46, name: "RaceFace Turbine 31.8 90mm", brand: "RaceFace", price: 435, specs: "31.8mm clamp, 90mm długości, aluminium", length: "90mm", material: "Aluminium" },
    { id: 47, name: "Spank Spike 31.8 90mm", brand: "Spank", price: 395, specs: "31.8mm clamp, 90mm długości, aluminium", length: "90mm", material: "Aluminium" },
    { id: 48, name: "Deity Copperhead 31.8 90mm", brand: "Deity", price: 515, specs: "31.8mm clamp, 90mm długości, aluminium", length: "90mm", material: "Aluminium" },
    { id: 49, name: "Renthal Apex 35 100mm", brand: "Renthal", price: 510, specs: "35mm clamp, 100mm długości, aluminium 7050", length: "100mm", material: "Aluminium" },
    { id: 50, name: "RaceFace Turbine 35 100mm", brand: "RaceFace", price: 460, specs: "35mm clamp, 100mm długości, aluminium", length: "100mm", material: "Aluminium" }
],
grips: [
    { id: 1, name: "ODI Elite Pro", brand: "ODI", price: 129, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Kraton" },
    { id: 2, name: "Deity Knuckleduster", brand: "Deity", price: 149, specs: "Lock-on, 133mm", type: "Lock-on", length: "133mm", material: "TRC+" },
    { id: 3, name: "Renthal Kevlar", brand: "Renthal", price: 139, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Kevlar compound" },
    { id: 4, name: "SQLab 711", brand: "SQLab", price: 169, specs: "Ergonomic, 120mm", type: "Ergonomic", length: "120mm", material: "Rubber" },
    { id: 5, name: "ODI Ruffian", brand: "ODI", price: 119, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 6, name: "Deity Supracush", brand: "Deity", price: 139, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 7, name: "Renthal Ultra Tacky", brand: "Renthal", price: 149, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Ultra Tacky Rubber" },
    { id: 8, name: "SQLab 701", brand: "SQLab", price: 159, specs: "Ergonomic, 110mm", type: "Ergonomic", length: "110mm", material: "Rubber" },
    { id: 9, name: "ODI Longneck", brand: "ODI", price: 109, specs: "Lock-on, 135mm", type: "Lock-on", length: "135mm", material: "Rubber" },
    { id: 10, name: "Deity Lockjaw", brand: "Deity", price: 159, specs: "Lock-on, 133mm", type: "Lock-on", length: "133mm", material: "TRC+" },
    { id: 11, name: "Renthal Diamond", brand: "Renthal", price: 129, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 12, name: "SQLab 721", brand: "SQLab", price: 189, specs: "Ergonomic, 130mm", type: "Ergonomic", length: "130mm", material: "Rubber" },
    { id: 13, name: "ODI Yeti", brand: "ODI", price: 119, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 14, name: "Deity TLD", brand: "Deity", price: 169, specs: "Lock-on, 133mm", type: "Lock-on", length: "133mm", material: "TRC+" },
    { id: 15, name: "Renthal Half Waffle", brand: "Renthal", price: 129, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 16, name: "SQLab 711 Active", brand: "SQLab", price: 199, specs: "Ergonomic, 120mm", type: "Ergonomic", length: "120mm", material: "Rubber" },
    { id: 17, name: "ODI Vans", brand: "ODI", price: 139, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 18, name: "Deity Black Kat", brand: "Deity", price: 149, specs: "Lock-on, 133mm", type: "Lock-on", length: "133mm", material: "TRC+" },
    { id: 19, name: "Renthal Dual Compound", brand: "Renthal", price: 119, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Dual Compound" },
    { id: 20, name: "SQLab 701 Active", brand: "SQLab", price: 179, specs: "Ergonomic, 110mm", type: "Ergonomic", length: "110mm", material: "Rubber" },
    { id: 21, name: "ODI Troy Lee", brand: "ODI", price: 129, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 22, name: "Deity Speedway", brand: "Deity", price: 139, specs: "Lock-on, 133mm", type: "Lock-on", length: "133mm", material: "Rubber" },
    { id: 23, name: "Renthal Foam", brand: "Renthal", price: 89, specs: "Slip-on, 130mm", type: "Slip-on", length: "130mm", material: "Foam" },
    { id: 24, name: "SQLab 731", brand: "SQLab", price: 209, specs: "Ergonomic, 140mm", type: "Ergonomic", length: "140mm", material: "Rubber" },
    { id: 25, name: "ODI X-Treme", brand: "ODI", price: 119, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 26, name: "Deity Compound", brand: "Deity", price: 129, specs: "Lock-on, 133mm", type: "Lock-on", length: "133mm", material: "TRC+" },
    { id: 27, name: "Renthal Traction", brand: "Renthal", price: 139, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 28, name: "SQLab 741", brand: "SQLab", price: 229, specs: "Ergonomic, 150mm", type: "Ergonomic", length: "150mm", material: "Rubber" },
    { id: 29, name: "ODI Podium", brand: "ODI", price: 149, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 30, name: "Deity Cavity", brand: "Deity", price: 159, specs: "Lock-on, 133mm", type: "Lock-on", length: "133mm", material: "TRC+" },
    { id: 31, name: "Renthal GEO", brand: "Renthal", price: 159, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 32, name: "SQLab 751", brand: "SQLab", price: 249, specs: "Ergonomic, 160mm", type: "Ergonomic", length: "160mm", material: "Rubber" },
    { id: 33, name: "ODI Roge", brand: "ODI", price: 109, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 34, name: "Deity Dreadlock", brand: "Deity", price: 169, specs: "Lock-on, 133mm", type: "Lock-on", length: "133mm", material: "TRC+" },
    { id: 35, name: "Renthal Aramid", brand: "Renthal", price: 169, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Aramid compound" },
    { id: 36, name: "SQLab 761", brand: "SQLab", price: 269, specs: "Ergonomic, 170mm", type: "Ergonomic", length: "170mm", material: "Rubber" },
    { id: 37, name: "ODI Mushroom", brand: "ODI", price: 79, specs: "Slip-on, 130mm", type: "Slip-on", length: "130mm", material: "Rubber" },
    { id: 38, name: "Deity Bladerunner", brand: "Deity", price: 129, specs: "Lock-on, 133mm", type: "Lock-on", length: "133mm", material: "Rubber" },
    { id: 39, name: "Renthal Cross Country", brand: "Renthal", price: 119, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 40, name: "SQLab 771", brand: "SQLab", price: 289, specs: "Ergonomic, 180mm", type: "Ergonomic", length: "180mm", material: "Rubber" },
    { id: 41, name: "ODI Yeti Foam", brand: "ODI", price: 69, specs: "Slip-on, 130mm", type: "Slip-on", length: "130mm", material: "Foam" },
    { id: 42, name: "Deity Traction", brand: "Deity", price: 149, specs: "Lock-on, 133mm", type: "Lock-on", length: "133mm", material: "Rubber" },
    { id: 43, name: "Renthal Enduro", brand: "Renthal", price: 149, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 44, name: "SQLab 781", brand: "SQLab", price: 309, specs: "Ergonomic, 190mm", type: "Ergonomic", length: "190mm", material: "Rubber" },
    { id: 45, name: "ODI Dirt", brand: "ODI", price: 89, specs: "Slip-on, 130mm", type: "Slip-on", length: "130mm", material: "Rubber" },
    { id: 46, name: "Deity Foam", brand: "Deity", price: 99, specs: "Slip-on, 133mm", type: "Slip-on", length: "133mm", material: "Foam" },
    { id: 47, name: "Renthal Downhill", brand: "Renthal", price: 159, specs: "Lock-on, 130mm", type: "Lock-on", length: "130mm", material: "Rubber" },
    { id: 48, name: "SQLab 791", brand: "SQLab", price: 329, specs: "Ergonomic, 200mm", type: "Ergonomic", length: "200mm", material: "Rubber" },
    { id: 49, name: "ODI BMX", brand: "ODI", price: 59, specs: "Slip-on, 130mm", type: "Slip-on", length: "130mm", material: "Rubber" },
    { id: 50, name: "Deity Vapour", brand: "Deity", price: 179, specs: "Lock-on, 133mm", type: "Lock-on", length: "133mm", material: "TRC+" }
],
     dropper: [
            {
                id: 1,
                name: "RockShox Reverb AXS",
                brand: "RockShox",
                price: 2799,
                specs: "150mm travel, wireless",
                travel: "150mm",
                type: "Wireless",
                diameter: "31.6mm",
                // Pola kompatybilności
                actuationType: "Wireless",
                cableRouting: "Wireless",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "100mm",
                maxInsertion: "200mm",
                leverIncluded: "Yes",
                remoteType: "Wireless AXS"
            },
            {
                id: 2,
                name: "Fox Transfer Factory",
                brand: "Fox",
                price: 2199,
                specs: "175mm travel, Kashima",
                travel: "175mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal/External",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Adjustable",
                minInsertion: "110mm",
                maxInsertion: "210mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker/IS"
            },
            {
                id: 3,
                name: "OneUp V2",
                brand: "OneUp",
                price: 1399,
                specs: "180mm travel, tool-free adjustment",
                travel: "180mm",
                type: "Mechanical",
                diameter: "30.9mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "30.9mm",
                travelAdjustment: "Tool-free Adjustable",
                minInsertion: "100mm",
                maxInsertion: "195mm",
                leverIncluded: "No",
                remoteType: "Universal"
            },
            {
                id: 4,
                name: "Bike Yoke Revive",
                brand: "Bike Yoke",
                price: 1899,
                specs: "185mm travel, self-repairing",
                travel: "185mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "110mm",
                maxInsertion: "215mm",
                leverIncluded: "Yes",
                remoteType: "Bike Yoke"
            },
            {
                id: 5,
                name: "RockShox Reverb C1",
                brand: "RockShox",
                price: 1599,
                specs: "150mm travel, hydraulic",
                travel: "150mm",
                type: "Hydraulic",
                diameter: "31.6mm",
                actuationType: "Hydraulic",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "100mm",
                maxInsertion: "200mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 6,
                name: "Fox Transfer Performance",
                brand: "Fox",
                price: 1799,
                specs: "150mm travel, alloy body",
                travel: "150mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal/External",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "100mm",
                maxInsertion: "200mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 7,
                name: "OneUp V1",
                brand: "OneUp",
                price: 1199,
                specs: "150mm travel",
                travel: "150mm",
                type: "Mechanical",
                diameter: "30.9mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "30.9mm",
                travelAdjustment: "Fixed",
                minInsertion: "100mm",
                maxInsertion: "195mm",
                leverIncluded: "No",
                remoteType: "Universal"
            },
            {
                id: 8,
                name: "Bike Yoke Divine",
                brand: "Bike Yoke",
                price: 1599,
                specs: "160mm travel, lightweight",
                travel: "160mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "105mm",
                maxInsertion: "205mm",
                leverIncluded: "Yes",
                remoteType: "Bike Yoke"
            },
            {
                id: 9,
                name: "RockShox Reverb Stealth",
                brand: "RockShox",
                price: 1699,
                specs: "170mm travel, stealth routing",
                travel: "170mm",
                type: "Hydraulic",
                diameter: "31.6mm",
                actuationType: "Hydraulic",
                cableRouting: "Internal Only",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "110mm",
                maxInsertion: "210mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker Stealth"
            },
            {
                id: 10,
                name: "Fox Transfer SL",
                brand: "Fox",
                price: 1999,
                specs: "125mm travel, lightweight",
                travel: "125mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "95mm",
                maxInsertion: "185mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 11,
                name: "OneUp 180mm",
                brand: "OneUp",
                price: 1499,
                specs: "180mm travel, tool-free",
                travel: "180mm",
                type: "Mechanical",
                diameter: "30.9mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "30.9mm",
                travelAdjustment: "Tool-free Adjustable",
                minInsertion: "100mm",
                maxInsertion: "195mm",
                leverIncluded: "No",
                remoteType: "Universal"
            },
            {
                id: 12,
                name: "Bike Yoke Revive 2.0",
                brand: "Bike Yoke",
                price: 1999,
                specs: "185mm travel, improved design",
                travel: "185mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "110mm",
                maxInsertion: "215mm",
                leverIncluded: "Yes",
                remoteType: "Bike Yoke V2"
            },
            {
                id: 13,
                name: "RockShox Reverb AXS 170mm",
                brand: "RockShox",
                price: 2899,
                specs: "170mm travel, wireless",
                travel: "170mm",
                type: "Wireless",
                diameter: "31.6mm",
                actuationType: "Wireless",
                cableRouting: "Wireless",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "110mm",
                maxInsertion: "210mm",
                leverIncluded: "Yes",
                remoteType: "Wireless AXS"
            },
            {
                id: 14,
                name: "Fox Transfer 200mm",
                brand: "Fox",
                price: 2399,
                specs: "200mm travel, long drop",
                travel: "200mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal/External",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "120mm",
                maxInsertion: "220mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 15,
                name: "OneUp 210mm",
                brand: "OneUp",
                price: 1599,
                specs: "210mm travel, maximum drop",
                travel: "210mm",
                type: "Mechanical",
                diameter: "30.9mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "30.9mm",
                travelAdjustment: "Tool-free Adjustable",
                minInsertion: "120mm",
                maxInsertion: "215mm",
                leverIncluded: "No",
                remoteType: "Universal"
            },
            {
                id: 16,
                name: "Bike Yoke Divine SL",
                brand: "Bike Yoke",
                price: 1799,
                specs: "160mm travel, super lightweight",
                travel: "160mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "105mm",
                maxInsertion: "205mm",
                leverIncluded: "Yes",
                remoteType: "Bike Yoke"
            },
            {
                id: 17,
                name: "RockShox Reverb 200mm",
                brand: "RockShox",
                price: 1799,
                specs: "200mm travel, hydraulic",
                travel: "200mm",
                type: "Hydraulic",
                diameter: "31.6mm",
                actuationType: "Hydraulic",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "120mm",
                maxInsertion: "220mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 18,
                name: "Fox Transfer 125mm",
                brand: "Fox",
                price: 1899,
                specs: "125mm travel",
                travel: "125mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal/External",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "95mm",
                maxInsertion: "185mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 19,
                name: "OneUp 120mm",
                brand: "OneUp",
                price: 1199,
                specs: "120mm travel",
                travel: "120mm",
                type: "Mechanical",
                diameter: "30.9mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "30.9mm",
                travelAdjustment: "Tool-free Adjustable",
                minInsertion: "95mm",
                maxInsertion: "190mm",
                leverIncluded: "No",
                remoteType: "Universal"
            },
            {
                id: 20,
                name: "Bike Yoke Divine 140mm",
                brand: "Bike Yoke",
                price: 1499,
                specs: "140mm travel",
                travel: "140mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "100mm",
                maxInsertion: "200mm",
                leverIncluded: "Yes",
                remoteType: "Bike Yoke"
            },
            {
                id: 21,
                name: "RockShox Reverb AXS 200mm",
                brand: "RockShox",
                price: 2999,
                specs: "200mm travel, wireless",
                travel: "200mm",
                type: "Wireless",
                diameter: "31.6mm",
                actuationType: "Wireless",
                cableRouting: "Wireless",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "120mm",
                maxInsertion: "220mm",
                leverIncluded: "Yes",
                remoteType: "Wireless AXS"
            },
            {
                id: 22,
                name: "Fox Transfer 150mm",
                brand: "Fox",
                price: 1999,
                specs: "150mm travel",
                travel: "150mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal/External",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "100mm",
                maxInsertion: "200mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 23,
                name: "OneUp 100mm",
                brand: "OneUp",
                price: 1099,
                specs: "100mm travel",
                travel: "100mm",
                type: "Mechanical",
                diameter: "30.9mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "30.9mm",
                travelAdjustment: "Tool-free Adjustable",
                minInsertion: "90mm",
                maxInsertion: "180mm",
                leverIncluded: "No",
                remoteType: "Universal"
            },
            {
                id: 24,
                name: "Bike Yoke Revive 170mm",
                brand: "Bike Yoke",
                price: 1849,
                specs: "170mm travel",
                travel: "170mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "105mm",
                maxInsertion: "205mm",
                leverIncluded: "Yes",
                remoteType: "Bike Yoke V2"
            },
            {
                id: 25,
                name: "RockShox Reverb 170mm",
                brand: "RockShox",
                price: 1649,
                specs: "170mm travel, hydraulic",
                travel: "170mm",
                type: "Hydraulic",
                diameter: "31.6mm",
                actuationType: "Hydraulic",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "110mm",
                maxInsertion: "210mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 26,
                name: "Fox Transfer 100mm",
                brand: "Fox",
                price: 1699,
                specs: "100mm travel",
                travel: "100mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal/External",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "90mm",
                maxInsertion: "180mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 27,
                name: "OneUp 90mm",
                brand: "OneUp",
                price: 999,
                specs: "90mm travel",
                travel: "90mm",
                type: "Mechanical",
                diameter: "30.9mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "30.9mm",
                travelAdjustment: "Tool-free Adjustable",
                minInsertion: "85mm",
                maxInsertion: "175mm",
                leverIncluded: "No",
                remoteType: "Universal"
            },
            {
                id: 28,
                name: "Bike Yoke Divine 125mm",
                brand: "Bike Yoke",
                price: 1399,
                specs: "125mm travel",
                travel: "125mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "95mm",
                maxInsertion: "195mm",
                leverIncluded: "Yes",
                remoteType: "Bike Yoke"
            },
            {
                id: 29,
                name: "RockShox Reverb AXS 125mm",
                brand: "RockShox",
                price: 2699,
                specs: "125mm travel, wireless",
                travel: "125mm",
                type: "Wireless",
                diameter: "31.6mm",
                actuationType: "Wireless",
                cableRouting: "Wireless",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "95mm",
                maxInsertion: "185mm",
                leverIncluded: "Yes",
                remoteType: "Wireless AXS"
            },
            {
                id: 30,
                name: "Fox Transfer 75mm",
                brand: "Fox",
                price: 1599,
                specs: "75mm travel",
                travel: "75mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal/External",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "85mm",
                maxInsertion: "175mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 31,
                name: "OneUp 80mm",
                brand: "OneUp",
                price: 949,
                specs: "80mm travel",
                travel: "80mm",
                type: "Mechanical",
                diameter: "30.9mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "30.9mm",
                travelAdjustment: "Tool-free Adjustable",
                minInsertion: "85mm",
                maxInsertion: "175mm",
                leverIncluded: "No",
                remoteType: "Universal"
            },
            {
                id: 32,
                name: "Bike Yoke Revive 150mm",
                brand: "Bike Yoke",
                price: 1749,
                specs: "150mm travel",
                travel: "150mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "100mm",
                maxInsertion: "200mm",
                leverIncluded: "Yes",
                remoteType: "Bike Yoke V2"
            },
            {
                id: 33,
                name: "RockShox Reverb 125mm",
                brand: "RockShox",
                price: 1499,
                specs: "125mm travel, hydraulic",
                travel: "125mm",
                type: "Hydraulic",
                diameter: "31.6mm",
                actuationType: "Hydraulic",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "95mm",
                maxInsertion: "185mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 34,
                name: "Fox Transfer 50mm",
                brand: "Fox",
                price: 1499,
                specs: "50mm travel",
                travel: "50mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal/External",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "80mm",
                maxInsertion: "170mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 35,
                name: "OneUp 70mm",
                brand: "OneUp",
                price: 899,
                specs: "70mm travel",
                travel: "70mm",
                type: "Mechanical",
                diameter: "30.9mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "30.9mm",
                travelAdjustment: "Tool-free Adjustable",
                minInsertion: "80mm",
                maxInsertion: "170mm",
                leverIncluded: "No",
                remoteType: "Universal"
            },
            {
                id: 36,
                name: "Bike Yoke Divine 100mm",
                brand: "Bike Yoke",
                price: 1299,
                specs: "100mm travel",
                travel: "100mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "90mm",
                maxInsertion: "190mm",
                leverIncluded: "Yes",
                remoteType: "Bike Yoke"
            },
            {
                id: 37,
                name: "RockShox Reverb AXS 100mm",
                brand: "RockShox",
                price: 2599,
                specs: "100mm travel, wireless",
                travel: "100mm",
                type: "Wireless",
                diameter: "31.6mm",
                actuationType: "Wireless",
                cableRouting: "Wireless",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "90mm",
                maxInsertion: "180mm",
                leverIncluded: "Yes",
                remoteType: "Wireless AXS"
            },
            {
                id: 38,
                name: "Fox Transfer 30mm",
                brand: "Fox",
                price: 1399,
                specs: "30mm travel",
                travel: "30mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal/External",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "75mm",
                maxInsertion: "165mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 39,
                name: "OneUp 60mm",
                brand: "OneUp",
                price: 849,
                specs: "60mm travel",
                travel: "60mm",
                type: "Mechanical",
                diameter: "30.9mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "30.9mm",
                travelAdjustment: "Tool-free Adjustable",
                minInsertion: "80mm",
                maxInsertion: "170mm",
                leverIncluded: "No",
                remoteType: "Universal"
            },
            {
                id: 40,
                name: "Bike Yoke Revive 125mm",
                brand: "Bike Yoke",
                price: 1649,
                specs: "125mm travel",
                travel: "125mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "95mm",
                maxInsertion: "195mm",
                leverIncluded: "Yes",
                remoteType: "Bike Yoke V2"
            },
            {
                id: 41,
                name: "RockShox Reverb 100mm",
                brand: "RockShox",
                price: 1399,
                specs: "100mm travel, hydraulic",
                travel: "100mm",
                type: "Hydraulic",
                diameter: "31.6mm",
                actuationType: "Hydraulic",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "90mm",
                maxInsertion: "180mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 42,
                name: "Fox Transfer 25mm",
                brand: "Fox",
                price: 1299,
                specs: "25mm travel",
                travel: "25mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal/External",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "75mm",
                maxInsertion: "165mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 43,
                name: "OneUp 50mm",
                brand: "OneUp",
                price: 799,
                specs: "50mm travel",
                travel: "50mm",
                type: "Mechanical",
                diameter: "30.9mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "30.9mm",
                travelAdjustment: "Tool-free Adjustable",
                minInsertion: "80mm",
                maxInsertion: "170mm",
                leverIncluded: "No",
                remoteType: "Universal"
            },
            {
                id: 44,
                name: "Bike Yoke Divine 75mm",
                brand: "Bike Yoke",
                price: 1199,
                specs: "75mm travel",
                travel: "75mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "85mm",
                maxInsertion: "175mm",
                leverIncluded: "Yes",
                remoteType: "Bike Yoke"
            },
            {
                id: 45,
                name: "RockShox Reverb AXS 75mm",
                brand: "RockShox",
                price: 2499,
                specs: "75mm travel, wireless",
                travel: "75mm",
                type: "Wireless",
                diameter: "31.6mm",
                actuationType: "Wireless",
                cableRouting: "Wireless",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "85mm",
                maxInsertion: "175mm",
                leverIncluded: "Yes",
                remoteType: "Wireless AXS"
            },
            {
                id: 46,
                name: "Fox Transfer 20mm",
                brand: "Fox",
                price: 1199,
                specs: "20mm travel",
                travel: "20mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal/External",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "75mm",
                maxInsertion: "165mm",
                leverIncluded: "Yes",
                remoteType: "MatchMaker"
            },
            {
                id: 47,
                name: "Brand-X Ascend",
                brand: "Brand-X",
                price: 699,
                specs: "150mm travel, budget option",
                travel: "150mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "External",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "100mm",
                maxInsertion: "200mm",
                leverIncluded: "Yes",
                remoteType: "Universal"
            },
            {
                id: 48,
                name: "PNW Loam Dropper",
                brand: "PNW",
                price: 1299,
                specs: "170mm travel, PNW design",
                travel: "170mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal/External",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Adjustable",
                minInsertion: "110mm",
                maxInsertion: "210mm",
                leverIncluded: "Yes",
                remoteType: "PNW Loam Lever"
            },
            {
                id: 49,
                name: "Crankbrothers Highline",
                brand: "Crankbrothers",
                price: 1599,
                specs: "150mm travel, Crankbrothers tech",
                travel: "150mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Internal",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Tool Adjustable",
                minInsertion: "100mm",
                maxInsertion: "200mm",
                leverIncluded: "Yes",
                remoteType: "Crankbrothers"
            },
            {
                id: 50,
                name: "KS Lev Integra",
                brand: "KS",
                price: 1499,
                specs: "150mm travel, integrated cable routing",
                travel: "150mm",
                type: "Mechanical",
                diameter: "31.6mm",
                actuationType: "Mechanical Cable",
                cableRouting: "Integrated",
                seatpostDiameter: "31.6mm",
                travelAdjustment: "Fixed",
                minInsertion: "100mm",
                maxInsertion: "200mm",
                leverIncluded: "Yes",
                remoteType: "KS"
            }
        ],
        saddle: [
            {
                id: 1,
                name: "Specialized Phenom Expert",
                brand: "Specialized",
                price: 699,
                specs: "143mm, carbon rails",
                width: "143mm",
                rails: "Carbon",
                // Pola kompatybilności
                saddleType: "Performance MTB",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "High density foam",
                coverMaterial: "Synthetic leather",
                weight_g: 205,
                recommendedUse: "MTB/Trail",
                pressureRelief: "Central cutout"
            },
            {
                id: 2,
                name: "SQLabs 611 Ergowave",
                brand: "SQLabs",
                price: 749,
                specs: "Active, 13cm, carbon rails",
                width: "130mm",
                rails: "Carbon",
                saddleType: "Ergonomic",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Active suspension",
                coverMaterial: "Microfiber",
                weight_g: 230,
                recommendedUse: "All Mountain/Trail",
                pressureRelief: "Wave design"
            },
            {
                id: 3,
                name: "Ergon SM Enduro",
                brand: "Ergon",
                price: 689,
                specs: "Medium, carbon rails",
                width: "145mm",
                rails: "Carbon",
                saddleType: "Enduro",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Gel infused foam",
                coverMaterial: "Synthetic leather",
                weight_g: 240,
                recommendedUse: "Enduro/Trail",
                pressureRelief: "Center groove"
            },
            {
                id: 4,
                name: "Fizik Taiga",
                brand: "Fizik",
                price: 799,
                specs: "M5 rails, 142mm",
                width: "142mm",
                rails: "Alloy",
                saddleType: "Performance",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Microtex",
                weight_g: 225,
                recommendedUse: "XC/Trail",
                pressureRelief: "Flexible shell"
            },
            {
                id: 5,
                name: "Specialized Power Expert",
                brand: "Specialized",
                price: 749,
                specs: "143mm, carbon rails",
                width: "143mm",
                rails: "Carbon",
                saddleType: "Performance",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Body Geometry",
                coverMaterial: "Synthetic leather",
                weight_g: 210,
                recommendedUse: "Gravel/MTB",
                pressureRelief: "Short nose design"
            },
            {
                id: 6,
                name: "SQLabs 612 Ergowave",
                brand: "SQLabs",
                price: 799,
                specs: "Active, 14cm, carbon rails",
                width: "140mm",
                rails: "Carbon",
                saddleType: "Ergonomic",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Active suspension",
                coverMaterial: "Microfiber",
                weight_g: 235,
                recommendedUse: "Trail/Enduro",
                pressureRelief: "Wave design"
            },
            {
                id: 7,
                name: "Ergon SM Pro",
                brand: "Ergon",
                price: 719,
                specs: "Medium, carbon rails",
                width: "145mm",
                rails: "Carbon",
                saddleType: "Enduro",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Gel infused foam",
                coverMaterial: "Synthetic leather",
                weight_g: 245,
                recommendedUse: "Trail/Enduro",
                pressureRelief: "Center groove"
            },
            {
                id: 8,
                name: "Fizik Antares",
                brand: "Fizik",
                price: 829,
                specs: "Kium rails, 142mm",
                width: "142mm",
                rails: "Alloy",
                saddleType: "Performance",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Microtex",
                weight_g: 220,
                recommendedUse: "Road/Gravel",
                pressureRelief: "Classic shape"
            },
            {
                id: 9,
                name: "Specialized Bridge",
                brand: "Specialized",
                price: 599,
                specs: "155mm, alloy rails",
                width: "155mm",
                rails: "Alloy",
                saddleType: "Comfort",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Comfort foam",
                coverMaterial: "Synthetic leather",
                weight_g: 260,
                recommendedUse: "Touring/Commuter",
                pressureRelief: "Wide platform"
            },
            {
                id: 10,
                name: "SQLabs 601 Active",
                brand: "SQLabs",
                price: 699,
                specs: "Active, 12cm, alloy rails",
                width: "120mm",
                rails: "Alloy",
                saddleType: "Ergonomic",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Active suspension",
                coverMaterial: "Microfiber",
                weight_g: 215,
                recommendedUse: "Trail/Enduro",
                pressureRelief: "Wave design"
            },
            {
                id: 11,
                name: "Ergon SM Sport",
                brand: "Ergon",
                price: 569,
                specs: "Medium, alloy rails",
                width: "145mm",
                rails: "Alloy",
                saddleType: "Enduro",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Synthetic leather",
                weight_g: 255,
                recommendedUse: "Trail/All Mountain",
                pressureRelief: "Center groove"
            },
            {
                id: 12,
                name: "Fizik Argo",
                brand: "Fizik",
                price: 899,
                specs: "Carbon rails, 150mm",
                width: "150mm",
                rails: "Carbon",
                saddleType: "Performance",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Microtex",
                weight_g: 210,
                recommendedUse: "Road/Gravel",
                pressureRelief: "Short nose"
            },
            {
                id: 13,
                name: "Specialized Romin",
                brand: "Specialized",
                price: 749,
                specs: "143mm, carbon rails",
                width: "143mm",
                rails: "Carbon",
                saddleType: "Performance",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Body Geometry",
                coverMaterial: "Synthetic leather",
                weight_g: 205,
                recommendedUse: "MTB/Trail",
                pressureRelief: "Central cutout"
            },
            {
                id: 14,
                name: "SQLabs 602 Active",
                brand: "SQLabs",
                price: 719,
                specs: "Active, 13cm, alloy rails",
                width: "130mm",
                rails: "Alloy",
                saddleType: "Ergonomic",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Active suspension",
                coverMaterial: "Microfiber",
                weight_g: 220,
                recommendedUse: "Trail/All Mountain",
                pressureRelief: "Wave design"
            },
            {
                id: 15,
                name: "Ergon SM Comp",
                brand: "Ergon",
                price: 649,
                specs: "Medium, alloy rails",
                width: "145mm",
                rails: "Alloy",
                saddleType: "Enduro",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Synthetic leather",
                weight_g: 250,
                recommendedUse: "Trail/All Mountain",
                pressureRelief: "Center groove"
            },
            {
                id: 16,
                name: "Fizik Terra",
                brand: "Fizik",
                price: 769,
                specs: "Alloy rails, 142mm",
                width: "142mm",
                rails: "Alloy",
                saddleType: "Adventure",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Microtex",
                weight_g: 235,
                recommendedUse: "Adventure/Gravel",
                pressureRelief: "Flexible shell"
            },
            {
                id: 17,
                name: "Specialized Toupe",
                brand: "Specialized",
                price: 719,
                specs: "143mm, carbon rails",
                width: "143mm",
                rails: "Carbon",
                saddleType: "Performance",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Body Geometry",
                coverMaterial: "Synthetic leather",
                weight_g: 205,
                recommendedUse: "XC/Trail",
                pressureRelief: "Central cutout"
            },
            {
                id: 18,
                name: "SQLabs 603 Active",
                brand: "SQLabs",
                price: 749,
                specs: "Active, 14cm, alloy rails",
                width: "140mm",
                rails: "Alloy",
                saddleType: "Ergonomic",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Active suspension",
                coverMaterial: "Microfiber",
                weight_g: 230,
                recommendedUse: "All Mountain",
                pressureRelief: "Wave design"
            },
            {
                id: 19,
                name: "Ergon SM Evo",
                brand: "Ergon",
                price: 689,
                specs: "Medium, carbon rails",
                width: "145mm",
                rails: "Carbon",
                saddleType: "Enduro",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Gel infused foam",
                coverMaterial: "Synthetic leather",
                weight_g: 240,
                recommendedUse: "Trail/Enduro",
                pressureRelief: "Center groove"
            },
            {
                id: 20,
                name: "Fizik Vento",
                brand: "Fizik",
                price: 999,
                specs: "Carbon rails, 140mm",
                width: "140mm",
                rails: "Carbon",
                saddleType: "Performance",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Microtex",
                weight_g: 200,
                recommendedUse: "Road/Gravel",
                pressureRelief: "Lightweight design"
            },
            {
                id: 21,
                name: "Specialized Avatar",
                brand: "Specialized",
                price: 629,
                specs: "143mm, alloy rails",
                width: "143mm",
                rails: "Alloy",
                saddleType: "Performance",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Synthetic leather",
                weight_g: 235,
                recommendedUse: "Trail/All Mountain",
                pressureRelief: "Traditional shape"
            },
            {
                id: 22,
                name: "SQLabs 604 Active",
                brand: "SQLabs",
                price: 829,
                specs: "Active, 15cm, carbon rails",
                width: "150mm",
                rails: "Carbon",
                saddleType: "Ergonomic",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Active suspension",
                coverMaterial: "Microfiber",
                weight_g: 240,
                recommendedUse: "All Mountain",
                pressureRelief: "Wave design"
            },
            {
                id: 23,
                name: "Ergon SM Prime",
                brand: "Ergon",
                price: 749,
                specs: "Medium, carbon rails",
                width: "145mm",
                rails: "Carbon",
                saddleType: "Enduro",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Gel infused foam",
                coverMaterial: "Synthetic leather",
                weight_g: 245,
                recommendedUse: "Trail/Enduro",
                pressureRelief: "Center groove"
            },
            {
                id: 24,
                name: "Fizik Aliante",
                brand: "Fizik",
                price: 929,
                specs: "Carbon rails, 139mm",
                width: "139mm",
                rails: "Carbon",
                saddleType: "Performance",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Microtex",
                weight_g: 215,
                recommendedUse: "Road/Gravel",
                pressureRelief: "WingFlex design"
            },
            {
                id: 25,
                name: "Specialized Henge",
                brand: "Specialized",
                price: 599,
                specs: "143mm, alloy rails",
                width: "143mm",
                rails: "Alloy",
                saddleType: "Comfort",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Comfort foam",
                coverMaterial: "Synthetic leather",
                weight_g: 260,
                recommendedUse: "Commuter/Touring",
                pressureRelief: "Wide platform"
            },
            {
                id: 26,
                name: "SQLabs 605 Active",
                brand: "SQLabs",
                price: 849,
                specs: "Active, 16cm, carbon rails",
                width: "160mm",
                rails: "Carbon",
                saddleType: "Ergonomic",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Active suspension",
                coverMaterial: "Microfiber",
                weight_g: 250,
                recommendedUse: "Trail/All Mountain",
                pressureRelief: "Wave design"
            },
            {
                id: 27,
                name: "Ergon SM Performance",
                brand: "Ergon",
                price: 769,
                specs: "Medium, carbon rails",
                width: "145mm",
                rails: "Carbon",
                saddleType: "Enduro",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Gel infused foam",
                coverMaterial: "Synthetic leather",
                weight_g: 245,
                recommendedUse: "Trail/All Mountain",
                pressureRelief: "Center groove"
            },
            {
                id: 28,
                name: "Fizik Kurve",
                brand: "Fizik",
                price: 1099,
                specs: "Carbon rails, 142mm",
                width: "142mm",
                rails: "Carbon",
                saddleType: "Performance",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Microtex",
                weight_g: 195,
                recommendedUse: "Gravel/All Road",
                pressureRelief: "Curved shell"
            },
            {
                id: 29,
                name: "Specialized Power Arc",
                brand: "Specialized",
                price: 799,
                specs: "143mm, carbon rails",
                width: "143mm",
                rails: "Carbon",
                saddleType: "Performance",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Body Geometry",
                coverMaterial: "Synthetic leather",
                weight_g: 205,
                recommendedUse: "XC/Trail",
                pressureRelief: "Arc design"
            },
            {
                id: 30,
                name: "SQLabs 606 Active",
                brand: "SQLabs",
                price: 899,
                specs: "Active, 17cm, carbon rails",
                width: "170mm",
                rails: "Carbon",
                saddleType: "Ergonomic",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Active suspension",
                coverMaterial: "Microfiber",
                weight_g: 255,
                recommendedUse: "All Mountain",
                pressureRelief: "Wave design"
            },
            {
                id: 31,
                name: "Ergon SM Gel",
                brand: "Ergon",
                price: 579,
                specs: "Medium, alloy rails",
                width: "145mm",
                rails: "Alloy",
                saddleType: "Enduro",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Gel foam",
                coverMaterial: "Synthetic leather",
                weight_g: 265,
                recommendedUse: "Trail/All Mountain",
                pressureRelief: "Gel padding"
            },
            {
                id: 32,
                name: "Fizik Versus",
                brand: "Fizik",
                price: 729,
                specs: "Alloy rails, 142mm",
                width: "142mm",
                rails: "Alloy",
                saddleType: "Performance",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Microtex",
                weight_g: 235,
                recommendedUse: "Trail/All Mountain",
                pressureRelief: "Versatile shape"
            },
            {
                id: 33,
                name: "Specialized Power Comp",
                brand: "Specialized",
                price: 629,
                specs: "143mm, alloy rails",
                width: "143mm",
                rails: "Alloy",
                saddleType: "Performance",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Synthetic leather",
                weight_g: 240,
                recommendedUse: "Trail/All Mountain",
                pressureRelief: "Short nose"
            },
            {
                id: 34,
                name: "SQLabs 607 Active",
                brand: "SQLabs",
                price: 949,
                specs: "Active, 18cm, carbon rails",
                width: "180mm",
                rails: "Carbon",
                saddleType: "Ergonomic",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Active suspension",
                coverMaterial: "Microfiber",
                weight_g: 265,
                recommendedUse: "Enduro",
                pressureRelief: "Wave design"
            },
            {
                id: 35,
                name: "Ergon SM Trail",
                brand: "Ergon",
                price: 689,
                specs: "Medium, alloy rails",
                width: "145mm",
                rails: "Alloy",
                saddleType: "Trail",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Synthetic leather",
                weight_g: 260,
                recommendedUse: "Trail/All Mountain",
                pressureRelief: "Trail optimized"
            },
            {
                id: 36,
                name: "Fizik Tundra",
                brand: "Fizik",
                price: 829,
                specs: "Manganese rails, 142mm",
                width: "142mm",
                rails: "Manganese",
                saddleType: "Performance",
                railMaterial: "Manganese",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Microtex",
                weight_g: 240,
                recommendedUse: "Trail/All Mountain",
                pressureRelief: "M3 shell"
            },
            {
                id: 37,
                name: "Specialized Phenom Comp",
                brand: "Specialized",
                price: 569,
                specs: "143mm, alloy rails",
                width: "143mm",
                rails: "Alloy",
                saddleType: "Performance",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Synthetic leather",
                weight_g: 245,
                recommendedUse: "Trail/All Mountain",
                pressureRelief: "Central cutout"
            },
            {
                id: 38,
                name: "SQLabs 608 Active",
                brand: "SQLabs",
                price: 999,
                specs: "Active, 19cm, carbon rails",
                width: "190mm",
                rails: "Carbon",
                saddleType: "Ergonomic",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Active suspension",
                coverMaterial: "Microfiber",
                weight_g: 270,
                recommendedUse: "Enduro",
                pressureRelief: "Wave design"
            },
            {
                id: 39,
                name: "Ergon SM Allroad",
                brand: "Ergon",
                price: 719,
                specs: "Medium, carbon rails",
                width: "145mm",
                rails: "Carbon",
                saddleType: "Allroad",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Gel infused foam",
                coverMaterial: "Synthetic leather",
                weight_g: 250,
                recommendedUse: "Gravel/Allroad",
                pressureRelief: "Allroad design"
            },
            {
                id: 40,
                name: "Fizik Cyrano",
                brand: "Fizik",
                price: 1029,
                specs: "Carbon rails, 140mm",
                width: "140mm",
                rails: "Carbon",
                saddleType: "Performance",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Microtex",
                weight_g: 205,
                recommendedUse: "Road/Gravel",
                pressureRelief: "R1 shell"
            },
            {
                id: 41,
                name: "Specialized Power Pro",
                brand: "Specialized",
                price: 849,
                specs: "143mm, carbon rails",
                width: "143mm",
                rails: "Carbon",
                saddleType: "Performance",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Body Geometry",
                coverMaterial: "Synthetic leather",
                weight_g: 205,
                recommendedUse: "Gravel/Trail",
                pressureRelief: "Short nose"
            },
            {
                id: 42,
                name: "SQLabs 609 Active",
                brand: "SQLabs",
                price: 1049,
                specs: "Active, 20cm, carbon rails",
                width: "200mm",
                rails: "Carbon",
                saddleType: "Ergonomic",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Active suspension",
                coverMaterial: "Microfiber",
                weight_g: 280,
                recommendedUse: "Comfort/Touring",
                pressureRelief: "Wave design"
            },
            {
                id: 43,
                name: "Ergon SM Gravel",
                brand: "Ergon",
                price: 749,
                specs: "Medium, carbon rails",
                width: "145mm",
                rails: "Carbon",
                saddleType: "Gravel",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Gel infused foam",
                coverMaterial: "Synthetic leather",
                weight_g: 245,
                recommendedUse: "Gravel/Allroad",
                pressureRelief: "Gravel specific"
            },
            {
                id: 44,
                name: "Fizik Tempo",
                brand: "Fizik",
                price: 769,
                specs: "Alloy rails, 140mm",
                width: "140mm",
                rails: "Alloy",
                saddleType: "Performance",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Microtex",
                weight_g: 235,
                recommendedUse: "Road/Gravel",
                pressureRelief: "Classic shape"
            },
            {
                id: 45,
                name: "Specialized Romin Evo",
                brand: "Specialized",
                price: 879,
                specs: "143mm, carbon rails",
                width: "143mm",
                rails: "Carbon",
                saddleType: "Performance",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Body Geometry",
                coverMaterial: "Synthetic leather",
                weight_g: 205,
                recommendedUse: "Trail/MTB",
                pressureRelief: "Evo design"
            },
            {
                id: 46,
                name: "SQLabs 610 Active",
                brand: "SQLabs",
                price: 1099,
                specs: "Active, 21cm, carbon rails",
                width: "210mm",
                rails: "Carbon",
                saddleType: "Ergonomic",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Active suspension",
                coverMaterial: "Microfiber",
                weight_g: 290,
                recommendedUse: "Comfort/Touring",
                pressureRelief: "Wave design"
            },
            {
                id: 47,
                name: "Ergon SM Touring",
                brand: "Ergon",
                price: 799,
                specs: "Medium, alloy rails",
                width: "145mm",
                rails: "Alloy",
                saddleType: "Touring",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Synthetic leather",
                weight_g: 260,
                recommendedUse: "Touring/Commuter",
                pressureRelief: "Touring comfort"
            },
            {
                id: 48,
                name: "Fizik Atlas",
                brand: "Fizik",
                price: 1149,
                specs: "Carbon rails, 142mm",
                width: "142mm",
                rails: "Carbon",
                saddleType: "Performance",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Standard foam",
                coverMaterial: "Microtex",
                weight_g: 215,
                recommendedUse: "Road/Allroad",
                pressureRelief: "Adventure shape"
            },
            {
                id: 49,
                name: "Specialized Avatar Gel",
                brand: "Specialized",
                price: 549,
                specs: "143mm, alloy rails",
                width: "143mm",
                rails: "Alloy",
                saddleType: "Comfort",
                railMaterial: "Alloy",
                railDiameter: "7x7mm",
                railType: "Round",
                paddingType: "Gel comfort",
                coverMaterial: "Synthetic leather",
                weight_g: 270,
                recommendedUse: "Commuter",
                pressureRelief: "Gel padding"
            },
            {
                id: 50,
                name: "SQLabs 620 Active",
                brand: "SQLabs",
                price: 1199,
                specs: "Active, 22cm, carbon rails",
                width: "220mm",
                rails: "Carbon",
                saddleType: "Ergonomic",
                railMaterial: "Carbon",
                railDiameter: "7x9mm",
                railType: "Round",
                paddingType: "Active suspension",
                coverMaterial: "Microfiber",
                weight_g: 300,
                recommendedUse: "Comfort/Touring",
                pressureRelief: "Wave design"
            }
        ]
    };

    // ========== SYSTEM KOMPATYBILNOŚCI ==========
    
    function checkCompatibility(selectedParts, newPart, partType) {
        // Definicja zasad kompatybilności
        const compatibilityRules = {
            // Rama vs inne części
            frame: {
                fork: (frame, fork) => {
                    const issues = [];
                    // Rozmiar koła
                    if (frame.wheelSize && fork.wheelSize && frame.wheelSize !== fork.wheelSize) {
                        issues.push(`Rama ${frame.wheelSize} nie pasuje do widelca ${fork.wheelSize}`);
                    }
                    // Standard główki
                    if (frame.headtube === 'Tapered' && fork.steererTube === 'Straight') {
                        issues.push('Widelec z prostą rurą sterową wymaga reduktora do ramy stożkowej');
                    }
                    // Travel
                    if (frame.travel && fork.travel) {
                        const frameTravel = parseInt(frame.travel);
                        const forkTravel = parseInt(fork.travel);
                        if (forkTravel > frameTravel * 1.3) {
                            issues.push(`Travel widelca (${forkTravel}mm) jest zbyt duży dla ramy (${frameTravel}mm)`);
                        }
                    }
                    return issues;
                },
                brakes: (frame, brakes) => {
                    const issues = [];
                    // Typ mocowania hamulców
                    if (frame.brakeMount && brakes.mountType && frame.brakeMount !== brakes.mountType) {
                        issues.push(`Rama: ${frame.brakeMount}, Hamulce: ${brakes.mountType} (potrzebny adapter)`);
                    }
                    return issues;
                },
                wheels: (frame, wheels) => {
                    const issues = [];
                    // Standard Boost
                    if (frame.wheelStandard && wheels.axleStandard && frame.wheelStandard !== wheels.axleStandard) {
                        issues.push(`Rama: ${frame.wheelStandard}, Koła: ${wheels.axleStandard}`);
                    }
                    return issues;
                }
            },
            
            // Kaseta kompatybilność
            cassette: {
                hubs: (cassette, hubs) => {
                    const issues = [];
                    // Typ bębenka
                    if (cassette.driverType && hubs.driverType && cassette.driverType !== hubs.driverType) {
                        issues.push(`Kaseta: ${cassette.driverType}, Piasta: ${hubs.driverType}`);
                    }
                    return issues;
                },
                derailleur: (cassette, derailleur) => {
                    const issues = [];
                    // Maksymalna zębatka
                    if (cassette.maxSprocket && derailleur.maxCassette) {
                        const cassetteMax = parseInt(cassette.maxSprocket);
                        const derailleurMax = parseInt(derailleur.maxCassette);
                        if (cassetteMax > derailleurMax) {
                            issues.push(`Kaseta ma ${cassetteMax}T, przerzutka obsługuje max ${derailleurMax}T`);
                        }
                    }
                    // Kompatybilność producenta
                    if (cassette.compatibility && derailleur.brandCompatibility) {
                        if (!cassette.compatibility.includes(derailleur.brandCompatibility)) {
                            issues.push(`Kaseta ${cassette.brand} może nie działać optymalnie z przerzutką ${derailleur.brand}`);
                        }
                    }
                    return issues;
                },
                chain: (cassette, chain) => {
                    const issues = [];
                    // Liczba biegów
                    if (cassette.speeds && chain.speedCompatibility && cassette.speeds != chain.speedCompatibility) {
                        issues.push(`Kaseta ${cassette.speeds}-biegowa, łańcuch ${chain.speedCompatibility}-biegowy`);
                    }
                    return issues;
                }
            },
            
            // Przerzutka kompatybilność
            derailleur: {
                shifter: (derailleur, shifter) => {
                    const issues = [];
                    // Producent
                    if (derailleur.brandCompatibility && shifter.brandCompatibility && 
                        derailleur.brandCompatibility !== shifter.brandCompatibility) {
                        issues.push(`Przerzutka: ${derailleur.brandCompatibility}, Manetka: ${shifter.brandCompatibility}`);
                    }
                    // Liczba biegów
                    if (derailleur.speeds && shifter.speeds && derailleur.speeds !== shifter.speeds) {
                        issues.push(`Przerzutka ${derailleur.speeds}-biegowa, manetka ${shifter.speeds}-biegowa`);
                    }
                    return issues;
                }
            },
            
            // Hamulce kompatybilność
            brakes: {
                hubs: (brakes, hubs) => {
                    const issues = [];
                    // Typ mocowania tarczy
                    if (brakes.rotorCompatibility && hubs.brakeCompatibility && 
                        brakes.rotorCompatibility !== hubs.brakeCompatibility) {
                        issues.push(`Hamulce: ${brakes.rotorCompatibility}, Piasta: ${hubs.brakeCompatibility}`);
                    }
                    return issues;
                }
            },
            
            // Widelec kompatybilność
            fork: {
                wheels: (fork, wheels) => {
                    const issues = [];
                    // Standard osi
                    if (fork.axleType && wheels.axleStandard) {
                        const isBoost = fork.axleType.includes('Boost');
                        const wheelIsBoost = wheels.axleStandard === 'Boost';
                        if (isBoost !== wheelIsBoost) {
                            issues.push(`Widelec ${isBoost ? 'Boost' : 'Standard'}, koła ${wheels.axleStandard}`);
                        }
                    }
                    return issues;
                }
            }
        };

        // Zbieranie wszystkich problemów kompatybilności
        let allIssues = [];

        // Sprawdź każdą już wybraną część względem nowej
        Object.entries(selectedParts).forEach(([existingType, existingPart]) => {
            // Sprawdź czy istnieją zasady dla tej kombinacji
            if (compatibilityRules[existingType] && compatibilityRules[existingType][partType]) {
                const issues = compatibilityRules[existingType][partType](existingPart, newPart);
                allIssues.push(...issues);
            }
            
            // Sprawdź w drugą stronę
            if (compatibilityRules[partType] && compatibilityRules[partType][existingType]) {
                const issues = compatibilityRules[partType][existingType](newPart, existingPart);
                allIssues.push(...issues);
            }
        });

        // Usuń duplikaty
        allIssues = [...new Set(allIssues)];

        // Zwróć wynik
        if (allIssues.length === 0) {
            return {
                compatible: true,
                reason: "✓ Część jest w pełni kompatybilna z wybranym zestawem"
            };
        } else {
            return {
                compatible: false,
                reason: `⚠️ Problemy z kompatybilnością:\n• ${allIssues.join('\n• ')}`
            };
        }
    }

    // Funkcja tworząca wirtualne koło z obręczy i piasty
    function createVirtualWheel(selectedParts) {
        if (!selectedParts.rims || !selectedParts.hubs) return null;
        
        const rims = selectedParts.rims;
        const hubs = selectedParts.hubs;
        
        return {
            type: 'wheels',
            wheelSize: rims.wheelSize || rims.size,
            axleStandard: hubs.axleStandard,
            brakeCompatibility: hubs.brakeCompatibility,
            brand: `${rims.brand}/${hubs.brand}`
        };
    }

    // Rozszerzona funkcja sprawdzania z wirtualnymi kołami
    function checkCompatibilityExtended(selectedParts, newPart, partType) {
        // Podstawowe sprawdzenie
        const baseResult = checkCompatibility(selectedParts, newPart, partType);
        
        // Jeśli mamy obręcze i piasty, sprawdź wirtualne koła
        if ((partType === 'rims' && selectedParts.hubs) || 
            (partType === 'hubs' && selectedParts.rims)) {
            
            const virtualWheel = createVirtualWheel({
                ...selectedParts,
                [partType]: newPart
            });
            
            if (virtualWheel && selectedParts.frame) {
                const wheelCheck = checkCompatibility(
                    { frame: selectedParts.frame },
                    virtualWheel,
                    'wheels'
                );
                
                if (!wheelCheck.compatible) {
                    return {
                        compatible: false,
                        reason: `${baseResult.reason}\n\nDodatkowo z kołami:\n${wheelCheck.reason}`
                    };
                }
            }
        }
        
        return baseResult;
    }

    // ========== STAN APLIKACJI ==========
    const state = {
        selectedComponents: {},
        currentComponent: null,
        filteredProducts: [],
        filters: {
            price: 10000,
            brands: new Set(),
            dynamicFilters: {}
        }
    };

    // ========== ELEMENTY DOM ==========
    const elements = {
        componentCards: document.querySelectorAll('.component-card'),
        componentModal: document.getElementById('componentModal'),
        modalTitle: document.getElementById('modalTitle'),
        modalClose: document.getElementById('modalClose'),
        productsGrid: document.getElementById('productsGrid'),
        productsCount: document.getElementById('productsCount'),
        priceSlider: document.getElementById('priceSlider'),
        maxPriceDisplay: document.getElementById('maxPriceDisplay'),
        dynamicFilters: document.getElementById('dynamicFilters'),
        brandFilters: document.getElementById('brandFilters'),
        resetFilters: document.getElementById('resetFilters'),
        sortBy: document.getElementById('sortBy'),
        compatibilityModal: document.getElementById('compatibilityModal'),
        compatibilityMessage: document.getElementById('compatibilityMessage'),
        cancelSelection: document.getElementById('cancelSelection'),
        confirmSelection: document.getElementById('confirmSelection'),
        compatibilityClose: document.getElementById('compatibilityClose'),
        selectedPartsList: document.getElementById('selected-parts-list'),
        finalTotal: document.getElementById('final-total'),
        btnNextStage: document.getElementById('btn-next-stage'),
        progressFill: document.getElementById('progress-fill'),
        progressPercent: document.getElementById('progress-percent'),
        productDetailModal: document.getElementById('productDetailModal'),
        detailTitle: document.getElementById('detailTitle'),
        detailBody: document.getElementById('detailBody'),
        detailClose: document.getElementById('detailClose')
    };

    // ========== FUNKCJE POMOCNICZE ==========
    function formatPrice(price) {
        return price.toLocaleString('pl-PL');
    }

    function getComponentName(type) {
        const names = {
            'frame': 'Ramę',
            'fork': 'Amortyzator przedni',
            'damper': 'Tylny amortyzator',
            'crank': 'Korbę',
            'derailleur': 'Przerzutkę',
            'shifter': 'Manetkę',
            'cassette': 'Kasetę',
            'chain': 'Łańcuch',
            'brakes': 'Hamulce',
            'tires': 'Opony',
            'rims': 'Obręcze',
            'hubs': 'Piasty',
            'handlebar': 'Kierownicę',
            'stem': 'Mostek',
            'grips': 'Gripsy',
            'dropper': 'Sztycę',
            'saddle': 'Siodełko'
        };
        return names[type] || type;
    }

    function formatKey(key) {
        const translations = {
            'wheelSize': 'Rozmiar koła',
            'travel': 'Travel',
            'material': 'Materiał',
            'type': 'Typ',
            'speeds': 'Przełożenia',
            'cage': 'Klatka',
            'range': 'Zakres',
            'size': 'Rozmiar',
            'compound': 'Mieszanka',
            'width': 'Szerokość',
            'engagement': 'Załączanie',
            'rise': 'Wznios',
            'pistons': 'Tłoczki',
            'rotorSize': 'Rozmiar tarczy',
            'length': 'Długość',
            'teeth': 'Liczba zębów',
            'stroke': 'Skok',
            'rails': 'Szyny',
            'weight_g': 'Waga'
        };
        return translations[key] || key.charAt(0).toUpperCase() + key.slice(1);
    }

    // ========== OBSŁUGA MODALI ==========
    function openComponentModal(componentType) {
        state.currentComponent = componentType;
        elements.modalTitle.textContent = `Wybierz ${getComponentName(componentType)}`;
        
        state.filteredProducts = [...componentsData[componentType]];
        buildFilters(componentType);
        applyFilters();
        
        elements.componentModal.style.display = 'block';
    }

    function closeComponentModal() {
        elements.componentModal.style.display = 'none';
        state.currentComponent = null;
        state.filters.brands.clear();
        state.filters.dynamicFilters = {};
    }

    function showCompatibilityWarning(message, onConfirm) {
        elements.compatibilityMessage.textContent = message;
        elements.compatibilityModal.style.display = 'block';
        
        const originalHandler = elements.confirmSelection.onclick;
        
        elements.confirmSelection.onclick = () => {
            closeCompatibilityModal();
            if (onConfirm) onConfirm();
            elements.confirmSelection.onclick = originalHandler;
        };
    }

    function closeCompatibilityModal() {
        elements.compatibilityModal.style.display = 'none';
    }

    function showProductDetails(product) {
        elements.detailTitle.textContent = product.name;
        
        let detailsHTML = `
            <div class="product-detail-header">
                <h3>${product.name}</h3>
                <div class="detail-brand-price">
                    <span class="detail-brand">${product.brand}</span>
                    <span class="detail-price">${formatPrice(product.price)} zł</span>
                </div>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-info-circle"></i> Opis</h4>
                <p>${product.specs}</p>
            </div>
        `;
        
        // Dodaj specyfikacje
        const technicalProps = Object.keys(product).filter(key => 
            !['id', 'name', 'brand', 'price', 'specs', 'technical'].includes(key)
        );
        
        if (technicalProps.length > 0) {
            detailsHTML += `
                <div class="detail-section">
                    <h4><i class="fas fa-cog"></i> Specyfikacja</h4>
                    <div class="specs-grid">
                        ${technicalProps.map(key => `
                            <div class="spec-item">
                                <span class="spec-key">${formatKey(key)}:</span>
                                <span class="spec-value">${product[key]}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // Dodaj szczegóły techniczne
        if (product.technical) {
            detailsHTML += `
                <div class="detail-section">
                    <h4><i class="fas fa-tools"></i> Szczegóły techniczne</h4>
                    <div class="specs-grid">
                        ${Object.entries(product.technical).map(([key, value]) => `
                            <div class="spec-item">
                                <span class="spec-key">${formatKey(key)}:</span>
                                <span class="spec-value">${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // Dodaj informacje o kompatybilności
        const compatibilityInfo = checkCompatibilityExtended(
            state.selectedComponents,
            product,
            state.currentComponent
        );
        
        detailsHTML += `
            <div class="detail-section">
                <h4><i class="fas fa-check-circle"></i> Kompatybilność</h4>
                <p style="color: ${compatibilityInfo.compatible ? '#059669' : '#dc2626'}; padding: 10px; background: #f8fafc; border-radius: 6px;">
                    ${compatibilityInfo.reason.replace(/\n/g, '<br>')}
                </p>
            </div>
            
            <div class="detail-actions">
                <button class="btn-primary" id="selectFromDetail">
                    ${compatibilityInfo.compatible ? 'Wybierz ten produkt' : 'Wybierz mimo ostrzeżenia'}
                </button>
            </div>
        `;
        
        elements.detailBody.innerHTML = detailsHTML;
        
        document.getElementById('selectFromDetail').addEventListener('click', () => {
            handleProductSelection(product);
            closeProductDetailModal();
        });
        
        elements.productDetailModal.style.display = 'block';
    }

    function closeProductDetailModal() {
        elements.productDetailModal.style.display = 'none';
    }

    // ========== OBSŁUGA FILTRÓW ==========
    function buildFilters(componentType) {
        const products = componentsData[componentType];
        buildDynamicFilters(products, componentType);
        buildBrandFilters(products);
        
        const maxPrice = Math.max(...products.map(p => p.price));
        elements.priceSlider.max = Math.ceil(maxPrice / 100) * 100;
        elements.priceSlider.value = maxPrice;
        elements.maxPriceDisplay.textContent = `${maxPrice} zł`;
    }

    function getFilterConfig(componentType) {
        const configs = {
            frame: [
                { key: 'material', name: 'Materiał' },
                { key: 'wheelSize', name: 'Rozmiar koła' },
                { key: 'travel', name: 'Travel' }
            ],
            fork: [
                { key: 'type', name: 'Typ' },
                { key: 'travel', name: 'Travel' },
                { key: 'wheelSize', name: 'Rozmiar koła' }
            ],
            damper: [
                { key: 'type', name: 'Typ' },
                { key: 'travel', name: 'Travel' }
            ],
            crank: [
                { key: 'type', name: 'Typ' },
                { key: 'length', name: 'Długość' }
            ],
            derailleur: [
                { key: 'speeds', name: 'Przełożenia' }
            ],
            shifter: [
                { key: 'type', name: 'Typ' },
                { key: 'speeds', name: 'Przełożenia' }
            ],
            cassette: [
                { key: 'speeds', name: 'Przełożenia' },
                { key: 'driverType', name: 'Typ bębenka' }
            ],
            chain: [
                { key: 'speeds', name: 'Przełożenia' }
            ],
            brakes: [
                { key: 'type', name: 'Typ' },
                { key: 'pistons', name: 'Tłoczki' }
            ],
            tires: [
                { key: 'size', name: 'Rozmiar' },
                { key: 'compound', name: 'Mieszanka' }
            ],
            rims: [
                { key: 'material', name: 'Materiał' },
                { key: 'size', name: 'Rozmiar' },
                { key: 'width', name: 'Szerokość' }
            ],
            hubs: [
                { key: 'driverType', name: 'Typ bębenka' },
                { key: 'axleStandard', name: 'Standard osi' }
            ]
        };
        return configs[componentType] || [];
    }

    function buildDynamicFilters(products, componentType) {
        elements.dynamicFilters.innerHTML = '';
        const filterConfig = getFilterConfig(componentType);
        
        filterConfig.forEach(filter => {
            const uniqueValues = [...new Set(products.map(p => p[filter.key]))].filter(v => v);
            
            if (uniqueValues.length > 1) {
                const section = document.createElement('div');
                section.className = 'filter-section';
                section.innerHTML = `
                    <h4>${filter.name}</h4>
                    <div class="checkbox-group" id="${filter.key}Filter">
                        ${uniqueValues.map(value => `
                            <label class="checkbox-label">
                                <input type="checkbox" value="${value}">
                                <span>${value}</span>
                            </label>
                        `).join('')}
                    </div>
                `;
                elements.dynamicFilters.appendChild(section);
                
                section.querySelectorAll('input').forEach(checkbox => {
                    checkbox.addEventListener('change', applyFilters);
                });
            }
        });
    }

    function buildBrandFilters(products) {
        elements.brandFilters.innerHTML = '';
        const brands = [...new Set(products.map(p => p.brand))].sort();
        
        brands.forEach(brand => {
            const label = document.createElement('label');
            label.className = 'checkbox-label';
            label.innerHTML = `
                <input type="checkbox" value="${brand}">
                <span>${brand}</span>
            `;
            
            label.querySelector('input').addEventListener('change', (e) => {
                if (e.target.checked) {
                    state.filters.brands.add(brand);
                } else {
                    state.filters.brands.delete(brand);
                }
                applyFilters();
            });
            
            elements.brandFilters.appendChild(label);
        });
    }

    function applyFilters() {
        if (!state.currentComponent) return;
        
        let filtered = [...componentsData[state.currentComponent]];
        
        // Filtr ceny
        const maxPrice = parseInt(elements.priceSlider.value);
        filtered = filtered.filter(p => p.price <= maxPrice);
        
        // Filtry marki
        if (state.filters.brands.size > 0) {
            filtered = filtered.filter(p => state.filters.brands.has(p.brand));
        }
        
        // Dynamiczne filtry
        elements.dynamicFilters.querySelectorAll('.filter-section').forEach(section => {
            const checkboxes = section.querySelectorAll('input:checked');
            if (checkboxes.length > 0) {
                const filterKey = section.querySelector('.checkbox-group').id.replace('Filter', '');
                const selectedValues = Array.from(checkboxes).map(cb => cb.value);
                filtered = filtered.filter(p => selectedValues.includes(p[filterKey]));
            }
        });
        
        // Sortowanie
        const sortBy = elements.sortBy.value;
        switch (sortBy) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }
        
        state.filteredProducts = filtered;
        renderProducts();
    }

    function resetFilters() {
        const maxPrice = Math.max(...componentsData[state.currentComponent].map(p => p.price));
        elements.priceSlider.value = maxPrice;
        elements.maxPriceDisplay.textContent = `${maxPrice} zł`;
        
        elements.brandFilters.querySelectorAll('input').forEach(cb => {
            cb.checked = false;
        });
        state.filters.brands.clear();
        
        elements.dynamicFilters.querySelectorAll('input').forEach(cb => {
            cb.checked = false;
        });
        
        applyFilters();
    }

    // ========== RENDEROWANIE PRODUKTÓW ==========
    function renderProducts() {
        elements.productsGrid.innerHTML = '';
        elements.productsCount.textContent = `Produkty (${state.filteredProducts.length})`;
        
        if (state.filteredProducts.length === 0) {
            elements.productsGrid.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-search"></i>
                    <p>Nie znaleziono produktów spełniających kryteria</p>
                </div>
            `;
            return;
        }
        
        state.filteredProducts.forEach(product => {
            // Sprawdź kompatybilność dla podświetlenia
            const compatibility = checkCompatibilityExtended(
                state.selectedComponents,
                product,
                state.currentComponent
            );
            
            const isSelected = state.selectedComponents[state.currentComponent]?.id === product.id;
            const isIncompatible = !compatibility.compatible && !isSelected;
            
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            if (isIncompatible) {
                productCard.style.opacity = '0.7';
                productCard.style.borderColor = '#fecaca';
                productCard.title = compatibility.reason;
            }
            
            productCard.innerHTML = `
                <div class="product-header">
                    <h4>${product.name}</h4>
                    <span class="product-brand">${product.brand}</span>
                    ${isIncompatible ? '<span class="product-brand" style="background:#ef4444; color:white;">Niekompatybilne</span>' : ''}
                </div>
                <p class="product-specs">${product.specs}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)} zł</span>
                    <button class="btn-select" data-id="${product.id}" ${isIncompatible ? 'style="background:#ef4444;"' : ''}>
                        ${isSelected ? '✓ Wybrano' : (isIncompatible ? 'Sprawdź' : 'Wybierz')}
                    </button>
                </div>
            `;
            
            const selectBtn = productCard.querySelector('.btn-select');
            selectBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (isIncompatible) {
                    showCompatibilityWarning(compatibility.reason, () => {
                        handleProductSelection(product);
                    });
                } else {
                    handleProductSelection(product);
                }
            });
            
            productCard.addEventListener('click', () => {
                showProductDetails(product);
            });
            
            elements.productsGrid.appendChild(productCard);
        });
    }

    // ========== OBSŁUGA WYBORU PRODUKTU ==========
    function handleProductSelection(product) {
        // Sprawdź kompatybilność
        const compatibility = checkCompatibilityExtended(
            state.selectedComponents, 
            product, 
            state.currentComponent
        );
        
        if (!compatibility.compatible) {
            showCompatibilityWarning(compatibility.reason, () => {
                proceedWithSelection(product);
            });
            return;
        }
        
        proceedWithSelection(product);
    }

    function proceedWithSelection(product) {
        state.selectedComponents[state.currentComponent] = product;
        updateComponentSelection();
        updateSummary();
        updateProgress();
        closeComponentModal();
    }

    // ========== AKTUALIZACJA WIDOKU ==========
    function updateComponentSelection() {
        const componentType = state.currentComponent;
        const product = state.selectedComponents[componentType];
        const selectionElement = document.getElementById(`${componentType}-selection`);
        
        if (product) {
            selectionElement.innerHTML = `
                <span class="selected-product">
                    <strong>${product.brand} ${product.name}</strong>
                    <span class="product-price">${formatPrice(product.price)} zł</span>
                </span>
            `;
            document.querySelector(`.component-card[data-component="${componentType}"]`).classList.add('completed');
        } else {
            selectionElement.innerHTML = '<span class="no-selection">Nie wybrano</span>';
            document.querySelector(`.component-card[data-component="${componentType}"]`).classList.remove('completed');
        }
    }

    function updateSummary() {
        const selectedPartsList = elements.selectedPartsList;
        const selectedComponents = state.selectedComponents;
        
        if (Object.keys(selectedComponents).length === 0) {
            selectedPartsList.innerHTML = '<p class="empty-summary">Dodaj pierwszy komponent do zestawu</p>';
            elements.finalTotal.textContent = '0 zł';
            elements.btnNextStage.disabled = true;
            return;
        }
        
        let total = 0;
        let html = '';
        
        Object.entries(selectedComponents).forEach(([type, product]) => {
            total += product.price;
            
            // Sprawdź kompatybilność tej części z resztą zestawu
            const tempSelected = { ...selectedComponents };
            delete tempSelected[type];
            const compatibility = checkCompatibilityExtended(tempSelected, product, type);
            
            html += `
                <div class="selected-part" style="${!compatibility.compatible ? 'border-left: 4px solid #ef4444;' : ''}">
                    <div class="part-info">
                        <span class="part-name">${getComponentName(type)}</span>
                        <span class="part-details">${product.brand} ${product.name}</span>
                        ${!compatibility.compatible ? '<small style="color:#ef4444; display:block;">⚠️ Sprawdź kompatybilność</small>' : ''}
                    </div>
                    <span class="part-price">${formatPrice(product.price)} zł</span>
                </div>
            `;
        });
        
        selectedPartsList.innerHTML = html;
        elements.finalTotal.textContent = `${formatPrice(total)} zł`;
        elements.btnNextStage.disabled = false;
    }

    function updateProgress() {
        const totalComponents = Object.keys(componentsData).length;
        const selectedComponents = Object.keys(state.selectedComponents).length;
        const percent = Math.round((selectedComponents / totalComponents) * 100);
        
        elements.progressFill.style.width = `${percent}%`;
        elements.progressPercent.textContent = `${percent}%`;
    }

    // ========== INICJALIZACJA ==========
    function init() {
        setupEventListeners();
        updateSummary();
        updateProgress();
        
        // Dodaj tooltipy kompatybilności do kart komponentów
        elements.componentCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const componentType = this.dataset.component;
                const selectedProduct = state.selectedComponents[componentType];
                
                if (selectedProduct) {
                    const compatibility = checkCompatibilityExtended(
                        state.selectedComponents,
                        selectedProduct,
                        componentType
                    );
                    
                    if (!compatibility.compatible) {
                        this.style.borderColor = '#ef4444';
                        this.style.boxShadow = '0 0 0 2px rgba(239, 68, 68, 0.2)';
                        this.title = compatibility.reason;
                    }
                }
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.borderColor = '';
                this.style.boxShadow = '';
                this.title = '';
            });
        });
    }

    function setupEventListeners() {
        // Karty komponentów
        elements.componentCards.forEach(card => {
            card.addEventListener('click', () => {
                const componentType = card.dataset.component;
                openComponentModal(componentType);
            });
        });

        // Modal komponentów
        elements.modalClose.addEventListener('click', closeComponentModal);
        elements.componentModal.addEventListener('click', (e) => {
            if (e.target === elements.componentModal) {
                closeComponentModal();
            }
        });

        // Slider ceny
        elements.priceSlider.addEventListener('input', (e) => {
            elements.maxPriceDisplay.textContent = `${e.target.value} zł`;
            applyFilters();
        });

        // Reset filtrów
        elements.resetFilters.addEventListener('click', resetFilters);

        // Sortowanie
        elements.sortBy.addEventListener('change', applyFilters);

        // Modal kompatybilności
        elements.cancelSelection.addEventListener('click', closeCompatibilityModal);
        elements.compatibilityClose.addEventListener('click', closeCompatibilityModal);
        elements.compatibilityModal.addEventListener('click', (e) => {
            if (e.target === elements.compatibilityModal) {
                closeCompatibilityModal();
            }
        });

        // Modal szczegółów produktu
        elements.detailClose.addEventListener('click', closeProductDetailModal);
        elements.productDetailModal.addEventListener('click', (e) => {
            if (e.target === elements.productDetailModal) {
                closeProductDetailModal();
            }
        });

        // Przycisk następnego etapu
        elements.btnNextStage.addEventListener('click', () => {
            // Sprawdź ogólną kompatybilność zestawu
            let allIssues = [];
            Object.entries(state.selectedComponents).forEach(([type, product]) => {
                const tempSelected = { ...state.selectedComponents };
                delete tempSelected[type];
                const compatibility = checkCompatibilityExtended(tempSelected, product, type);
                if (!compatibility.compatible) {
                    allIssues.push(`${getComponentName(type)}: ${compatibility.reason.split('\n')[0]}`);
                }
            });
            
            if (allIssues.length > 0) {
                alert(`⚠️ Zestaw ma problemy z kompatybilnością:\n\n${allIssues.join('\n')}\n\nZalecamy sprawdzenie przed kontynuacją.`);
            } else {
                alert('✓ Wszystkie części są kompatybilne! Możesz przejść do podsumowania.');
            }
        });
    }

    // Uruchom aplikację
    init();
    
    console.log('Konfigurator MTB z systemem kompatybilności załadowany!');
});
require('dotenv').config();
const mongoose = require('mongoose');
const Medicine = require('./models/Medicine');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    return Medicine.insertMany([
      {
        name: 'Paracetamol',
        description: 'Pain reliever and fever reducer.',
        price: 25,
        stock: 100
      },
      {
        name: 'Ibuprofen',
        description: 'NSAID for pain and inflammation.',
        price: 30,
        stock: 50
      },
      {
        name: 'Azithromycin',
        description: 'Used to treat various bacterial infections.',
        price: 120,
        stock: 40
      },

      {
        name: 'Amoxicillin',
        description: 'Antibiotic used to treat bacterial infections.',
        price: 80,
        stock: 60
      },
      {
        name: 'Cetirizine',
        description: 'Antihistamine for allergies.',
        price: 15,
        stock: 120
      },
      {
        name: 'Metformin',
        description: 'Used to treat type 2 diabetes.',
        price: 45,
        stock: 90
      },
      {
        name: 'Omeprazole',
        description: 'Reduces stomach acid.',
        price: 35,
        stock: 70
      },
      {
        name: 'Aspirin',
        description: 'Pain reliever and blood thinner.',
        price: 20,
        stock: 150
      },
      {
        name: 'Loratadine',
        description: 'Allergy relief antihistamine.',
        price: 18,
        stock: 130
      },
      {
        name: 'Ciprofloxacin',
        description: 'Antibiotic used for infections.',
        price: 110,
        stock: 30
      },
      {
        name: 'Dolo 650',
        description: 'Pain and fever reliever.',
        price: 22,
        stock: 100
      },
      {
        name: 'Pantoprazole',
        description: 'Treats acid reflux and ulcers.',
        price: 40,
        stock: 85
      },
      {
        name: 'Montelukast',
        description: 'Asthma and allergy medication.',
        price: 55,
        stock: 45
      },
      {
        name: 'Dexamethasone',
        description: 'Corticosteroid for inflammation.',
        price: 65,
        stock: 25
      },
      {
        name: 'Ranitidine',
        description: 'Reduces stomach acid.',
        price: 28,
        stock: 95
      },
      {
        name: 'Amoxiclav',
        description: 'Broad-spectrum antibiotic.',
        price: 150,
        stock: 50
      },
      {
        name: 'Domperidone',
        description: 'Used for nausea and vomiting.',
        price: 27,
        stock: 80
      },
      {
        name: 'Levofloxacin',
        description: 'Antibiotic for infections.',
        price: 140,
        stock: 20
      },
      {
        name: 'Hydroxychloroquine',
        description: 'Used for malaria and autoimmune diseases.',
        price: 100,
        stock: 60
      },
      {
        name: 'Losartan',
        description: 'Treats high blood pressure.',
        price: 50,
        stock: 70
      },
      {
        name: 'Atorvastatin',
        description: 'Lowers cholesterol levels.',
        price: 60,
        stock: 110
      },
      {
        name: 'Thyronorm',
        description: 'Treats hypothyroidism.',
        price: 45,
        stock: 75
      },
      {
        name: 'Metoprolol',
        description: 'Used for high blood pressure and angina.',
        price: 55,
        stock: 100
      },
      {
        name: 'Amlodipine',
        description: 'Calcium channel blocker for hypertension.',
        price: 32,
        stock: 90
      },
      {
        name: 'Clopidogrel',
        description: 'Prevents blood clots.',
        price: 70,
        stock: 40
      },
      {
        name: 'Folic Acid',
        description: 'Vitamin supplement for pregnancy and anemia.',
        price: 20,
        stock: 200
      },
      {
        name: 'Iron Folic',
        description: 'Iron supplement with folic acid.',
        price: 30,
        stock: 180
      },
      {
        name: 'Calcium D3',
        description: 'Bone health supplement.',
        price: 35,
        stock: 160
      },
      {
        name: 'Dicyclomine',
        description: 'Treats stomach cramps.',
        price: 25,
        stock: 100
      },
      {
        name: 'Loperamide',
        description: 'Treats diarrhea.',
        price: 18,
        stock: 95
      },
      {
        name: 'ORS Sachets',
        description: 'Oral rehydration salts for dehydration.',
        price: 12,
        stock: 250
      },
      {
        name: 'Vitamin C Tablets',
        description: 'Boosts immunity.',
        price: 22,
        stock: 180
      },
      {
        name: 'Zinc Tablets',
        description: 'Supports immune function.',
        price: 25,
        stock: 160
      },
      {
        name: 'Insulin',
        description: 'Regulates blood sugar.',
        price: 200,
        stock: 30
      },
      {
        name: 'Cetirizine Syrup',
        description: 'Antihistamine syrup for children.',
        price: 28,
        stock: 60
      },
      {
        name: 'Ivermectin',
        description: 'Antiparasitic medication.',
        price: 38,
        stock: 70
      },
      {
        name: 'Doxycycline',
        description: 'Antibiotic used to treat infections.',
        price: 90,
        stock: 40
      },
      {
        name: 'Betadine Ointment',
        description: 'Antiseptic for cuts and wounds.',
        price: 50,
        stock: 80
      },
      {
        name: 'Neomycin Cream',
        description: 'Topical antibiotic for skin infections.',
        price: 40,
        stock: 75
      },
      {
        name: 'Saline Nasal Spray',
        description: 'For nasal congestion relief.',
        price: 35,
        stock: 60
      },
      {
        name: 'Chlorpheniramine',
        description: 'Relieves allergy symptoms.',
        price: 18,
        stock: 90
      },
      {
        name: 'Prednisolone',
        description: 'Steroid to reduce inflammation.',
        price: 75,
        stock: 55
      },
      {
        name: 'Naproxen',
        description: 'Pain reliever and anti-inflammatory.',
        price: 45,
        stock: 60
      },
      {
        name: 'Tetracycline',
        description: 'Broad-spectrum antibiotic.',
        price: 95,
        stock: 40
      },
      {
        name: 'Fluconazole',
        description: 'Antifungal medicine.',
        price: 60,
        stock: 50
      },
      {
        name: 'Mupirocin Ointment',
        description: 'Topical antibiotic for skin infections.',
        price: 55,
        stock: 45
      },
      {
        name: 'Phenylephrine',
        description: 'Decongestant for cold symptoms.',
        price: 30,
        stock: 90
      },
      {
        name: 'Acetaminophen',
        description: 'Pain reliever and fever reducer.',
        price: 25,
        stock: 100
      },
      {
        name: 'Carbamazepine',
        description: 'Treats seizures and nerve pain.',
        price: 120,
        stock: 30
      },
      {
        name: 'Cetirizine + Montelukast',
        description: 'Combination for allergies and asthma.',
        price: 65,
        stock: 50
      }


    ]);
  })
  .then(() => {
    console.log('Medicines added successfully ✅');
    mongoose.connection.close();
  })
  .catch(err => console.error('❌ Error inserting medicines:', err));

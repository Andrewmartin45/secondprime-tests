/* ============================================================
   Executive Assessment — biomarker dataset
   Source of truth: "Second Prime Lab Panels" (Vibrant America +
   Gut Zoomer + Hormone Zoomer + Heavy Metals + Performance),
   client DEXA + VO2, Galleri MCED, full-body MRI, plus the
   calculated indices Andrew uses in analysis.

   Marker fields:
     n  = name
     w  = what it is (short)
     why = why it matters for longevity / performance (optional)
     c  = how many underlying biomarkers this line rolls up (badge)
     cl = string count label for the badge (overrides c, e.g. "170+ species")

   Category fields:
     countLabel = string shown on the card + drawer pill (overrides the
     computed marker sum). Use for panels that roll many markers into
     grouped lines.
   ============================================================ */

window.SP_ASSESSMENT = {
  groups: [
    { id: "blood",  eyebrow: "Foundational bloodwork",   title: "The Blood Panel",           lead: "One draw, near your home or office. Vibrant America serum and plasma analysis, plus the calculated indices we build on top of it." },
    { id: "micro",  eyebrow: "Cellular fuel",            title: "Micronutrient Status",      lead: "The vitamins, minerals, amino acids, and fats your cells actually run on, measured inside and outside the cell." },
    { id: "adv",    eyebrow: "Deep diagnostics",         title: "Advanced Diagnostics",      lead: "At-home kits that reach where a standard blood panel stops: your gut, your hormone rhythm, your toxic load, your DNA." },
    { id: "perf",   eyebrow: "How you actually perform", title: "Performance & Body Composition", lead: "Objective measures of your engine, your frame, and your movement, benchmarked against your age." },
    { id: "black",  eyebrow: "Second Prime Black",       title: "Black Program Exclusives",  lead: "Advanced imaging and early-detection screening reserved for Private Advisory members.", note: "Reserved for Private Advisory members, layered on top of everything in the core assessment." },
    { id: "also",   eyebrow: "The full picture",         title: "We Also Assess",            lead: "Numbers only mean something in context. Alongside the labs, we capture how you eat, move, sleep, and recover, so the plan fits your real life.", note: "Not bloodwork, but essential context. Every marker above is interpreted against how you actually live." }
  ],

  categories: [

    /* ───────────── BLOOD PANEL ───────────── */
    {
      id: "cardio", group: "blood", tile: "tile-13-cardio.jpg",
      name: "Cardiovascular & Lipids", tagline: "The real drivers of heart risk, past standard cholesterol.",
      lab: "Vibrant America — serum",
      markers: [
        { n: "ApoB", w: "The number of artery-damaging particles in your blood.", why: "ApoB counts every particle that can lodge in an artery wall. It predicts heart attack risk better than LDL cholesterol, and it is the single lipid number most worth driving down for a longer life. Most standard panels never run it." },
        { n: "Lp(a)", w: "A genetic, inherited cardiovascular risk particle.", why: "Lp(a) is set by your DNA and doesn't move with diet. One in five people carry a high level and never know it. Measuring it once tells us whether you carry a hidden, heritable cardiac risk that demands earlier, harder prevention." },
        { n: "hs-CRP", w: "High-sensitivity marker of vascular inflammation.", why: "Plaque doesn't just build, it smolders. hs-CRP measures the low-grade inflammation that turns stable plaque into a rupture. It's one of the clearest early-warning lights for both heart disease and accelerated aging." },
        { n: "Apo A-1", w: "The protein backbone of protective HDL." },
        { n: "Apo B : Apo A-1 Ratio", w: "Bad particles vs. protective particles in one number.", why: "This ratio captures the tug-of-war between the particles that clog arteries and the ones that clear them. It's one of the tightest single predictors of cardiovascular events we have." },
        { n: "Total Cholesterol", w: "The headline number, and the least useful on its own." },
        { n: "LDL Cholesterol (calculated)", w: "The classic 'bad' cholesterol estimate." },
        { n: "HDL Direct", w: "Cholesterol carried by protective particles." },
        { n: "Cholesterol / HDL Ratio", w: "A quick read on lipid balance." },
        { n: "Triglycerides", w: "Blood fat that tracks with metabolic health.", why: "High triglycerides are an early flag that your metabolism is struggling to handle carbohydrates and is a strong signal of insulin resistance years before glucose rises." }
      ]
    },
    {
      id: "calc", group: "blood", tile: "tile-19-bioage.jpg",
      name: "Calculated Indices & Ratios", tagline: "The equations Andrew builds on top of your raw labs.",
      lab: "Derived from your blood panel",
      markers: [
        { n: "Triglyceride-Glucose (TyG) Index", w: "An insulin-resistance score from triglycerides and glucose.", why: "TyG is a validated stand-in for insulin resistance that needs no insulin assay. It predicts diabetes, fatty liver, and cardiovascular events, and it's one of the first numbers Andrew calculates to gauge metabolic health." },
        { n: "Atherogenic Index of Plasma (AIP)", w: "log(triglycerides / HDL), a marker of small dense LDL.", why: "AIP estimates how many small, dense, artery-penetrating LDL particles you carry, the most dangerous kind. It often exposes hidden cardiac risk in people whose standard cholesterol looks fine." },
        { n: "Triglyceride : HDL Ratio", w: "A simple, powerful insulin-resistance and particle-size proxy.", why: "A high TG:HDL ratio is one of the best bedside signals of insulin resistance and small dense LDL. It frequently flags a metabolic problem long before glucose or A1c move." },
        { n: "Non-HDL Cholesterol", w: "Every atherogenic particle in one number (Total minus HDL).", why: "Non-HDL captures all the cholesterol that can drive plaque, not just LDL. It's a more complete cardiovascular target than LDL alone, especially when triglycerides are high." },
        { n: "Remnant Cholesterol", w: "The overlooked, highly atherogenic leftover particles.", why: "Remnant cholesterol is increasingly recognized as a direct, causal driver of heart disease. Calculating it surfaces risk that standard panels leave invisible." },
        { n: "Metabolic Score for Insulin Resistance (METS-IR)", w: "A multi-input insulin-resistance score.", why: "METS-IR blends glucose, triglycerides, HDL, and body metrics into one robust insulin-resistance estimate, giving a fuller metabolic picture than any single marker." },
        { n: "HOMA-IR", w: "Insulin resistance from fasting glucose and insulin.", why: "HOMA-IR is the workhorse insulin-resistance calculation. Insulin resistance sits upstream of most age-related disease, so this is a number we push hard to optimize." },
        { n: "HOMA-β", w: "An estimate of how hard your pancreas is working." },
        { n: "Fatty Liver Index (FLI)", w: "A 0–100 score for fat in the liver.", why: "The FLI combines triglycerides, GGT, and body metrics to estimate hepatic fat without imaging. Fatty liver is the most common metabolic problem in high performers and a driver of long-term disease, so catching it early matters." },
        { n: "FIB-4 Fibrosis Index", w: "A screen for liver scarring from age, AST, ALT, and platelets.", why: "FIB-4 flags whether fatty liver has progressed toward fibrosis. It's a cheap, calculated early-warning that decides how aggressive the liver plan needs to be." },
        { n: "AST : ALT (De Ritis) Ratio", w: "A liver-enzyme ratio that hints at the type of liver stress." },
        { n: "Estimated Average Glucose (eAG)", w: "Your A1c translated into an average glucose number." },
        { n: "Lipid Accumulation Product (LAP)", w: "A marker of central fat and metabolic risk." },
        { n: "Visceral Adiposity Index (VAI)", w: "An estimate of visceral fat dysfunction from labs and waist." }
      ]
    },
    {
      id: "glycemic", group: "blood", tile: "tile-16-metabolic.jpg",
      name: "Glycemic & Insulin", tagline: "Catches metabolic decline years before blood sugar rises.",
      lab: "Vibrant America — serum",
      markers: [
        { n: "Fasting Insulin", w: "How hard your pancreas is working to hold the line.", why: "Insulin climbs for years before blood sugar ever looks abnormal. Measuring it is how we catch metabolic dysfunction while it's still fully reversible, long before a doctor would ever say 'pre-diabetic.'" },
        { n: "HOMA-IR", w: "A calculated score of insulin resistance.", why: "HOMA-IR turns glucose and insulin into one clear number for how insulin-resistant you are. Insulin resistance sits upstream of heart disease, Alzheimer's, and most of what shortens a lifespan." },
        { n: "Hemoglobin A1c", w: "Your average blood sugar over ~3 months.", why: "A1c smooths out the daily noise and shows the real trend in your blood sugar. Even in the 'normal' range, a creeping A1c predicts future disease and faster biological aging." },
        { n: "Fasting Glucose", w: "A single-point blood sugar reading." }
      ]
    },
    {
      id: "inflammation", group: "blood", tile: "tile-15-inflammation.jpg",
      name: "Inflammation & Immune Ratios", tagline: "The slow burn behind fog, fatigue, and disease.",
      lab: "Vibrant America — serum + CBC-derived",
      markers: [
        { n: "hs-CRP", w: "High-sensitivity systemic inflammation.", why: "Chronic low-grade inflammation is a common root under heart disease, diabetes, and cognitive decline. hs-CRP is the most practical way to see it and track whether our protocol is cooling it down." },
        { n: "Homocysteine", w: "An amino acid tied to heart and brain risk.", why: "Elevated homocysteine damages blood vessels and is linked to brain shrinkage and dementia. The fix is often simple, the right B-vitamins in the right form, but only if we measure it first." },
        { n: "ESR", w: "A classic, broad marker of inflammation." },
        { n: "Neutrophil-to-Lymphocyte Ratio (NLR)", w: "A CBC-derived signal of systemic inflammatory stress.", why: "NLR is a free, powerful marker calculated from your standard CBC. A rising NLR tracks with inflammation, poor metabolic health, and higher long-term mortality risk, and it's one Andrew reads on every panel." },
        { n: "Systemic Immune-Inflammation Index (SII)", w: "Platelets × neutrophils ÷ lymphocytes, a combined inflammation score.", why: "SII rolls three immune cell lines into one number that reflects the balance between inflammation and immune reserve. It adds depth beyond CRP for tracking whole-body inflammatory load." },
        { n: "Platelet-to-Lymphocyte Ratio (PLR)", w: "Another CBC-derived inflammatory ratio." },
        { n: "Lymphocyte-to-Monocyte Ratio (LMR)", w: "A ratio reflecting immune balance and resilience." },
        { n: "Ferritin", w: "Iron storage that doubles as an inflammation marker.", why: "Ferritin rises with inflammation as much as with iron. Read alongside CRP, a high ferritin points to a hidden inflammatory or metabolic fire worth chasing down." },
        { n: "Albumin", w: "A protein that runs low with chronic inflammation and aging." },
        { n: "GGT", w: "A liver enzyme that also reflects oxidative stress." }
      ]
    },
    {
      id: "thyroid", group: "blood", tile: "tile-01-blood.jpg",
      name: "Complete Thyroid", tagline: "Eight markers, not the one most doctors run.",
      lab: "Vibrant America — serum",
      markers: [
        { n: "TSH", w: "The pituitary's signal to the thyroid.", why: "TSH alone is what most doctors check, and it misses most thyroid problems. We run it as one input among eight so we see the full picture, not a single dot." },
        { n: "Free T3", w: "The active thyroid hormone your cells use.", why: "Free T3 is the hormone that actually drives your energy, metabolism, and body temperature. When you feel cold, foggy, and flat despite a 'normal' TSH, this is usually where the answer hides." },
        { n: "Free T4", w: "The main circulating thyroid hormone." },
        { n: "Reverse T3", w: "The brake pedal on thyroid function.", why: "Under stress your body can convert thyroid hormone into an inactive form that blocks the active one. Reverse T3 exposes that hidden brake, which explains fatigue that standard testing calls normal." },
        { n: "Total T3", w: "Total triiodothyronine, active and bound." },
        { n: "Total T4", w: "Total thyroxine in circulation." },
        { n: "Anti-TPO", w: "Antibody flag for autoimmune thyroid disease.", why: "Anti-TPO catches Hashimoto's, the most common cause of an underactive thyroid, often years before the gland fully fails. Catching it early changes the whole game plan." },
        { n: "Anti-Thyroglobulin (Anti-TG)", w: "A second autoimmune thyroid antibody." }
      ]
    },
    {
      id: "hormones-serum", group: "blood", tile: "tile-03-hormones.jpg",
      name: "Sex & Adrenal Hormones", tagline: "Testosterone, estrogen, cortisol, and the ratios that matter.",
      lab: "Vibrant America — serum",
      markers: [
        { n: "Total Testosterone", w: "Your total circulating testosterone.", why: "Testosterone drives muscle, drive, mood, and metabolic health in men. It declines with age, but 'normal for your age' and 'optimal' are very different targets, and we aim for optimal." },
        { n: "Free Testosterone", w: "The fraction of testosterone actually available.", why: "Only free testosterone can act on your tissues. A man can have 'normal' total testosterone and still be functionally low once SHBG binds most of it up. This is the number that tracks how you actually feel." },
        { n: "Free Androgen Index", w: "A calculated ratio of testosterone to SHBG.", why: "The Free Androgen Index estimates how much of your testosterone is bioavailable using the testosterone-to-SHBG ratio. It's a fast calculated check on whether your hormones are truly working for you." },
        { n: "Estradiol (E2)", w: "The primary estrogen, critical in men too.", why: "Men need estradiol for libido, bone, and heart health, but too much drives fat gain and moodiness. Getting the testosterone-to-estradiol balance right is central to feeling like yourself again." },
        { n: "Testosterone : Estradiol Ratio", w: "The balance that governs how you feel on hormones.", why: "This ratio decides whether your testosterone translates into drive and lean mass or tips into estrogen-driven side effects. It's a key dial we tune in any hormone protocol." },
        { n: "SHBG", w: "The protein that binds up sex hormones.", why: "SHBG decides how much of your testosterone is usable. It shifts with insulin, thyroid, and age, so it's essential context for every other hormone number." },
        { n: "DHEA-S", w: "The adrenal 'mother' hormone.", why: "DHEA-S is a precursor to your sex hormones and a marker of adrenal reserve. It falls steadily with age and is one of the clearest hormonal fingerprints of biological aging." },
        { n: "Cortisol : DHEA-S Ratio", w: "A read on whether you're in a catabolic, stressed state.", why: "A high cortisol-to-DHEA ratio signals your body is stuck in breakdown mode, burning muscle and reserve. Tracking it tells us how well you're recovering from chronic stress." },
        { n: "Cortisol", w: "Your primary stress hormone.", why: "Cortisol run high or flat wrecks sleep, muscle, blood sugar, and recovery. This serum reading is the anchor point we expand on with the diurnal saliva and urine testing." },
        { n: "DHT", w: "The most potent androgen." },
        { n: "Progesterone", w: "A calming, sleep-supportive hormone." },
        { n: "LH", w: "The pituitary signal to produce testosterone." },
        { n: "FSH", w: "A pituitary signal tied to fertility and gonadal function." },
        { n: "Prolactin", w: "A hormone that, when high, suppresses testosterone." },
        { n: "Pregnenolone", w: "The upstream precursor to all steroid hormones." },
        { n: "Parathyroid Hormone (PTH)", w: "Regulates calcium and bone metabolism." }
      ]
    },
    {
      id: "cbc", group: "blood", tile: "tile-01-blood.jpg",
      name: "Complete Blood Count", tagline: "Immune status, oxygen delivery, and clotting in one panel.",
      lab: "Vibrant America — whole blood",
      markers: [
        { n: "White Blood Cells (WBC)", w: "Your immune system's front line." },
        { n: "Red Blood Cells (RBC)", w: "Oxygen-carrying cell count." },
        { n: "Hemoglobin", w: "The oxygen-binding protein in red cells.", why: "Hemoglobin sets your oxygen-carrying capacity, which shows up directly as endurance and energy. Both low and high values matter for performance and risk." },
        { n: "Hematocrit", w: "The percentage of blood that is red cells." },
        { n: "RDW-CV", w: "Variation in red cell size, a quiet longevity signal.", why: "A rising RDW has emerged as a surprisingly strong predictor of all-cause mortality. It's a cheap marker that flags underlying stress on the body well before other tests move." },
        { n: "Platelet Count", w: "Cells that drive clotting." },
        { n: "Neutrophils (% & count)", w: "First-responder immune cells.", c: 2 },
        { n: "Lymphocytes (% & count)", w: "Immune cells for targeted, long-term defense.", c: 2 },
        { n: "Monocytes (% & count)", w: "Immune cells that clean up and signal.", c: 2 },
        { n: "Eosinophils (% & count)", w: "Immune cells tied to allergy and parasites.", c: 2 },
        { n: "Basophils (% & count)", w: "Immune cells involved in allergic response.", c: 2 },
        { n: "MCV / MCH / MCHC", w: "Red cell size and hemoglobin content indices.", c: 3 },
        { n: "RDW-SD", w: "Absolute red cell size distribution." },
        { n: "MPV", w: "Mean platelet volume." },
        { n: "Immature Granulocytes (% & count)", w: "Early-stage immune cells released under stress.", c: 2 },
        { n: "Nucleated RBC (count & %)", w: "Immature red cells, normally absent in adults.", c: 2 }
      ]
    },
    {
      id: "metabolic-organ", group: "blood", tile: "tile-18-organ.jpg",
      name: "Organ & Metabolic Panel", tagline: "Liver, kidney, and electrolyte health, in depth.",
      lab: "Vibrant America — serum",
      markers: [
        { n: "eGFR", w: "Your estimated kidney filtration rate.", why: "eGFR is the headline number for kidney health, and kidney function quietly declines with age. Protecting it early is a core longevity play, especially alongside blood pressure and metabolic work." },
        { n: "Creatinine", w: "A waste product used to gauge kidney function." },
        { n: "BUN", w: "A nitrogen waste marker of kidney and hydration status." },
        { n: "BUN / Creatinine Ratio", w: "Helps separate kidney from hydration issues." },
        { n: "ALT", w: "A liver enzyme, sensitive to fatty liver.", why: "ALT rises with fat accumulation in the liver, the most common liver problem in high-performers and a driver of metabolic disease. It's an early, actionable flag." },
        { n: "AST", w: "A liver and muscle enzyme." },
        { n: "AST : ALT (De Ritis) Ratio", w: "The pattern of liver enzymes, not just the levels." },
        { n: "Alkaline Phosphatase", w: "An enzyme tied to liver and bone." },
        { n: "Total Bilirubin", w: "A breakdown product processed by the liver." },
        { n: "Albumin", w: "A key protein and a marker of nutritional status.", why: "Albumin reflects both liver function and protein nutrition, and low-normal levels are linked to frailty and higher mortality with age. It's a subtle but meaningful longevity marker." },
        { n: "Total Protein", w: "Total circulating protein." },
        { n: "Sodium / Potassium / Chloride / CO2", w: "Electrolytes that govern hydration, nerves, and pH.", c: 4 },
        { n: "Calcium", w: "A mineral critical to nerves, muscle, and bone." },
        { n: "Serum Osmolality (calc)", w: "A measure of blood concentration and hydration." }
      ]
    },
    {
      id: "iron", group: "blood", tile: "tile-16-metabolic.jpg",
      name: "Iron & Anemia", tagline: "Energy, oxygen delivery, and hidden overload.",
      lab: "Vibrant America — serum",
      markers: [
        { n: "Ferritin", w: "Your body's stored iron, and an inflammation marker.", why: "Low ferritin is a common, missed cause of fatigue, poor endurance, and hair loss, especially in hard trainers. High ferritin can signal inflammation or iron overload. Both ends matter, and the optimal window is narrow." },
        { n: "Iron (serum)", w: "Circulating iron at the moment of the draw." },
        { n: "TIBC", w: "Total capacity to carry iron in the blood." },
        { n: "UIBC", w: "Unbound iron-carrying capacity." },
        { n: "Transferrin Saturation", w: "How full your iron transport system is.", why: "Transferrin saturation catches iron overload, including hemochromatosis, a common genetic condition that silently damages the heart and liver if missed." }
      ]
    },
    {
      id: "growth-immuno", group: "blood", tile: "tile-19-bioage.jpg",
      name: "Growth, Muscle & Immunity", tagline: "IGF-1, muscle enzymes, and immune baseline.",
      lab: "Vibrant America — serum",
      markers: [
        { n: "IGF-1", w: "A proxy for growth hormone and tissue repair.", why: "IGF-1 sits at the center of the longevity trade-off: enough for muscle, recovery, and brain health, but not so much that it accelerates aging pathways. We aim for the sweet spot rather than the maximum." },
        { n: "Uric Acid", w: "A metabolic marker tied to gout and blood pressure.", why: "High uric acid links to hypertension, metabolic syndrome, and gout. It's an underused window into how well your metabolism is handling fructose and purines." },
        { n: "Creatine Kinase (CK)", w: "An enzyme that reflects muscle breakdown and training load." },
        { n: "GGT", w: "A liver enzyme sensitive to alcohol and oxidative stress." },
        { n: "Immunoglobulins (IgG, IgA, IgM, IgE)", w: "The main antibody classes of your immune system.", c: 4 }
      ]
    },

    /* ───────────── MICRONUTRIENTS ───────────── */
    {
      id: "fat-vitamins", group: "micro", tile: "tile-14-micronutrients.jpg",
      name: "Fat-Soluble Vitamins & CoQ10", tagline: "Vitamin D, A, E, K, and cellular energy.",
      lab: "Vibrant America — micronutrient",
      markers: [
        { n: "Vitamin D (25-OH)", w: "The master vitamin for immunity, bone, and mood.", why: "Vitamin D acts on nearly every tissue and most high-performers run low. Correcting it improves immune resilience, bone strength, mood, and testosterone, and it's one of the highest-yield fixes we find." },
        { n: "CoEnzyme Q10", w: "The spark plug for cellular energy.", why: "CoQ10 powers the mitochondria that run your heart and muscles, and it drops with age and with statin use. Low levels show up as fatigue and poor exercise recovery." },
        { n: "Vitamin A (retinol)", w: "Essential for vision, skin, and immune function." },
        { n: "Vitamin E (alpha-tocopherol)", w: "A primary fat-soluble antioxidant." },
        { n: "Vitamin K1", w: "Supports healthy clotting." },
        { n: "Vitamin K2 (MK-4)", w: "Directs calcium into bone, not arteries.", why: "K2 helps keep calcium in your bones and out of your artery walls. Paired with vitamin D, it's a quiet but important lever for both skeletal and cardiovascular aging." },
        { n: "Vitamin D3 (cholecalciferol)", w: "The active dietary form of vitamin D." }
      ]
    },
    {
      id: "water-vitamins", group: "micro", tile: "tile-14-micronutrients.jpg",
      name: "Water-Soluble Vitamins", tagline: "The full B-complex, folate, and vitamin C.",
      lab: "Vibrant America — micronutrient",
      markers: [
        { n: "Vitamin B12 (cobalamin)", w: "Critical for nerves, energy, and red blood cells.", why: "B12 deficiency mimics aging: fatigue, brain fog, numbness, low mood. It's common, easily missed on standard testing, and simple to correct once we see it." },
        { n: "Folate (serum & RBC)", w: "Essential for methylation and DNA repair.", why: "Folate powers methylation, the process that repairs DNA and regulates gene expression. RBC folate shows your true long-term status, not just what you ate this week.", c: 2 },
        { n: "Methylmalonic Acid", w: "A sensitive functional marker of true B12 status.", why: "MMA rises when B12 is functionally low even if blood B12 looks normal. It catches deficiency the standard test misses." },
        { n: "Vitamin B6 (P5P)", w: "Drives hundreds of enzyme reactions, including neurotransmitters." },
        { n: "Vitamin B1 (thiamine)", w: "Essential for turning carbs into energy." },
        { n: "Vitamin B2 (riboflavin)", w: "Supports energy production and methylation." },
        { n: "Vitamin B3 (niacin)", w: "Central to cellular energy and NAD metabolism." },
        { n: "Vitamin B5 (pantothenic acid)", w: "Needed for adrenal hormones and energy." },
        { n: "Vitamin C", w: "A key antioxidant and cofactor for collagen." },
        { n: "Choline", w: "Supports brain, liver, and cell membranes." },
        { n: "Myo-Inositol", w: "Involved in insulin signaling and mood." }
      ]
    },
    {
      id: "minerals", group: "micro", tile: "tile-14-micronutrients.jpg",
      name: "Minerals", tagline: "Magnesium, zinc, copper, selenium, in and out of the cell.",
      lab: "Vibrant America — micronutrient",
      markers: [
        { n: "Magnesium (RBC)", w: "The cellular level of the body's calm mineral.", why: "Magnesium runs 300+ reactions, from sleep to blood sugar to muscle, and most people are low. RBC magnesium shows what's actually inside your cells, which serum testing hides." },
        { n: "Zinc", w: "Essential for testosterone, immunity, and repair.", why: "Zinc is foundational for testosterone production, immune defense, and wound healing. Hard training and stress burn through it, and deficiency is common in the men we work with." },
        { n: "Copper : Zinc Ratio", w: "A balance that affects immunity and mood.", why: "Zinc and copper compete, and an unbalanced ratio drives inflammation, anxiety, and immune problems. Supplementing zinc blindly can tip this the wrong way, which is why we measure both." },
        { n: "Selenium", w: "Essential for thyroid conversion and antioxidant defense.", why: "Selenium is required to convert thyroid hormone to its active form and to run your master antioxidant system. It's a small lever with an outsized effect on energy." },
        { n: "Iron (serum & RBC)", w: "Iron status inside and outside the cell.", c: 2 },
        { n: "Magnesium (serum)", w: "The circulating fraction of magnesium." },
        { n: "Potassium (serum & RBC)", w: "A key electrolyte for nerves and muscle.", c: 2 },
        { n: "Calcium", w: "Mineral for bone, nerve, and muscle." },
        { n: "Copper", w: "Needed for iron metabolism and connective tissue." },
        { n: "Manganese", w: "Cofactor for antioxidant and bone enzymes." },
        { n: "Chromium", w: "Supports insulin sensitivity." },
        { n: "Iodine", w: "The raw material for thyroid hormone." }
      ]
    },
    {
      id: "amino", group: "micro", tile: "tile-10-nutrition.jpg",
      name: "Amino Acids", tagline: "The building blocks of muscle, neurotransmitters, and recovery.",
      lab: "Vibrant America — micronutrient",
      markers: [
        { n: "Leucine", w: "The primary trigger for muscle protein synthesis.", why: "Leucine flips the switch on muscle building. As anabolic resistance sets in with age, knowing your levels helps us protect the muscle that protects your lifespan." },
        { n: "L-Arginine", w: "A precursor to nitric oxide for blood flow." },
        { n: "L-Citrulline", w: "Boosts nitric oxide and exercise blood flow." },
        { n: "L-Glutamine", w: "Fuel for the gut lining and immune cells." },
        { n: "Isoleucine & Valine", w: "The other two branched-chain amino acids for muscle.", c: 2 },
        { n: "Free Carnitine", w: "Shuttles fat into mitochondria to be burned.", why: "Carnitine moves fat into your cells' furnaces. Adequate levels support fat metabolism, endurance, and recovery." },
        { n: "L-Cysteine", w: "A precursor to glutathione, the master antioxidant." },
        { n: "L-Serine", w: "Supports brain and cell-membrane health." },
        { n: "L-Asparagine", w: "Involved in nervous system function." }
      ]
    },
    {
      id: "omega", group: "micro", tile: "tile-12-brain.jpg",
      name: "Omega & Fatty Acid Status", tagline: "The single fat marker most tied to a long life.",
      lab: "Vibrant America — micronutrient",
      markers: [
        { n: "Omega-3 Index", w: "The percentage of protective omega-3s in your cells.", why: "The Omega-3 Index is one of the strongest modifiable predictors of cardiovascular death and is linked to slower brain aging. Moving it into the optimal range is a simple, powerful longevity lever." },
        { n: "AA / EPA Ratio", w: "The balance between inflammatory and anti-inflammatory fats.", why: "This ratio captures how inflammatory your diet's fats are. A high ratio drives silent inflammation; correcting it changes recovery, joint comfort, and long-term risk." },
        { n: "EPA", w: "An anti-inflammatory omega-3." },
        { n: "DHA", w: "The omega-3 that builds your brain and retina.", why: "DHA is a structural fat in your brain. Adequate levels support memory, mood, and long-term cognitive resilience." },
        { n: "DPA", w: "An intermediate omega-3 fatty acid." },
        { n: "Total Omega-3", w: "Your full omega-3 pool." },
        { n: "Arachidonic Acid (AA)", w: "An omega-6 that fuels inflammatory signaling." },
        { n: "Linoleic Acid (LA)", w: "The most common dietary omega-6." },
        { n: "Total Omega-6", w: "Your full omega-6 pool." }
      ]
    },

    /* ───────────── ADVANCED DIAGNOSTICS ───────────── */
    {
      id: "gut", group: "adv", tile: "tile-02-gut.jpg",
      name: "Gut Microbiome (Gut Zoomer)", tagline: "A full census of the ecosystem that shapes your health.",
      lab: "Vibrant — stool", countLabel: "300+ markers",
      markers: [
        { n: "Commensal & Beneficial Bacteria", w: "A full census of the good and neutral bacteria living in your gut.", why: "Your microbiome shapes immunity, mood, metabolism, and inflammation. Mapping 170+ species shows exactly which beneficial bugs you're missing and which are overgrown, turning vague gut complaints into a targeted plan.", cl: "170+ species" },
        { n: "Microbiome Diversity Indices", w: "Shannon, Simpson, Firmicutes:Bacteroidetes and Prevotella:Bacteroides ratios.", why: "Diversity is a top-line marker of gut health. A richer microbiome is tied to lower inflammation and healthier aging; a narrow one tracks with disease.", cl: "5 indices" },
        { n: "Akkermansia muciniphila", w: "A keystone bacterium for the gut lining.", why: "Akkermansia strengthens your gut barrier and is associated with leanness and metabolic health. Knowing whether you have enough guides very targeted diet and supplement moves." },
        { n: "Pathogenic Bacteria Screen", w: "Screens for disease-causing bacteria including H. pylori.", why: "Hidden pathogens like H. pylori quietly drive fatigue, ulcers, bloating, and inflammation. Finding them turns a vague problem into a treatable one.", cl: "28 pathogens" },
        { n: "Parasites", w: "A screen for intestinal parasites.", cl: "20+ parasites" },
        { n: "Viruses", w: "Screens for gut-relevant viral pathogens.", cl: "7 viruses" },
        { n: "Fungi & Yeast (Candida)", w: "Screens for Candida overgrowth and molds.", why: "Candida and yeast overgrowth can drive sugar cravings, brain fog, and inflammation. It's a common finding worth catching and clearing." },
        { n: "Zonulin (Leaky Gut)", w: "The gatekeeper of intestinal permeability.", why: "When zonulin is high, the gut barrier loosens and undigested particles drive body-wide inflammation, a root cause we trace back here." },
        { n: "Calprotectin", w: "A marker of active gut-wall inflammation.", why: "Calprotectin objectively measures inflammation in the gut wall, separating a truly inflamed gut from ordinary digestive complaints." },
        { n: "Intestinal Health & Immune Markers", w: "Secretory IgA, lactoferrin, lysozyme, beta-defensin-2, MMP-9, S100A12, EPX, LPS antibody.", why: "This cluster shows how your gut's immune system is functioning and whether the barrier is under attack, adding depth beyond a single inflammation marker.", cl: "9 markers" },
        { n: "Short-Chain Fatty Acids", w: "Butyrate, acetate, propionate, valerate, the fuel your gut makes from fiber.", why: "Butyrate and its cousins feed your gut lining and calm inflammation body-wide. Low output signals a fiber or microbiome problem worth fixing.", cl: "4 acids" },
        { n: "Bile Acids", w: "Markers of fat digestion and liver-gut signaling.", cl: "7 acids" },
        { n: "Digestion & Absorption", w: "Pancreatic elastase-1 and fecal fat/steatocrit.", cl: "2 markers" },
        { n: "Beta-Glucuronidase", w: "An enzyme that affects hormone and toxin clearance.", why: "High beta-glucuronidase can recirculate estrogens and toxins your body was trying to excrete, linking gut health directly to hormone balance." },
        { n: "Gluten Reactivity", w: "Anti-gliadin and deamidated gliadin peptide antibodies.", cl: "2 markers" }
      ]
    },
    {
      id: "dutch", group: "adv", tile: "tile-03-hormones.jpg",
      name: "Urinary & Salivary Hormones", tagline: "Your full cortisol rhythm and how you metabolize hormones.",
      lab: "Hormone Zoomer — urine + saliva, diurnal", countLabel: "50+ markers",
      markers: [
        { n: "Cortisol Awakening Response (saliva)", w: "Your stress hormone's morning surge across five samples.", why: "A healthy cortisol spike on waking is what gets you up and sharp. A blunted or exaggerated curve explains wired-but-tired mornings, afternoon crashes, and poor stress resilience that a single blood draw can't show.", cl: "6 samples" },
        { n: "Diurnal Free Cortisol (urine)", w: "Your active cortisol across the full day.", why: "Cortisol is meant to fall across the day. Mapping the whole rhythm reveals whether your stress axis is stuck on or burning out, which shapes how we rebuild your energy and sleep.", cl: "4 timepoints" },
        { n: "Diurnal Cortisone (urine)", w: "The inactive cortisol partner, across the day.", cl: "4 timepoints" },
        { n: "Cortisol Metabolites", w: "Tetrahydrocortisol and tetrahydrocortisone, showing total cortisol output.", cl: "3 markers" },
        { n: "Melatonin (diurnal)", w: "Your sleep and antioxidant hormone across the night.", why: "Measuring melatonin's rhythm shows whether your sleep drive is intact. It's also a potent antioxidant tied to healthy aging.", cl: "4 timepoints" },
        { n: "DHEA & Adrenal Androgens", w: "DHEA, androsterone, etiocholanolone, your adrenal reserve.", cl: "4 markers" },
        { n: "Estrogens (E1, E2, E3)", w: "The three estrogens measured in urine.", cl: "3 estrogens" },
        { n: "Estrogen Metabolites", w: "2-OH, 4-OH, 16-OH and methylated estrogens, the pathway your body uses.", why: "Estrogen can break down into protective or riskier metabolites. Seeing the pathway lets us steer it toward the safer route with targeted nutrition, which matters for long-term cancer risk.", cl: "5 metabolites" },
        { n: "Estrogen Metabolism Ratios", w: "2-OH:16-OH, 2-OH:4-OH and methylation activity.", cl: "3 ratios" },
        { n: "Androgen Metabolites", w: "DHT and 5-alpha/5-beta downstream androgens.", cl: "5 markers" },
        { n: "Progesterone Metabolites", w: "Alpha/beta-pregnanediol and allopregnanolone, tied to sleep and mood.", cl: "3 markers" },
        { n: "8-OHdG", w: "A marker of oxidative damage to your DNA.", why: "8-OHdG measures how much oxidative stress is hitting your DNA, a direct readout of one of the core mechanisms of aging." },
        { n: "BPA & Endocrine Disruptors", w: "Environmental chemicals that scramble hormones.", why: "BPA and similar compounds mimic and block your hormones. Measuring your load tells us how much your environment is working against your endocrine system.", cl: "3 markers" },
        { n: "Bone-Turnover Markers", w: "Signals of how fast bone is being built and broken down.", cl: "2 markers" }
      ]
    },
    {
      id: "food", group: "adv", tile: "tile-04-food.jpg",
      name: "Food Sensitivity", tagline: "The foods quietly working against you.",
      lab: "Vibrant — IgG + IgA", countLabel: "440 foods",
      markers: [
        { n: "440 Food Antigens (IgG + IgA)", w: "Immune reactivity to 440 foods and additives, each tested two ways.", why: "Delayed food reactions can drive fatigue, bloating, joint pain, and skin issues for years without an obvious link. Testing 440 foods against two antibody types gives us a precise map of what to pull, and what you can keep eating.", cl: "880 reactions" },
        { n: "Dairy & Eggs", w: "The most common reactive categories.", cl: "40+ items" },
        { n: "Grains & Gluten", w: "Wheat, gluten, and the full grain family.", cl: "30+ items" },
        { n: "Meats & Poultry", w: "Animal-protein reactivity, often overlooked.", cl: "25+ items" },
        { n: "Seafood & Shellfish", w: "Fish and shellfish, common hidden triggers.", cl: "35+ items" },
        { n: "Legumes, Nuts & Seeds", w: "Frequent hidden triggers in 'clean' diets.", cl: "50+ items" },
        { n: "Vegetables", w: "Even healthy vegetables can be personal triggers.", cl: "70+ items" },
        { n: "Fruits", w: "Common everyday fruits and their reactivity.", cl: "60+ items" },
        { n: "Herbs, Spices & Additives", w: "Seasonings and processed-food chemicals.", cl: "60+ items" }
      ]
    },
    {
      id: "metals", group: "adv", tile: "tile-05-toxins.jpg",
      name: "Heavy Metals & Toxins", tagline: "The toxic load your body has quietly accumulated.",
      lab: "Vibrant — urine, creatinine-normalized", countLabel: "18 elements",
      markers: [
        { n: "Mercury", w: "A neurotoxin from fish and dental sources.", why: "Mercury accumulates in the brain and kidneys and can drive fatigue, brain fog, and tremor. High-fish-eating executives are a classic case, and it's fully addressable once measured." },
        { n: "Lead", w: "A metal linked to heart and cognitive risk.", why: "Even low chronic lead exposure raises blood pressure and cardiovascular and cognitive risk over decades. It's stored in bone and invisible without testing." },
        { n: "Arsenic", w: "A toxin from water and food, linked to disease." },
        { n: "Cadmium", w: "A metal from smoke and industry that harms kidneys." },
        { n: "Aluminum", w: "A common environmental metal tied to neurotoxicity." },
        { n: "Gadolinium", w: "A residue left behind by contrast MRI scans." },
        { n: "Antimony, Barium, Bismuth, Cesium", w: "Environmental and industrial exposures.", c: 4 },
        { n: "Nickel, Palladium, Platinum, Tellurium", w: "Metals from industry, jewelry, and electronics.", c: 4 },
        { n: "Thallium, Tin, Tungsten, Uranium", w: "Rarer but meaningful toxic exposures.", c: 4 }
      ]
    },
    {
      id: "genetics", group: "adv", tile: "tile-22-genetics.jpg",
      name: "Genetic Testing", tagline: "The DNA that shapes your risk and your response.",
      lab: "Genomic panel", countLabel: "key genes",
      markers: [
        { n: "ApoE", w: "Your genetic risk gene for Alzheimer's and heart disease.", why: "ApoE status is one of the most important things you can know about your long-term brain and heart risk. Carriers benefit from a far more aggressive prevention plan, started decades early, and that only happens if we look." },
        { n: "MTHFR & Methylation Genes", w: "How well you process folate and B vitamins.", why: "MTHFR variants change how you handle folate and clear homocysteine. Knowing your genotype tells us which form of B vitamins your body can actually use." },
        { n: "Detoxification Genes", w: "How efficiently you clear toxins and hormones." },
        { n: "Vitamin D Receptor", w: "How well your cells respond to vitamin D." },
        { n: "Caffeine & Metabolism Genes", w: "How fast you process caffeine and other compounds." },
        { n: "Inflammation & Cardiovascular Variants", w: "Genetic tendencies toward inflammation and heart risk." }
      ]
    },

    /* ───────────── PERFORMANCE ───────────── */
    {
      id: "dexa", group: "perf", tile: "tile-06-dexa.jpg",
      name: "DEXA Body Composition", tagline: "The gold-standard scan of muscle, fat, and bone.",
      lab: "DEXA scan", countLabel: "40+ measures",
      markers: [
        { n: "Visceral Adipose Tissue (VAT)", w: "The dangerous fat around your organs: mass, volume, and area.", why: "Visceral fat is the metabolically toxic fat that drives insulin resistance, heart disease, and inflammation, and you can carry a lot of it while looking lean. DEXA measures it precisely so we can target it.", cl: "3 measures" },
        { n: "Lean Mass (total + regional)", w: "Your muscle, broken out by each arm, leg, and the trunk.", why: "Muscle mass predicts how well you age, recover, and survive illness. Tracking it region by region shows imbalances and makes sure our training and nutrition are actually building it.", cl: "6 regions" },
        { n: "Body Fat % (total + regional)", w: "Precise fat percentage across every body region.", why: "Regional body fat shows where you store fat and how that pattern is changing, a far more useful readout than a single scale weight.", cl: "6 regions" },
        { n: "Fat Mass (regional)", w: "Absolute fat in each arm, leg, trunk, and total.", cl: "6 regions" },
        { n: "Bone Mineral Density", w: "Bone strength at the spine, hips, femoral neck, and forearm.", why: "Bone loss is silent until a fracture. DEXA catches thinning bone early, when strength training, nutrition, and hormones can still reverse it.", cl: "4+ sites" },
        { n: "T-score & Z-score", w: "Your bone density versus young adults and versus your age.", cl: "per site" },
        { n: "Fat-Free Mass Index & Fat Mass Index", w: "Muscularity and fatness standardized for your height.", cl: "2 indices" },
        { n: "Android : Gynoid Ratio", w: "Where you store fat, and how risky that pattern is." },
        { n: "Bone Mineral Content", w: "Total mineral in your skeleton, regional and total." },
        { n: "Resting Metabolic Rate", w: "Estimated calories you burn at rest." }
      ]
    },
    {
      id: "vo2", group: "perf", tile: "tile-07-vo2.jpg",
      name: "VO₂ Max & Cardiorespiratory", tagline: "The single strongest predictor of how long you'll live.",
      lab: "Metabolic cart test", countLabel: "18+ metrics",
      markers: [
        { n: "VO₂ Max", w: "Your body's maximum oxygen uptake, absolute and relative.", why: "VO₂ max is the strongest single predictor of longevity we have, stronger than smoking, diabetes, or blood pressure. Moving from low to even average fitness cuts mortality risk more than almost any drug. This is the number we most want to raise.", cl: "2 values" },
        { n: "Ventilatory Threshold 1 (Aerobic)", w: "The point where fat-burning gives way to harder effort.", why: "VT1 marks your true easy-training ceiling. Training around it builds your aerobic base and mitochondria, the engine of endurance and metabolic health.", cl: "VO₂ + HR" },
        { n: "Ventilatory Threshold 2 (Anaerobic)", w: "The point where lactate outpaces clearance.", why: "VT2 defines your sustainable hard effort. Knowing it lets us prescribe intensity precisely instead of guessing, so every session drives the adaptation we want.", cl: "VO₂ + HR" },
        { n: "Max & Threshold Heart Rates", w: "Your true max HR and the HR at each threshold.", cl: "3 values" },
        { n: "Metabolic Efficiency", w: "Fat and carb oxidation rates, FatMax, and crossover point.", why: "This shows how well you burn fat for fuel. A body that burns fat efficiently has steadier energy, better endurance, and healthier metabolism.", cl: "4 metrics" },
        { n: "Respiratory Exchange Ratio (RER)", w: "Which fuel you're burning at any intensity." },
        { n: "Ventilation Metrics", w: "Breathing rate, tidal volume, and total ventilation.", cl: "3 metrics" },
        { n: "Oxygen Pulse", w: "Oxygen delivered per heartbeat, a stroke-volume proxy." },
        { n: "Peak METs", w: "Your peak metabolic output in everyday terms." },
        { n: "Heart Rate Recovery", w: "How fast your heart settles after peak effort.", why: "A fast heart-rate recovery reflects a healthy nervous system and predicts lower mortality. It's a simple, trackable sign of improving fitness." },
        { n: "CO₂ Tolerance (BOLT)", w: "How well you handle carbon dioxide and control your breath.", why: "CO₂ tolerance reflects breathing efficiency and stress resilience. A low score points to over-breathing patterns that sabotage recovery and sleep, and it's trainable." }
      ]
    },
    {
      id: "strength-mobility", group: "perf", tile: "tile-09-strength.jpg",
      name: "Strength & Movement", tagline: "Objective benchmarks of power, grip, and mobility.",
      lab: "In-person assessment", countLabel: "10+ measures",
      markers: [
        { n: "Max-Effort Dead Hang (Grip)", w: "Grip endurance, a proxy for whole-body strength and longevity.", why: "Grip strength is a well-validated marker of biological age and predicts mortality. It's a simple test that tells us a lot about your resilience and where to start training." },
        { n: "8RM Rear-Foot-Elevated Split Squat", w: "Single-leg strength benchmarked to your body.", why: "Single-leg strength exposes imbalances and predicts real-world function and fall risk as you age. It's a cleaner picture of usable strength than a two-legged lift." },
        { n: "Ankle Dorsiflexion", w: "Ankle range that governs squatting and running mechanics." },
        { n: "Hip Flexion & Heel-to-Butt", w: "Hip mobility that drives power and protects the low back.", c: 2 },
        { n: "Shoulder Flexion & Abduction", w: "Overhead range for safe pressing and pulling.", c: 2 },
        { n: "Lumbopelvic Flexion", w: "Core control and spinal mechanics under load." },
        { n: "Wrist Extension", w: "Wrist range needed for loading and pressing." }
      ]
    },

    /* ───────────── BLACK EXCLUSIVES ───────────── */
    {
      id: "mri", group: "black", tile: "tile-20-mri.jpg", private: true,
      name: "Full-Body MRI", tagline: "Whole-body imaging that catches what bloodwork can't.",
      lab: "Second Prime Black exclusive", countLabel: "500+ conditions",
      markers: [
        { n: "Whole-Body Screen", w: "Radiation-free, contrast-free imaging of 33 organs in under an hour.", why: "A full-body MRI can catch tumors, aneurysms, and structural problems years before symptoms, with no radiation. For Private Advisory members, it's the deepest layer of proactive screening we offer.", cl: "33 organs" },
        { n: "Cancer & Tumor Detection", w: "Screens the whole body for suspicious growths and masses.", why: "The scan can flag early-stage cancers throughout the body, including kidney, liver, pancreatic, and ovarian, that have no routine screening. Early detection is the single biggest lever on cancer survival.", cl: "throughout body" },
        { n: "Brain & Neurological Imaging", w: "Brain, spine, and nerves for aneurysms, lesions, and MS.", cl: "brain + spine" },
        { n: "Cardiovascular Findings", w: "Aneurysms and vascular abnormalities." },
        { n: "Organ Health", w: "Liver, kidneys, pancreas, spleen, adrenals, prostate, and more.", cl: "13+ organs" },
        { n: "Musculoskeletal & Spine", w: "Discs, joints, and soft tissue throughout the body.", cl: "joints + discs" },
        { n: "500+ Conditions Screened", w: "A single scan reviewed against more than 500 possible findings.", cl: "500+ conditions" }
      ]
    },
    {
      id: "cancer", group: "black", tile: "tile-21-cancer.jpg", private: true,
      name: "Early Cancer Detection", tagline: "One blood draw that screens for 50+ cancers.",
      lab: "Galleri (MCED) — Second Prime Black exclusive", countLabel: "50+ cancers",
      markers: [
        { n: "Multi-Cancer Signal Detection", w: "One blood draw screening for a signal shared by 50+ cancers.", why: "The Galleri test reads cancer DNA shed into your blood and can flag more than 50 cancers, most of which have no routine screening today. Catching cancer at its earliest stage is the difference-maker for survival, and it's a cornerstone of the Black program.", cl: "50+ cancers" },
        { n: "Cancer Signal Origin", w: "If a signal is found, predicts where in the body it started.", why: "Pinpointing the likely origin, with high accuracy, tells your care team exactly where to look next, turning a positive screen into fast, focused follow-up." },
        { n: "Targeted Methylation Analysis", w: "Reads cancer-specific DNA methylation patterns.", why: "Galleri analyzes methylation across more than 100,000 genomic regions and over a million methylation sites, the epigenetic fingerprints that distinguish cancer DNA from healthy DNA.", cl: "100,000+ regions" }
      ]
    },

    /* ───────────── WE ALSO ASSESS ───────────── */
    {
      id: "nutrition", group: "also", tile: "tile-10-nutrition.jpg",
      name: "Nutritional Analysis", tagline: "Everything you eat and drink, mapped to what your body needs.",
      lab: "7-day capture + analysis", countLabel: "full diet audit",
      markers: [
        { n: "7-Day Food & Beverage Log", w: "A full week of everything you eat and drink.", why: "Your labs tell us what's happening inside; your food log tells us why. A full week of intake is where most of the actionable answers live." },
        { n: "Macronutrient Intake", w: "Your real protein, carb, and fat balance.", why: "Protein in particular is where most high performers fall short. Measuring actual intake lets us protect muscle and steady your energy." },
        { n: "Micronutrient Intake vs. Needs", w: "Where your diet falls short of what your labs demand." },
        { n: "Hydration & Electrolytes", w: "Fluid and electrolyte patterns across the day." },
        { n: "Alcohol & Caffeine", w: "Intake and timing, and how they hit your sleep and stress." },
        { n: "Meal Timing & Patterns", w: "When and how you eat, not just what." },
        { n: "Fiber & Protein Adequacy", w: "Two of the biggest levers on gut and body composition." }
      ]
    },
    {
      id: "lifestyle", group: "also", tile: "tile-11-lifestyle.jpg",
      name: "Lifestyle & Sleep Analysis", tagline: "How you sleep, move, and recover in real life.",
      lab: "Wearable data + logs", countLabel: "wearable + logs",
      markers: [
        { n: "Sleep Duration & Quality", w: "How much and how well you actually sleep.", why: "Sleep is the foundation every other result sits on. Poor sleep sabotages hormones, recovery, and metabolism, so we measure it before we change anything else." },
        { n: "Wearable Data (HRV, RHR, stages)", w: "Heart-rate variability, resting heart rate, and sleep stages.", why: "HRV and resting heart rate are daily windows into your nervous system and recovery. Trends here tell us whether the plan is working long before labs change." },
        { n: "Daily Activity & Steps", w: "Your real movement outside of workouts." },
        { n: "Training Load", w: "The volume and intensity of your exercise." },
        { n: "Sedentary Time", w: "How much of your day is spent sitting." },
        { n: "Recovery Habits", w: "Sauna, cold, breathwork, and downtime." },
        { n: "Light & Circadian Exposure", w: "Light patterns that set your body clock." }
      ]
    },
    {
      id: "resilience", group: "also", tile: "tile-17-resilience.jpg",
      name: "Stress & Resilience Profile", tagline: "The mental and nervous-system load you're carrying.",
      lab: "Validated questionnaires", countLabel: "validated scales",
      markers: [
        { n: "Perceived Stress Scale", w: "A validated measure of how much stress you feel.", why: "Chronic stress drives cortisol, poor sleep, and disease. Quantifying it turns a vague 'I'm stressed' into something we can track and move." },
        { n: "Resilience Assessment", w: "How well you bounce back from load and setbacks." },
        { n: "Stressor Tracker", w: "The specific pressures showing up week to week." },
        { n: "HRV & Recovery Trends", w: "Nervous-system balance from your wearable data." },
        { n: "Burnout Indicators", w: "Early signs of running past your limits." }
      ]
    },
    {
      id: "history", group: "also", tile: "tile-19-bioage.jpg",
      name: "Symptom, History & Goals", tagline: "Your full story, so the data has context.",
      lab: "Comprehensive intake", countLabel: "full intake",
      markers: [
        { n: "Full Symptom Assessment", w: "A detailed inventory of what you're experiencing across every system.", why: "Symptoms are the bridge between your labs and your life. A thorough symptom map makes sure we treat how you feel, not just the numbers.", cl: "100+ symptoms" },
        { n: "Medical & Family History", w: "Your past conditions and inherited risks." },
        { n: "Medications & Supplements", w: "Everything you're currently taking, and why." },
        { n: "Prior Labs & Imaging", w: "Past results, so we can see the trend, not just today." },
        { n: "Goals & Priorities", w: "What 'fully restored' actually means to you.", why: "The whole plan is built backward from your goals. Getting these clear up front is what makes the assessment personal instead of generic." }
      ]
    }
  ]
};

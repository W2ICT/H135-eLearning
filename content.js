const CHAPTERS = [
{id:0,num:"00",title:"Introduction",sub:"Course Overview & Abbreviations",icon:"📋",color:"#64748b",bg:"rgba(100,116,139,.15)",
desc:"Overview of the EC135 P3H/T3H Training Manual, its structure, revision history, and key abbreviations used throughout the course.",
obj:["Understand course structure and module sequence","Identify key abbreviations used in the training manual","Know the publisher and revision history"],
sections:[
{t:"Course Overview",i:"📚",h:`<p>Welcome to the <strong>Airbus EC135 P3H / T3H Pilot Training Course</strong>. This course trains pilots on all major helicopter systems in accordance with ATA 104 specifications.</p>
<p>The training manual was published by <strong>Airbus Helicopters Deutschland GmbH</strong>, Training Academy, Donauwörth, Germany. It is for instruction only and is not subject to a revision service.</p>
<div class="callout c-info"><div class="ci">ℹ️</div><div>Revision 04 — January 2019. Airbus Helicopters reserves the right to make design or manufacturing changes without notice.</div></div>`},
{t:"Course Modules (01–19)",i:"📁",h:`<p>The course consists of <strong>19 modules</strong> covering every major system:</p>
<ul><li><strong>01</strong> — First Contact with the Helicopter</li><li><strong>02</strong> — Integrated Modular Avionics (Helionix)</li><li><strong>03</strong> — Handling of the Helicopter</li><li><strong>04</strong> — Lifting System</li><li><strong>05</strong> — Fuselage</li><li><strong>06</strong> — Tail Unit</li><li><strong>07</strong> — Flight Control</li><li><strong>08</strong> — Hydraulic System</li><li><strong>09</strong> — Landing Gear</li><li><strong>10</strong> — Fuel System</li><li><strong>11</strong> — Power Plant</li><li><strong>12</strong> — Fire Protection System</li><li><strong>13</strong> — Ice and Rain Protection</li><li><strong>14</strong> — Equipment and Furnishing</li><li><strong>15</strong> — Heating and Ventilation</li><li><strong>16</strong> — Avionics Generalities</li><li><strong>17</strong> — Electrical System</li><li><strong>18</strong> — Inspections</li><li><strong>19</strong> — Autopilot</li></ul>
<div class="dg"><p class="dg-title">19 Modules — EC135 Training Programme</p><svg viewBox="0 0 656 88" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m0" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="#334155"/></marker></defs>
<rect x="2" y="2" width="62" height="24" rx="3" fill="#1e3a5f"/><text x="33" y="12" text-anchor="middle" fill="#60a5fa" font-size="8" font-weight="bold">01</text><text x="33" y="22" text-anchor="middle" fill="#64748b" font-size="6.5">First Contact</text>
<rect x="68" y="2" width="62" height="24" rx="3" fill="#1e1f5e"/><text x="99" y="12" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="bold">02</text><text x="99" y="22" text-anchor="middle" fill="#64748b" font-size="6.5">Helionix IMA</text>
<rect x="134" y="2" width="62" height="24" rx="3" fill="#2c1f00"/><text x="165" y="12" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">03</text><text x="165" y="22" text-anchor="middle" fill="#64748b" font-size="6.5">Handling</text>
<rect x="200" y="2" width="62" height="24" rx="3" fill="#0c3342"/><text x="231" y="12" text-anchor="middle" fill="#22d3ee" font-size="8" font-weight="bold">04</text><text x="231" y="22" text-anchor="middle" fill="#64748b" font-size="6.5">Lifting System</text>
<rect x="266" y="2" width="62" height="24" rx="3" fill="#052e1c"/><text x="297" y="12" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">05</text><text x="297" y="22" text-anchor="middle" fill="#64748b" font-size="6.5">Fuselage</text>
<rect x="332" y="2" width="62" height="24" rx="3" fill="#062938"/><text x="363" y="12" text-anchor="middle" fill="#38bdf8" font-size="8" font-weight="bold">06</text><text x="363" y="22" text-anchor="middle" fill="#64748b" font-size="6.5">Tail Unit</text>
<rect x="398" y="2" width="62" height="24" rx="3" fill="#1a1a55"/><text x="429" y="12" text-anchor="middle" fill="#818cf8" font-size="8" font-weight="bold">07</text><text x="429" y="22" text-anchor="middle" fill="#64748b" font-size="6.5">Flight Control</text>
<rect x="464" y="2" width="62" height="24" rx="3" fill="#072340"/><text x="495" y="12" text-anchor="middle" fill="#38bdf8" font-size="8" font-weight="bold">08</text><text x="495" y="22" text-anchor="middle" fill="#64748b" font-size="6.5">Hydraulic</text>
<rect x="530" y="2" width="62" height="24" rx="3" fill="#1e0a4e"/><text x="561" y="12" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="bold">09</text><text x="561" y="22" text-anchor="middle" fill="#64748b" font-size="6.5">Landing Gear</text>
<rect x="596" y="2" width="58" height="24" rx="3" fill="#300a0a"/><text x="625" y="12" text-anchor="middle" fill="#f87171" font-size="8" font-weight="bold">10</text><text x="625" y="22" text-anchor="middle" fill="#64748b" font-size="6.5">Fuel System</text>
<rect x="2" y="34" width="69" height="24" rx="3" fill="#2c1200"/><text x="36" y="44" text-anchor="middle" fill="#fb923c" font-size="8" font-weight="bold">11</text><text x="36" y="54" text-anchor="middle" fill="#64748b" font-size="6.5">Power Plant</text>
<rect x="75" y="34" width="69" height="24" rx="3" fill="#2c0808"/><text x="109" y="44" text-anchor="middle" fill="#f87171" font-size="8" font-weight="bold">12</text><text x="109" y="54" text-anchor="middle" fill="#64748b" font-size="6.5">Fire Protect.</text>
<rect x="148" y="34" width="69" height="24" rx="3" fill="#061e30"/><text x="182" y="44" text-anchor="middle" fill="#38bdf8" font-size="8" font-weight="bold">13</text><text x="182" y="54" text-anchor="middle" fill="#64748b" font-size="6.5">Ice &amp; Rain</text>
<rect x="221" y="34" width="69" height="24" rx="3" fill="#053320"/><text x="255" y="44" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">14</text><text x="255" y="54" text-anchor="middle" fill="#64748b" font-size="6.5">Equipment</text>
<rect x="294" y="34" width="69" height="24" rx="3" fill="#2d1d06"/><text x="328" y="44" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">15</text><text x="328" y="54" text-anchor="middle" fill="#64748b" font-size="6.5">Heat &amp; Vent</text>
<rect x="367" y="34" width="69" height="24" rx="3" fill="#1e0a4e"/><text x="401" y="44" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="bold">16</text><text x="401" y="54" text-anchor="middle" fill="#64748b" font-size="6.5">Avionics Gen</text>
<rect x="440" y="34" width="69" height="24" rx="3" fill="#2a1d00"/><text x="474" y="44" text-anchor="middle" fill="#facc15" font-size="8" font-weight="bold">17</text><text x="474" y="54" text-anchor="middle" fill="#64748b" font-size="6.5">Electrical</text>
<rect x="513" y="34" width="69" height="24" rx="3" fill="#161e2c"/><text x="547" y="44" text-anchor="middle" fill="#94a3b8" font-size="8" font-weight="bold">18</text><text x="547" y="54" text-anchor="middle" fill="#64748b" font-size="6.5">Inspections</text>
<rect x="586" y="34" width="68" height="24" rx="3" fill="#1a0e55"/><text x="620" y="44" text-anchor="middle" fill="#818cf8" font-size="8" font-weight="bold">19</text><text x="620" y="54" text-anchor="middle" fill="#64748b" font-size="6.5">Autopilot AFCS</text>
<text x="328" y="76" text-anchor="middle" fill="#1e293b" font-size="7">ATA 104 Standard · Airbus Helicopters Deutschland GmbH · For Instruction Only</text>
</svg></div>`},
{t:"Key Abbreviations",i:"🔤",h:`<p>Important abbreviations used throughout this training manual:</p>
<ul><li><strong>AMC</strong> — Aircraft Management Computer</li><li><strong>AFCS</strong> — Automatic Flight Control System</li><li><strong>AHRS</strong> — Attitude and Heading Reference System</li><li><strong>ADC</strong> — Air Data Computer</li><li><strong>ARIS</strong> — Anti Resonance Isolation System</li><li><strong>BMR</strong> — Bearingless Main Rotor</li><li><strong>DAFCS</strong> — Digital Automatic Flight Control System</li><li><strong>DTD</strong> — Data Transfer Device</li><li><strong>EECU</strong> — Electronic Engine Control Unit (Turbomeca)</li><li><strong>EEC</strong> — Electronic Engine Control (Pratt &amp; Whitney)</li><li><strong>FLI</strong> — First Limitation Indicator</li><li><strong>FND</strong> — Flight and Navigation Display</li><li><strong>IMA</strong> — Integrated Modular Avionics</li><li><strong>MFD</strong> — Multi-Function Display</li><li><strong>MGB</strong> — Main Gear Box</li><li><strong>MTOM</strong> — Maximum Take-Off Mass</li><li><strong>OEI</strong> — One Engine Inoperative</li><li><strong>SAS</strong> — Stability Augmentation System</li><li><strong>TGB</strong> — Tail (Rotor) Gear Box</li><li><strong>VMS</strong> — Vehicle Management System</li></ul>`}
],
kd:[{l:"Document",v:"EC135 P3H/T3H Training Manual"},{l:"Issue",v:"R04 — January 2019"},{l:"Publisher",v:"Airbus Helicopters Deutschland GmbH"},{l:"Standard",v:"ATA 104"},{l:"Aircraft",v:"EC135 P3H and EC135 T3H"}],
quiz:[
{q:"Which certification specification governs the EC135 P3H/T3H?",o:["CS-29 Large Rotorcraft","CS-27 Small Rotorcraft","CS-25 Large Aeroplanes","FAR Part 27"],a:1,e:"The EC135 is certified to EASA CS-27 (Certification Specification for Small Rotorcraft)."},
{q:"Who published the EC135 P3H/T3H Training Manual?",o:["Turbomeca France","Airbus Helicopters Deutschland GmbH","Pratt & Whitney Canada","Airbus SAS Toulouse"],a:1,e:"The manual is published by Airbus Helicopters Deutschland GmbH, Training Academy, Donauwörth."},
{q:"What does ARIS stand for?",o:["Automatic Rotor Isolation System","Anti Resonance Isolation System","Airframe Rigidity Isolation System","Auxiliary Rotor Integration System"],a:1,e:"ARIS = Anti Resonance Isolation System — it isolates the Main Gearbox vibrations from the fuselage."},
{q:"What does FLI stand for in the Helionix context?",o:["Flight Limitation Indicator","First Limitation Indicator","Fuel Load Indicator","Flight Level Instrument"],a:1,e:"FLI = First Limitation Indicator. It shows the primary power limit parameter on the display."},
{q:"How many training modules does the EC135 P3H/T3H course contain?",o:["15","17","19","21"],a:2,e:"The course contains 19 modules (Modules 01 through 19) covering all major aircraft systems."}
]},

{id:1,num:"01",title:"First Contact with the Helicopter",sub:"General Description & Dimensions",icon:"🚁",color:"#3b82f6",bg:"rgba(59,130,246,.15)",
desc:"Development history of the EC135, engine variant overview, general system description, cockpit arrangement, and aircraft dimensions.",
obj:["Describe the development history of the EC135","Identify engine variants (P and T series)","Know the MTOM for EC135 P3H/T3H","Identify main structural components"],
sections:[
{t:"Development History",i:"📜",h:`<p>The EC135 originates from the <strong>BO108</strong>, which first flew on 15 October 1988. Customer feedback led to an enlarged cabin, improved visibility, and the adoption of the <strong>Fenestron® Anti-Torque system</strong> developed by Aerospatiale.</p>
<p>Certification by the German LBA and the American FAA was completed in <strong>mid-1996</strong>. The P3H/T3H variant added the <strong>Helionix® Integrated Modular Avionics</strong> suite.</p>
<div class="callout c-info"><div class="ci">ℹ️</div><div>Airbus Helicopters was previously known as Eurocopter, and before that as MBB/Bölkow — the original designers of the hingeless rotor system first tested in 1962.</div></div>`},
{t:"Engine Variants",i:"⚙️",h:`<p>The EC135 family covers multiple engine variants:</p>
<ul><li><strong>EC135 P1</strong> — Pratt &amp; Whitney PW206B</li><li><strong>EC135 P2/P2+</strong> — Pratt &amp; Whitney PW206B2</li><li><strong>EC135 P3</strong> — Pratt &amp; Whitney PW206B3</li><li><strong>EC135 T1</strong> — Turbomeca ARRIUS 2B1/2B1A</li><li><strong>EC135 T2/T2+</strong> — Turbomeca ARRIUS 2B2</li><li><strong>EC135 T3</strong> — Turbomeca ARRIUS 2B2 Plus</li><li><strong>EC135 P3H / T3H</strong> — P3 or T3 with Helionix® IMA</li></ul>
<p>Both engine types are in the <strong>450 kW class</strong>.</p>`},
{t:"General Description",i:"📐",h:`<p>The EC135 is a <strong>light multi-purpose twin-engine helicopter</strong> certified to CS-27. The basic version seats <strong>7 occupants</strong> (2 crew + 5 passengers), optionally 8.</p>
<ul><li><strong>Fuselage:</strong> Semi-monocoque — sheet metal primary structure with composite cabin frame, doors, tail boom, and engine cowling</li><li><strong>Main Rotor:</strong> 4-blade Bearingless Main Rotor (BMR) with flexbeam hub; pitch control via glass/carbon fibre cuffs</li><li><strong>Tail Rotor:</strong> 10-blade Fenestron® (shrouded fan-in-tail rotor)</li><li><strong>Landing Gear:</strong> Two aluminium crosstubes + two skids</li><li><strong>Fuel:</strong> Two bladder tanks under cabin floor</li><li><strong>Electrical:</strong> Fully redundant 28 V DC system</li></ul>
<div class="dg"><p class="dg-title">H135 — Main Components Overview</p><svg viewBox="0 0 660 130" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m1" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="#334155"/></marker></defs>
<!-- Main Rotor shaft at top -->
<line x1="80" y1="18" x2="390" y2="18" stroke="#22d3ee" stroke-width="2.5"/><text x="235" y="14" text-anchor="middle" fill="#22d3ee" font-size="7.5" font-weight="bold">◀── 4-Blade Bearingless Main Rotor (BMR) · Ø 10.2 m ──▶</text>
<!-- MGB -->
<rect x="188" y="22" width="96" height="28" rx="4" fill="#134e4a" stroke="rgba(52,211,153,.4)" stroke-width="1.5"/><text x="236" y="34" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">Main Gearbox</text><text x="236" y="44" text-anchor="middle" fill="#475569" font-size="7">MGB · ARIS · 14.923:1</text>
<!-- Engine 1 -->
<rect x="300" y="26" width="80" height="26" rx="4" fill="#2c1200" stroke="rgba(251,146,60,.35)" stroke-width="1"/><text x="340" y="37" text-anchor="middle" fill="#fb923c" font-size="8.5" font-weight="bold">Engine 1</text><text x="340" y="47" text-anchor="middle" fill="#475569" font-size="7">PW206B3 / ARRIUS</text>
<!-- Engine 2 -->
<rect x="300" y="58" width="80" height="26" rx="4" fill="#2c1200" stroke="rgba(251,146,60,.35)" stroke-width="1"/><text x="340" y="69" text-anchor="middle" fill="#fb923c" font-size="8.5" font-weight="bold">Engine 2</text><text x="340" y="79" text-anchor="middle" fill="#475569" font-size="7">450 kW class each</text>
<!-- Cockpit -->
<rect x="20" y="40" width="80" height="48" rx="6" fill="#0a1830" stroke="rgba(96,165,250,.3)" stroke-width="1.5"/><text x="60" y="62" text-anchor="middle" fill="#60a5fa" font-size="8.5" font-weight="bold">Cockpit</text><text x="60" y="74" text-anchor="middle" fill="#475569" font-size="7">Helionix®</text><text x="60" y="84" text-anchor="middle" fill="#475569" font-size="7">3 × MFD</text>
<!-- Fuselage -->
<rect x="100" y="52" width="200" height="52" rx="6" fill="#0e1e38" stroke="rgba(99,179,237,.2)" stroke-width="1.5"/><text x="200" y="76" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="bold">Fuselage &amp; Cabin</text><text x="200" y="88" text-anchor="middle" fill="#475569" font-size="7">7 seats · Composite + Sheet metal</text>
<!-- Tail Boom -->
<rect x="390" y="63" width="168" height="14" rx="3" fill="#1a2535"/><text x="474" y="74" text-anchor="middle" fill="#64748b" font-size="7.5">Tail Boom — Full composite</text>
<!-- H-Stab -->
<rect x="478" y="42" width="68" height="14" rx="2" fill="#1a2535"/><text x="512" y="52" text-anchor="middle" fill="#64748b" font-size="7">H. Stabilizer (adj.)</text>
<!-- Fenestron -->
<circle cx="600" cy="69" r="24" fill="none" stroke="rgba(56,189,248,.5)" stroke-width="2"/>
<circle cx="600" cy="69" r="18" fill="#0a2535"/>
<text x="600" y="67" text-anchor="middle" fill="#38bdf8" font-size="8" font-weight="bold">Fenestron®</text>
<text x="600" y="78" text-anchor="middle" fill="#475569" font-size="6.5">10 blades</text>
<!-- Landing Gear -->
<rect x="100" y="106" width="66" height="8" rx="2" fill="#1e293b"/><rect x="234" y="106" width="66" height="8" rx="2" fill="#1e293b"/>
<text x="200" y="122" text-anchor="middle" fill="#334155" font-size="7">Skid landing gear · Track 2.3 m · MTOM 2,980 kg</text>
</svg></div>`},
{t:"Cockpit Arrangement",i:"🎛️",h:`<p>The cockpit features the <strong>Helionix® avionics suite</strong>. Main areas:</p>
<ul><li><strong>Overhead Console</strong> — Circuit breakers and system control switches</li><li><strong>Instrument Panel</strong> — Three MFDs (pilot, centre, copilot); IESI standby instrument</li><li><strong>Centre Console</strong> — Engine controls, fuel, lighting, radios</li><li><strong>Slant Console</strong> — Communication and navigation management</li></ul>
<p>Flight controls: <strong>cyclic stick</strong>, <strong>collective lever</strong>, and <strong>anti-torque pedals</strong> for both pilot and copilot positions.</p>`}
],
kd:[{l:"MTOM (P3H & T3H)",v:"2,980 kg"},{l:"MTOM with external load",v:"2,900 kg (base) / up to 2,980 kg"},{l:"Seating",v:"7 standard (2 crew + 5 pax), option 8"},{l:"Main rotor blades",v:"4 (Bearingless BMR)"},{l:"Tail rotor blades",v:"10 (Fenestron)"},{l:"Engine class",v:"450 kW class (each engine)"},{l:"First EC135 certification",v:"Mid-1996 (LBA / FAA)"},{l:"Predecessor",v:"BO108 (first flight 15 Oct 1988)"}],
quiz:[
{q:"When was the BO108 (EC135 predecessor) first flown?",o:["October 15, 1985","October 15, 1988","March 12, 1990","June 1, 1992"],a:1,e:"The BO108 first flew on 15 October 1988, later evolving into the EC135."},
{q:"What is the MTOM of the EC135 P3H/T3H?",o:["2,720 kg","2,835 kg","2,910 kg","2,980 kg"],a:3,e:"The EC135 P3H and T3H are both certified for a MTOM of 2,980 kg."},
{q:"How many blades does the Fenestron® tail rotor have?",o:["8","10","12","14"],a:1,e:"The Fenestron® (fan-in-shroud tail rotor) has 10 blades rotating inside a housing integrated in the tail boom."},
{q:"What engine is fitted to the EC135 P3H?",o:["Turbomeca ARRIUS 2B2 Plus","Pratt & Whitney PW206B3","Turbomeca ARRIUS 2B1","Pratt & Whitney PT6B-37A"],a:1,e:"The EC135 P3H is powered by two Pratt & Whitney Canada PW206B3 engines."},
{q:"What does BMR stand for?",o:["Blade Moment Rotor","Bearingless Main Rotor","Balanced Modular Rotor","Blade Mass Regulation"],a:1,e:"BMR = Bearingless Main Rotor. The 4-blade rotor uses a flexbeam hub — no conventional bearings."}
]},

{id:2,num:"02",title:"Integrated Modular Avionics (Helionix)",sub:"IMA Architecture & Displays",icon:"🖥️",color:"#8b5cf6",bg:"rgba(139,92,246,.15)",
desc:"The Helionix® IMA system architecture, MFD display formats, AMC computers, alerting system, FLI power indication, HTAWS, ACAS, and flight data recording.",
obj:["Describe the Helionix® IMA architecture","Identify MFD display formats (FND, NAVD, VMS)","Explain the First Limitation Indicator (FLI)","Understand the alerting system hierarchy"],
sections:[
{t:"IMA Architecture Overview",i:"🏗️",h:`<p>The <strong>Helionix®</strong> is an <strong>Integrated Modular Avionics (IMA)</strong> system using software partitioning (ARINC 653) to host multiple applications on shared hardware platforms.</p>
<p>Main capabilities: flight management &amp; control, navigation management, vehicle &amp; engine management, mission management.</p>
<p>Key hardware components:</p>
<ul><li><strong>3 × MFD</strong> — Multi-Function Displays (pilot, centre, copilot)</li><li><strong>2 × AMC</strong> — Aircraft Management Computers</li><li><strong>1 × IESI</strong> — Integrated Electronic Standby Instrument</li><li><strong>2 × AHRS</strong> — Attitude and Heading Reference Systems</li><li><strong>1 × ADC</strong> — Air Data Computer</li><li><strong>1 × Magnetometer</strong></li><li><strong>1 × DTD</strong> — Data Transfer Device</li><li><strong>1 × MCP</strong> — Multi-Control Panel</li><li><strong>1 × Memory Module</strong></li></ul>
<div class="dg"><p class="dg-title">Helionix® IMA — System Architecture Block Diagram</p><svg viewBox="0 0 660 185" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m2a" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="#4b6280"/></marker></defs>
<!-- Column labels -->
<text x="60" y="14" text-anchor="middle" fill="#475569" font-size="8.5" font-weight="bold">SENSORS</text>
<text x="270" y="14" text-anchor="middle" fill="#475569" font-size="8.5" font-weight="bold">COMPUTE CORE</text>
<text x="490" y="14" text-anchor="middle" fill="#475569" font-size="8.5" font-weight="bold">DISPLAYS / OUTPUT</text>
<!-- Sensors -->
<rect x="6" y="22" width="108" height="22" rx="3" fill="#1a2e4a"/><text x="60" y="36" text-anchor="middle" fill="#93c5fd" font-size="8.5">2 × AHRS (ATT / HDG)</text>
<rect x="6" y="48" width="108" height="22" rx="3" fill="#1a2e4a"/><text x="60" y="62" text-anchor="middle" fill="#93c5fd" font-size="8.5">ADC 3200 (IAS/ALT/VS)</text>
<rect x="6" y="74" width="108" height="22" rx="3" fill="#1a2e4a"/><text x="60" y="88" text-anchor="middle" fill="#93c5fd" font-size="8.5">GPS / FMS / NAVAID</text>
<rect x="6" y="100" width="108" height="22" rx="3" fill="#1a2e4a"/><text x="60" y="114" text-anchor="middle" fill="#93c5fd" font-size="8.5">Radar Altimeter</text>
<rect x="6" y="126" width="108" height="22" rx="3" fill="#1a2e4a"/><text x="60" y="140" text-anchor="middle" fill="#93c5fd" font-size="8.5">Magnetometer</text>
<rect x="6" y="152" width="108" height="22" rx="3" fill="#1e2535"/><text x="60" y="166" text-anchor="middle" fill="#64748b" font-size="8.5">DTD / MCP</text>
<!-- Data bus label -->
<text x="154" y="92" text-anchor="middle" fill="#334155" font-size="7" transform="rotate(-90,154,92)">ARINC 429 / Eth / RS-422</text>
<!-- Arrows from sensors to AMC -->
<line x1="114" y1="33" x2="184" y2="80" stroke="#4b6280" stroke-width="1" marker-end="url(#m2a)"/>
<line x1="114" y1="59" x2="184" y2="85" stroke="#4b6280" stroke-width="1" marker-end="url(#m2a)"/>
<line x1="114" y1="85" x2="184" y2="90" stroke="#4b6280" stroke-width="1" marker-end="url(#m2a)"/>
<line x1="114" y1="111" x2="184" y2="95" stroke="#4b6280" stroke-width="1" marker-end="url(#m2a)"/>
<line x1="114" y1="137" x2="184" y2="100" stroke="#4b6280" stroke-width="1" marker-end="url(#m2a)"/>
<line x1="114" y1="163" x2="184" y2="140" stroke="#4b6280" stroke-width="1" marker-end="url(#m2a)"/>
<!-- AMC 1 -->
<rect x="182" y="64" width="176" height="58" rx="5" fill="#1a1460" stroke="rgba(129,140,248,.45)" stroke-width="1.5"/>
<text x="270" y="82" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">AMC 1 (Primary)</text>
<text x="270" y="95" text-anchor="middle" fill="#6366f1" font-size="8">Aircraft Management Computer</text>
<text x="270" y="108" text-anchor="middle" fill="#475569" font-size="7.5">ARINC 653 Partitioning — All IMA Apps</text>
<!-- AMC 2 -->
<rect x="182" y="130" width="176" height="44" rx="5" fill="#14104a" stroke="rgba(129,140,248,.25)" stroke-width="1.5"/>
<text x="270" y="148" text-anchor="middle" fill="#818cf8" font-size="9.5" font-weight="bold">AMC 2 (Standby)</text>
<text x="270" y="162" text-anchor="middle" fill="#475569" font-size="7.5">Hot-standby redundancy</text>
<!-- Arrows from AMCs to MFDs -->
<line x1="358" y1="90" x2="396" y2="64" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m2a)"/>
<line x1="358" y1="92" x2="396" y2="104" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m2a)"/>
<line x1="358" y1="94" x2="396" y2="148" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m2a)"/>
<!-- MFD Left -->
<rect x="396" y="44" width="118" height="44" rx="4" fill="#0a2840" stroke="rgba(56,189,248,.4)" stroke-width="1.5"/>
<text x="455" y="62" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">MFD-L (Pilot)</text>
<text x="455" y="75" text-anchor="middle" fill="#475569" font-size="7.5">FND · NAVD · VMS · SVS</text>
<!-- MFD Centre -->
<rect x="396" y="94" width="118" height="44" rx="4" fill="#0a2840" stroke="rgba(56,189,248,.3)" stroke-width="1.5"/>
<text x="455" y="112" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">MFD-C (Centre)</text>
<text x="455" y="125" text-anchor="middle" fill="#475569" font-size="7.5">Mission · DMAP · EFB</text>
<!-- MFD Right -->
<rect x="396" y="144" width="118" height="44" rx="4" fill="#0a2840" stroke="rgba(56,189,248,.25)" stroke-width="1.5"/>
<text x="455" y="162" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">MFD-R (Copilot)</text>
<text x="455" y="175" text-anchor="middle" fill="#475569" font-size="7.5">FND · NAVD · VMS</text>
<!-- IESI -->
<rect x="524" y="84" width="130" height="34" rx="4" fill="#0d2818" stroke="rgba(52,211,153,.4)" stroke-width="1.5"/>
<text x="589" y="99" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">IESI (Standby)</text>
<text x="589" y="111" text-anchor="middle" fill="#475569" font-size="7">ATT · ALT · IAS — Independent</text>
<!-- Warning unit -->
<rect x="524" y="128" width="130" height="34" rx="4" fill="#2c0a0a" stroke="rgba(248,113,113,.3)" stroke-width="1.5"/>
<text x="589" y="143" text-anchor="middle" fill="#f87171" font-size="9" font-weight="bold">Warning Unit</text>
<text x="589" y="155" text-anchor="middle" fill="#475569" font-size="7">Master WARN · CAUT lights</text>
</svg></div>`},
{t:"Data Buses",i:"🔌",h:`<p>The IMA system uses several data bus standards for inter-unit communication:</p>
<ul><li><strong>ARINC 429</strong> — Standard avionics digital data bus</li><li><strong>ARINC 708</strong> — Weather radar data bus</li><li><strong>ARINC 717</strong> — Flight data recorder bus</li><li><strong>Ethernet</strong> — High-speed data interconnect</li><li><strong>RS-422</strong> — Serial data link</li><li><strong>Discrete signals</strong> — On/off status</li><li><strong>Analog signals</strong> — Continuous data (e.g. sensor outputs)</li></ul>`},
{t:"MFD Display Formats",i:"📺",h:`<p>Each MFD can display multiple formats, selectable by the crew:</p>
<ul><li><strong>FND</strong> — Flight and Navigation Display (Primary Flight Display equivalent)</li><li><strong>NAVD</strong> — Navigation Display (horizontal situation / map)</li><li><strong>VMS</strong> — Vehicle Management System (engine &amp; systems data)</li><li><strong>DMAP</strong> — Digital Map</li><li><strong>MISC</strong> — Miscellaneous formats</li><li><strong>EFB</strong> — Electronic Flight Bag</li><li><strong>SVS</strong> — Synthetic Vision System</li></ul>
<div class="callout c-info"><div class="ci">ℹ️</div><div>In case of dual MFD failure, the system reconfigures automatically to display critical information on the remaining MFD.</div></div>`},
{t:"First Limitation Indicator (FLI)",i:"⚡",h:`<p>The <strong>FLI</strong> is the primary power management display. It shows whichever engine parameter is <strong>first to reach its limit</strong>, giving the crew a single intuitive power margin indication.</p>
<ul><li><strong>AEO</strong> — All Engines Operative indication (normal operation)</li><li><strong>OEI</strong> — One Engine Inoperative indication (30-second / 2-minute limits)</li><li><strong>Training Mode</strong> — Simulates OEI for training (actual power not reduced)</li></ul>
<p>The FLI rotary graphic shows the margin to the first limit across all monitored parameters (TQ, T4, N1, N2/Nr).</p>`},
{t:"Alerting System",i:"🚨",h:`<p>The alerting system uses a <strong>Master List</strong> on the FND with three levels:</p>
<ul><li><strong>WARNING</strong> (Red) — Immediate crew action required; aural alert + voice message</li><li><strong>CAUTION</strong> (Amber) — Abnormal condition requiring crew awareness</li><li><strong>ADVISORY</strong> (Cyan) — Information requiring crew attention</li></ul>
<p>The <strong>Warning Unit (W/U)</strong> provides the master WARNING and CAUTION lights. Aural alerts include tones and synthesized voice messages (e.g., <em>"Fire, Engine One"</em>).</p>
<div class="callout c-warn"><div class="ci">⚠️</div><div>A red FIRE caption on the Warning Unit combined with an aural alert requires immediate action per emergency procedures.</div></div>`},
{t:"HTAWS & ACAS",i:"🗺️",h:`<p><strong>HTAWS</strong> (Helicopter Terrain Awareness and Warning System) provides:</p>
<ul><li>Forward-Looking Terrain Avoidance (FLTA)</li><li>GPWS modes (e.g. Mode 3: excessive altitude loss after takeoff; Mode 5: ILS deviation)</li><li>Terrain/obstacle colour-coded alerts on NAVD</li></ul>
<p><strong>ACAS</strong> (Airborne Collision Avoidance System — TCAS equivalent for helicopters) provides Traffic Advisories (TA) and Resolution Advisories (RA) displayed on the NAVD.</p>`}
],
kd:[{l:"Display units",v:"3 × MFD + 1 × IESI"},{l:"Computers",v:"2 × AMC (Aircraft Management Computer)"},{l:"AHRS units",v:"2 × AHRS"},{l:"Data buses",v:"ARINC 429 / 708 / 717, Ethernet, RS-422"},{l:"FDCR",v:"Flight Data Continuous Recording — standard fit"},{l:"SVS",v:"Synthetic Vision System — optional"},{l:"HTAWS",v:"Helicopter Terrain Awareness & Warning System"},{l:"ACAS",v:"Airborne Collision Avoidance System"}],
quiz:[
{q:"How many Aircraft Management Computers (AMC) does Helionix® use?",o:["1","2","3","4"],a:1,e:"Helionix® uses 2 AMCs. They host multiple avionics applications through software partitioning (ARINC 653)."},
{q:"What does FLI stand for in Helionix®?",o:["Flight Level Indicator","First Limitation Indicator","Fuel Load Instrument","Flight Limit Index"],a:1,e:"FLI = First Limitation Indicator. It shows the first engine parameter approaching its limit."},
{q:"Which data bus standard is used for the flight data recorder in Helionix®?",o:["ARINC 429","ARINC 708","ARINC 717","Ethernet"],a:2,e:"ARINC 717 is the standard serial bus used for flight data recorder (FDCR) communication."},
{q:"What are the three alerting levels in the Helionix® Master List?",o:["Warning / Notice / Info","Warning / Caution / Advisory","Alarm / Alert / Status","Critical / Warning / Caution"],a:1,e:"The three levels are: WARNING (red — immediate action), CAUTION (amber — awareness), ADVISORY (cyan — information)."},
{q:"What does HTAWS provide?",o:["Automatic hover hold","Helicopter Terrain Awareness and Warning System","High Temperature Airworthiness Warning","Hydraulic Thrust and Attitude Warning System"],a:1,e:"HTAWS = Helicopter Terrain Awareness and Warning System. Provides FLTA and GPWS modes to warn crews of terrain conflicts."}
]},

{id:3,num:"03",title:"Handling of the Helicopter",sub:"Lifting & Hoisting",icon:"🔧",color:"#f59e0b",bg:"rgba(245,158,11,.15)",
desc:"Ground handling procedures including hoisting/lifting of the helicopter and its major components using approved hoisting devices.",
obj:["Identify approved hoisting devices for the EC135","Know the correct device for each component","Apply safe hoisting procedures"],
sections:[
{t:"Lifting the Helicopter",i:"🏗️",h:`<p>For certain maintenance operations it is necessary to <strong>hoist the helicopter or its major components</strong>. Only approved hoisting devices listed in the AMM must be used.</p>
<div class="callout c-warn"><div class="ci">⚠️</div><div>During hoisting of the complete helicopter, the tail boom must be supported for balance. Avoid swinging movements!</div></div>
<p>The primary hoisting device for the <strong>fully equipped helicopter</strong> is <strong>M12699/P1</strong>.</p>`},
{t:"Hoisting Devices by Component",i:"🔩",h:`<p>Approved hoisting devices for EC135 components:</p>
<table class="dt"><thead><tr><th>Component</th><th>Hoisting Device</th></tr></thead><tbody>
<tr><td>Fully equipped helicopter</td><td>M12699/P1</td></tr>
<tr><td>Main rotor hub shaft</td><td>M12699/P1</td></tr>
<tr><td>Main rotor transmission (MGB)</td><td>M12699/P1</td></tr>
<tr><td>Engine P&amp;W 206 B3</td><td>PWC 64211 or L710M1009101H113-01</td></tr>
<tr><td>Engine ARRIUS 2B2+</td><td>TM2812G001 or L710M1009101H113-01</td></tr>
<tr><td>Rear structure</td><td>L535G1001101</td></tr>
</tbody></table>
<div class="dg"><p class="dg-title">EC135 — Hoisting Point &amp; Jacking Positions (AMM Ch.07)</p><svg viewBox="0 0 660 128" xmlns="http://www.w3.org/2000/svg">
<rect x="80" y="46" width="380" height="40" rx="8" fill="#0d1f35" stroke="rgba(251,191,36,.2)" stroke-width="1.5"/>
<text x="270" y="70" text-anchor="middle" fill="#334155" font-size="9">Fuselage / Cabin Structure</text>
<rect x="460" y="56" width="148" height="20" rx="3" fill="#1a2535"/><text x="534" y="69" text-anchor="middle" fill="#334155" font-size="7.5">Tail Boom</text>
<rect x="196" y="28" width="108" height="20" rx="4" fill="#134e4a" stroke="rgba(52,211,153,.3)" stroke-width="1.5"/>
<text x="250" y="42" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">MGB (CoG area)</text>
<line x1="250" y1="28" x2="250" y2="12" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4,2"/>
<circle cx="250" cy="10" r="8" fill="#fbbf24" stroke="#92400e" stroke-width="1.5"/>
<text x="250" y="14" text-anchor="middle" fill="#1c1917" font-size="8" font-weight="bold">H</text>
<text x="266" y="8" fill="#fbbf24" font-size="7.5">Hoisting Sling Point — Device: M12699/P1</text>
<line x1="124" y1="86" x2="124" y2="104" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="3,2"/>
<circle cx="124" cy="112" r="8" fill="#22d3ee" stroke="#0e7490" stroke-width="1.5"/>
<text x="124" y="116" text-anchor="middle" fill="#0c4a6e" font-size="7" font-weight="bold">J1</text>
<line x1="216" y1="86" x2="216" y2="104" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="3,2"/>
<circle cx="216" cy="112" r="8" fill="#22d3ee" stroke="#0e7490" stroke-width="1.5"/>
<text x="216" y="116" text-anchor="middle" fill="#0c4a6e" font-size="7" font-weight="bold">J2</text>
<line x1="324" y1="86" x2="324" y2="104" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="3,2"/>
<circle cx="324" cy="112" r="8" fill="#22d3ee" stroke="#0e7490" stroke-width="1.5"/>
<text x="324" y="116" text-anchor="middle" fill="#0c4a6e" font-size="7" font-weight="bold">J3</text>
<line x1="416" y1="86" x2="416" y2="104" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="3,2"/>
<circle cx="416" cy="112" r="8" fill="#22d3ee" stroke="#0e7490" stroke-width="1.5"/>
<text x="416" y="116" text-anchor="middle" fill="#0c4a6e" font-size="7" font-weight="bold">J4</text>
<text x="124" y="126" text-anchor="middle" fill="#0e7490" font-size="6.5">Fwd LH</text>
<text x="216" y="126" text-anchor="middle" fill="#0e7490" font-size="6.5">Fwd RH</text>
<text x="324" y="126" text-anchor="middle" fill="#0e7490" font-size="6.5">Aft LH</text>
<text x="416" y="126" text-anchor="middle" fill="#0e7490" font-size="6.5">Aft RH</text>
<rect x="500" y="74" width="154" height="42" rx="4" fill="#060e1a" stroke="rgba(99,179,237,.1)"/>
<circle cx="514" cy="87" r="6" fill="#fbbf24"/><text x="525" y="91" fill="#94a3b8" font-size="7.5">H — Hoisting (M12699/P1)</text>
<circle cx="514" cy="106" r="6" fill="#22d3ee"/><text x="525" y="110" fill="#94a3b8" font-size="7.5">J — 4× Jacking points</text>
</svg></div>`},
{t:"Jacking the Helicopter",i:"🔼",h:`<p>The helicopter can be jacked for maintenance and weighing purposes. Four jacking brackets can be positioned <strong>below each of the 4 landing gear fittings</strong> (at the crosstube attachment points).</p>
<p>For <strong>weighing</strong>, a special weighing bracket is installed centrally on the forward crosstube.</p>
<div class="callout c-info"><div class="ci">ℹ️</div><div>All jacking and lifting operations must be performed in accordance with AMM Chapter 07.</div></div>`}
],
kd:[{l:"Helicopter hoisting device",v:"M12699/P1"},{l:"PW206B3 engine device",v:"PWC 64211 or L710M1009101H113-01"},{l:"ARRIUS 2B2+ device",v:"TM2812G001 or L710M1009101H113-01"},{l:"Rear structure device",v:"L535G1001101"},{l:"Jacking points",v:"4 (at landing gear fittings)"},{l:"AMM reference",v:"ATA Chapter 07"}],
quiz:[
{q:"Which hoisting device is used to lift the fully equipped EC135 helicopter?",o:["TM2812G001","PWC 64211","M12699/P1","L535G1001101"],a:2,e:"M12699/P1 is the approved hoisting device for the fully equipped helicopter, the MGB, and the main rotor hub shaft."},
{q:"Which hoisting device is approved for the Turbomeca ARRIUS 2B2+ engine?",o:["M12699/P1","PWC 64211","TM2812G001","L535G1001101"],a:2,e:"TM2812G001 (or the common L710M1009101H113-01) is approved for hoisting the Turbomeca ARRIUS 2B2+ engine."},
{q:"What is the most important safety precaution when hoisting the full helicopter?",o:["Keep rotor brake applied","Support the tail boom and avoid swinging","Remove all fuel first","Disconnect the battery"],a:1,e:"The tail boom must be supported for balance during hoisting to prevent the helicopter from tipping. Avoid swinging movements."},
{q:"How many jacking points does the EC135 have?",o:["2","3","4","6"],a:2,e:"The EC135 has 4 jacking points, one below each of the landing gear fittings on the fuselage subfloor structure."},
{q:"Where is the weighing bracket installed?",o:["Aft fuselage frame","Centrally on the forward crosstube","Main transmission deck","Under the tail boom"],a:1,e:"The weighing bracket is installed centrally on the forward crosstube of the landing gear to weigh the helicopter."}
]},

{id:4,num:"04",title:"Lifting System",sub:"Main Transmission, Rotor & Drive Train",icon:"⚙️",color:"#06b6d4",bg:"rgba(6,182,212,.15)",
desc:"The complete lifting system: main transmission, driveshafts, freewheel units, lubrication, ARIS vibration isolation, rotor brake, and 4-blade bearingless main rotor.",
obj:["Describe the main transmission system and gear ratios","Explain freewheel unit operation and autorotation","Identify ARIS function and rotor brake system","Know main rotor blade construction"],
sections:[
{t:"Lifting System Overview",i:"🔄",h:`<p>The lifting system is located in the <strong>transmission compartment</strong> on top of the cabin roof within the centre-of-gravity area. Its main sub-systems are:</p>
<ul><li><strong>Main Transmission System</strong> — transfers power from both engines to main rotor, tail rotor, cooling fans, and hydraulic pumps</li><li><strong>Rotor Brake System</strong> — stops the rotor after engine shutdown</li><li><strong>Main Rotor System</strong> — generates lift and thrust</li><li><strong>Monitoring System</strong> — sensors for RPM, oil pressure, oil temperature</li></ul>`},
{t:"Main Transmission",i:"⚙️",h:`<p>The main transmission casing is made of <strong>aluminium alloy</strong>. It is of modular design comprising:</p>
<ul><li>LH and RH input drives (with freewheel units)</li><li>Tail rotor drive output</li><li>Main gearbox (two-stage flat gearbox by ZF Friedrichshafen)</li><li>LH and RH accessory drives (for hydraulic pumps and cooling fans)</li><li>Lubrication and cooling system</li></ul>
<div class="callout c-info"><div class="ci">ℹ️</div><div>Airbus Helicopters uses AirGO 3001 oil for all EC135 main transmissions.</div></div>`},
{t:"Driveshafts & Freewheel Units",i:"🔗",h:`<p>Two <strong>driveshafts</strong> connect each engine to the MGB input drives. They include flexible couplings to absorb misalignment and shaft length compensation.</p>
<p>Each input drive contains a <strong>freewheel (one-way clutch) unit</strong>. These allow power to be transmitted only from engine to MGB — not the reverse:</p>
<ul><li><strong>Engine start:</strong> First engine runs; second engine's freewheel overruns until both reach the same RPM</li><li><strong>OEI:</strong> Failed engine's freewheel overruns — prevents MGB from driving the dead engine</li><li><strong>Autorotation:</strong> Both freewheels overrun — main rotor spins freely with no engine drag</li></ul>
<div class="dg"><p class="dg-title">EC135 — Drivetrain Power Flow</p><svg viewBox="0 0 660 168" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m4" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#4b6280"/></marker></defs>
<!-- Engine 1 -->
<rect x="6" y="22" width="96" height="46" rx="5" fill="#2c1200" stroke="rgba(251,146,60,.4)" stroke-width="1.5"/>
<text x="54" y="40" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="bold">Engine 1</text>
<text x="54" y="53" text-anchor="middle" fill="#78350f" font-size="7.5">PW206B3 / ARRIUS</text>
<text x="54" y="63" text-anchor="middle" fill="#64748b" font-size="7">5,898 RPM output</text>
<!-- Engine 2 -->
<rect x="6" y="100" width="96" height="46" rx="5" fill="#2c1200" stroke="rgba(251,146,60,.4)" stroke-width="1.5"/>
<text x="54" y="118" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="bold">Engine 2</text>
<text x="54" y="131" text-anchor="middle" fill="#78350f" font-size="7.5">PW206B3 / ARRIUS</text>
<text x="54" y="141" text-anchor="middle" fill="#64748b" font-size="7">5,898 RPM output</text>
<!-- Driveshaft lines -->
<line x1="102" y1="45" x2="140" y2="64" stroke="#4b6280" stroke-width="2" stroke-dasharray="6,3"/><line x1="102" y1="123" x2="140" y2="104" stroke="#4b6280" stroke-width="2" stroke-dasharray="6,3"/>
<text x="121" y="55" text-anchor="middle" fill="#334155" font-size="7">Driveshaft</text>
<!-- Freewheel 1 -->
<rect x="140" y="54" width="84" height="30" rx="4" fill="#78350f" stroke="rgba(251,191,36,.3)" stroke-width="1"/>
<text x="182" y="66" text-anchor="middle" fill="#fbbf24" font-size="8.5" font-weight="bold">Freewheel 1</text>
<text x="182" y="77" text-anchor="middle" fill="#d97706" font-size="7">One-way clutch</text>
<!-- Freewheel 2 -->
<rect x="140" y="90" width="84" height="30" rx="4" fill="#78350f" stroke="rgba(251,191,36,.3)" stroke-width="1"/>
<text x="182" y="102" text-anchor="middle" fill="#fbbf24" font-size="8.5" font-weight="bold">Freewheel 2</text>
<text x="182" y="113" text-anchor="middle" fill="#d97706" font-size="7">One-way clutch</text>
<!-- Arrows to MGB -->
<line x1="224" y1="69" x2="262" y2="84" stroke="#4b6280" stroke-width="2" marker-end="url(#m4)"/>
<line x1="224" y1="105" x2="262" y2="91" stroke="#4b6280" stroke-width="2" marker-end="url(#m4)"/>
<!-- MGB -->
<rect x="262" y="56" width="106" height="60" rx="6" fill="#134e4a" stroke="rgba(52,211,153,.5)" stroke-width="2"/>
<text x="315" y="78" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">MGB</text>
<text x="315" y="92" text-anchor="middle" fill="#0f766e" font-size="8">Gear ratio 14.923 : 1</text>
<text x="315" y="106" text-anchor="middle" fill="#64748b" font-size="7.5">Aluminium · ~143.5 kg</text>
<!-- Arrow to Main Rotor -->
<line x1="368" y1="74" x2="412" y2="50" stroke="#4b6280" stroke-width="2" marker-end="url(#m4)"/>
<!-- Main Rotor -->
<rect x="412" y="26" width="134" height="42" rx="5" fill="#0d3342" stroke="rgba(34,211,238,.45)" stroke-width="1.5"/>
<text x="479" y="44" text-anchor="middle" fill="#22d3ee" font-size="9.5" font-weight="bold">Main Rotor (BMR)</text>
<text x="479" y="58" text-anchor="middle" fill="#475569" font-size="7.5">4-blade · 395 RPM · Ø 10.2 m</text>
<!-- Arrow to Tail Rotor -->
<line x1="368" y1="98" x2="412" y2="118" stroke="#4b6280" stroke-width="2" marker-end="url(#m4)"/>
<!-- Fenestron -->
<rect x="412" y="100" width="134" height="42" rx="5" fill="#1a0e55" stroke="rgba(192,132,252,.4)" stroke-width="1.5"/>
<text x="479" y="118" text-anchor="middle" fill="#c084fc" font-size="9.5" font-weight="bold">Fenestron® (Tail)</text>
<text x="479" y="132" text-anchor="middle" fill="#475569" font-size="7.5">10-blade · 4,986 RPM · TGB 1.183:1</text>
<!-- Accessories -->
<line x1="315" y1="116" x2="315" y2="142" stroke="#334155" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#m4)"/>
<rect x="240" y="142" width="150" height="22" rx="3" fill="#1e293b"/><text x="315" y="157" text-anchor="middle" fill="#64748b" font-size="8">Hydraulic Pumps · Cooling Fans (accessory drives)</text>
</svg></div>`},
{t:"ARIS — Anti Resonance Isolation System",i:"🧲",h:`<p>The <strong>ARIS</strong> mounts the MGB onto the transmission deck using specially designed struts and isolators. Its function is to <strong>attenuate vibrations</strong> from the main rotor and MGB before they reach the fuselage and cockpit.</p>
<p>The system uses rubber/metal isolation mounts (gearbox struts) that are tuned to absorb rotor-frequency vibrations. This significantly improves ride quality and reduces fatigue on the airframe.</p>`},
{t:"Rotor Brake System",i:"🛑",h:`<p>The rotor brake allows crew to stop the main and tail rotor <strong>after engine shutdown</strong>. Components:</p>
<ul><li>Cockpit-mounted brake lever</li><li>Bowden cable to brake cylinder</li><li>Brake caliper on brake disc (on tail rotor drive output)</li></ul>
<div class="callout c-warn"><div class="ci">⚠️</div><div>The rotor brake must only be applied after engines are shut down and rotor RPM has decreased to the approved level. Never apply in flight.</div></div>`},
{t:"Main Rotor — Bearingless Design",i:"🌀",h:`<p>The EC135 uses a <strong>4-blade Bearingless Main Rotor (BMR)</strong>:</p>
<ul><li><strong>Flexbeam</strong> — Inboard section allows blade movement in all axes (flap, lead-lag, pitch) without conventional bearings</li><li><strong>Pitch Control Cuff</strong> — Glass/carbon fibre structure through which pitch input is applied to each blade</li><li><strong>Blade Construction</strong> — Glass and carbon fibre composite; colour markings identify approved blades</li></ul>
<p>The swashplate transmits collective and cyclic inputs to the rotating control rods and then to the blade pitch control cuffs via the rotating swashplate ring.</p>`}
],
kd:[{l:"MGB mass",v:"approx. 143.5 kg"},{l:"MGB material",v:"Aluminium alloy"},{l:"Main rotor gear ratio",v:"14.923 : 1"},{l:"Tail rotor gear ratio",v:"1.183 : 1"},{l:"Drive input speed",v:"5,898 RPM"},{l:"Main rotor speed",v:"395 RPM"},{l:"Tail rotor output speed",v:"4,986 RPM"},{l:"MGB oil quantity",v:"approx. 10.0 L"},{l:"MGB oil type",v:"AirGO 3001"},{l:"Main rotor blades",v:"4 (Bearingless BMR)"}],
quiz:[
{q:"What is the normal main rotor speed (Nr) of the EC135?",o:["320 RPM","360 RPM","395 RPM","420 RPM"],a:2,e:"The main rotor speed is 395 RPM, derived from the engine drive speed of 5,898 RPM through a gear ratio of 14.923:1."},
{q:"What is the purpose of the freewheel unit in the EC135 drivetrain?",o:["It engages both engines simultaneously","It allows the main rotor to spin freely in autorotation","It limits maximum rotor speed","It synchronises engine speed to rotor RPM"],a:1,e:"The freewheel (one-way clutch) allows the main rotor to spin freely when both engines are inoperative (autorotation) by overrunning and decoupling from the engines."},
{q:"What is the function of ARIS?",o:["Prevent tail rotor resonance","Isolate MGB vibrations from the fuselage","Auto-regulate rotor speed","Prevent ground resonance"],a:1,e:"ARIS = Anti Resonance Isolation System. It uses tuned struts/mounts to isolate MGB and main rotor vibrations from the fuselage."},
{q:"What is the gear ratio of the main rotor transmission?",o:["10.500:1","12.680:1","14.923:1","17.412:1"],a:2,e:"The main transmission gear ratio for the main rotor is 14.923:1, reducing the 5,898 RPM input drive to 395 RPM main rotor speed."},
{q:"What allows the EC135 main rotor blades to move in all axes without conventional bearings?",o:["Hydraulic dampers","Elastomeric bearings","The flexbeam","The pitch control cuff"],a:2,e:"The inboard flexbeam acts as a flexible structural member that allows flapping, lead-lag, and pitch movement without the need for conventional blade bearings."}
]},

{id:5,num:"05",title:"Fuselage",sub:"Structure, Doors & Cabin",icon:"🏗️",color:"#10b981",bg:"rgba(16,185,129,.15)",
desc:"EC135 fuselage structure, reference coordinate system, cabin construction, doors (hinged, sliding, clamshell), windows, engine cowlings, and placards.",
obj:["Understand the EC135 reference plane system","Identify all door types and their operation","Describe the fuselage structural materials","Know cockpit door emergency jettison procedure"],
sections:[
{t:"Reference Planes",i:"📏",h:`<p>EC135 frame coordinates are defined per <strong>LN 65619</strong> in metric (mm):</p>
<ul><li><strong>Fuselage Stations (FS / X-axis)</strong> — longitudinal distance from reference frame 0</li><li><strong>Waterlines (WL / Z-axis)</strong> — vertical planes perpendicular to the vertical axis; WL 0 is 1,505 mm below a reference datum</li><li><strong>Buttlines (BL / Y-axis)</strong> — lateral planes measured from the aircraft centreline</li></ul>`},
{t:"Cabin Structure",i:"🏛️",h:`<p>The primary fuselage structure is mainly <strong>sheet metal</strong> design. Composite panels are used for:</p>
<ul><li>Cabin frame</li><li>Bottom shell</li><li>All doors</li><li>Engine cowlings</li><li>Nose access panel</li><li>Entire tail boom</li></ul>
<p>This combination provides low weight, high strength, and excellent corrosion resistance.</p>`},
{t:"Doors (6 Total)",i:"🚪",h:`<p>The EC135 cabin is accessible through <strong>six doors</strong>:</p>
<ul><li><strong>2 × Hinged crew doors</strong> (pilot and copilot) — forward-opening; can be jettisoned in emergency</li><li><strong>2 × Sliding passenger doors</strong> — port and starboard; slide rearward</li><li><strong>2 × Aft clamshell doors</strong> — open rearward for rear compartment access (cargo/litter)</li></ul>
<div class="callout c-warn"><div class="ci">⚠️</div><div>Emergency door jettison: Pull the red handle on the crew door to release the hinges. The door will fall away from the aircraft.</div></div>
<div class="dg"><p class="dg-title">EC135 — Six-Door Arrangement (Side View)</p><svg viewBox="0 0 660 108" xmlns="http://www.w3.org/2000/svg">
<!-- Fuselage -->
<path d="M60,38 Q90,20 160,18 L460,18 Q510,18 550,38 L560,58 Q510,78 460,78 L160,78 Q90,78 60,58Z" fill="#0a1525" stroke="rgba(16,185,129,.2)" stroke-width="1.5"/>
<!-- Tail boom -->
<rect x="550" y="44" width="100" height="16" rx="2" fill="#1a2535"/>
<!-- Door 1 - Crew LH (hinged, front) -->
<rect x="100" y="22" width="56" height="52" rx="3" fill="#053320" stroke="#34d399" stroke-width="2"/>
<text x="128" y="44" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="bold">D1</text>
<text x="128" y="56" text-anchor="middle" fill="#475569" font-size="6.5">Crew LH</text>
<text x="128" y="66" text-anchor="middle" fill="#475569" font-size="6">Hinged · Jettison</text>
<!-- Door 2 - Crew RH (hinged, front) -->
<rect x="160" y="22" width="56" height="52" rx="3" fill="#053320" stroke="#34d399" stroke-width="2"/>
<text x="188" y="44" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="bold">D2</text>
<text x="188" y="56" text-anchor="middle" fill="#475569" font-size="6.5">Crew RH</text>
<text x="188" y="66" text-anchor="middle" fill="#475569" font-size="6">Hinged · Jettison</text>
<!-- Door 3 - Sliding pax LH -->
<rect x="234" y="22" width="72" height="52" rx="3" fill="#0d2e42" stroke="#38bdf8" stroke-width="2"/>
<text x="270" y="44" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">D3</text>
<text x="270" y="56" text-anchor="middle" fill="#475569" font-size="6.5">Pax LH</text>
<text x="270" y="66" text-anchor="middle" fill="#475569" font-size="6">Sliding rearward</text>
<!-- Door 4 - Sliding pax RH -->
<rect x="314" y="22" width="72" height="52" rx="3" fill="#0d2e42" stroke="#38bdf8" stroke-width="2"/>
<text x="350" y="44" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">D4</text>
<text x="350" y="56" text-anchor="middle" fill="#475569" font-size="6.5">Pax RH</text>
<text x="350" y="66" text-anchor="middle" fill="#475569" font-size="6">Sliding rearward</text>
<!-- Door 5 - Clamshell LH -->
<rect x="394" y="22" width="60" height="52" rx="3" fill="#1e1a00" stroke="#fbbf24" stroke-width="2"/>
<text x="424" y="44" text-anchor="middle" fill="#fbbf24" font-size="8.5" font-weight="bold">D5</text>
<text x="424" y="56" text-anchor="middle" fill="#475569" font-size="6.5">Aft LH</text>
<text x="424" y="66" text-anchor="middle" fill="#475569" font-size="6">Clamshell</text>
<!-- Door 6 - Clamshell RH -->
<rect x="458" y="22" width="60" height="52" rx="3" fill="#1e1a00" stroke="#fbbf24" stroke-width="2"/>
<text x="488" y="44" text-anchor="middle" fill="#fbbf24" font-size="8.5" font-weight="bold">D6</text>
<text x="488" y="56" text-anchor="middle" fill="#475569" font-size="6.5">Aft RH</text>
<text x="488" y="66" text-anchor="middle" fill="#475569" font-size="6">Clamshell</text>
<!-- Bottom labels -->
<text x="128" y="96" text-anchor="middle" fill="#34d399" font-size="7">◀ Crew (×2)</text>
<text x="310" y="96" text-anchor="middle" fill="#38bdf8" font-size="7">◀─── Sliding Pax (×2) ───▶</text>
<text x="471" y="96" text-anchor="middle" fill="#fbbf24" font-size="7">Clamshell (×2) ▶</text>
</svg></div>`},
{t:"Cowlings & Access Panels",i:"🔓",h:`<p>Engine cowlings are made of composite material and provide access to the engine compartments. They open upward and are held open by gas struts.</p>
<p>Various access panels throughout the fuselage provide access to:</p>
<ul><li>Main transmission compartment</li><li>Fuel tank equipment (4 removable equipment plates in lower shell)</li><li>Electrical equipment bay</li><li>Avionic bay (nose compartment)</li></ul>`}
],
kd:[{l:"Primary structure",v:"Sheet metal"},{l:"Composite areas",v:"Doors, tail boom, cabin frame, cowlings"},{l:"Total doors",v:"6 (2 crew + 2 sliding pax + 2 clamshell)"},{l:"Coordinate standard",v:"LN 65619 (metric — mm)"},{l:"Fuel access panels",v:"4 removable plates in lower shell"},{l:"ATA reference",v:"Cabin Structure ATA 53, Doors ATA 52"}],
quiz:[
{q:"How many doors does the EC135 have in total?",o:["4","5","6","8"],a:2,e:"The EC135 has 6 doors: 2 hinged crew doors, 2 sliding passenger doors, and 2 aft clamshell doors."},
{q:"What material is the EC135 tail boom made of?",o:["Sheet aluminium","Titanium","Composite material","Steel tube"],a:2,e:"The tail boom is entirely made of composite material, reducing weight while maintaining structural integrity."},
{q:"What type are the forward crew doors?",o:["Sliding","Hinged (can be jettisoned)","Gull-wing","Canopy"],a:1,e:"The two forward crew doors are hinged doors. They can be jettisoned in an emergency by pulling the red release handle."},
{q:"What coordinate system is used for EC135 dimensions?",o:["NATO STANAG","LN 65619 metric (mm)","ICAO Annex 8","SAE AS 9100"],a:1,e:"EC135 frame coordinates are defined per LN 65619 (a German aviation standard) in the metric system (millimetres)."},
{q:"What provides access to the fuel tank equipment?",o:["Four removable panels in the lower shell","A single hatch under the nose","Side panels in the cabin","The aft clamshell doors"],a:0,e:"Four removable equipment plates in the lower shell of the fuselage provide access to the fuel tanks and installed fuel equipment."}
]},

{id:6,num:"06",title:"Tail Unit",sub:"Fenestron, Tail Boom & Tail Rotor Drive",icon:"🔩",color:"#0891b2",bg:"rgba(8,145,178,.15)",
desc:"Tail unit structure including the Fenestron® anti-torque system, tail boom, horizontal stabilizer, tail rotor drive shaft system, TGB, and rotor RPM monitoring.",
obj:["Explain the Fenestron® principle of operation","Identify tail rotor drive components","Describe TGB oil system","Know rotor RPM monitoring"],
sections:[
{t:"Fenestron® Principle",i:"🌬️",h:`<p>The <strong>Fenestron®</strong> is a <strong>fan-in-shroud (ducted fan)</strong> anti-torque system. Key advantages over a conventional tail rotor:</p>
<ul><li>Improved safety — blades enclosed in protective shroud</li><li>Reduced noise due to blade-wake interaction within duct</li><li>Better aerodynamic efficiency at high speeds (shroud generates thrust)</li><li>Uneven blade spacing reduces tonal noise signature</li></ul>
<p>The EC135 Fenestron® has <strong>10 blades</strong> rotating inside a housing integrated in the vertical fin structure at the tail boom.</p>
<div class="dg"><p class="dg-title">Fenestron® — Cross-Section View (10 blades, uneven spacing)</p><svg viewBox="0 0 660 180" xmlns="http://www.w3.org/2000/svg">
<!-- Outer shroud -->
<circle cx="200" cy="90" r="78" fill="none" stroke="rgba(56,189,248,.5)" stroke-width="6"/>
<text x="200" y="17" text-anchor="middle" fill="#38bdf8" font-size="8" font-weight="bold">Shroud / Duct</text>
<!-- Inner rotor disk -->
<circle cx="200" cy="90" r="62" fill="#060e1a" stroke="rgba(56,189,248,.2)" stroke-width="1"/>
<!-- Hub -->
<circle cx="200" cy="90" r="14" fill="#0a2840" stroke="rgba(56,189,248,.5)" stroke-width="2"/>
<text x="200" y="94" text-anchor="middle" fill="#38bdf8" font-size="7" font-weight="bold">Hub</text>
<!-- 10 blades at uneven spacing (real Fenestron angles: roughly 30°,36°,30°,36°,30°,36°,30°,36°,30°,36° variant) -->
<!-- Using angles: 0,32,68,100,136,168,204,236,272,308 degrees -->
<line x1="200" y1="76" x2="200" y2="28" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
<line x1="200" y1="76" x2="226" y2="30" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" transform="rotate(32,200,90)"/>
<line x1="200" y1="76" x2="226" y2="30" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" transform="rotate(68,200,90)"/>
<line x1="200" y1="76" x2="226" y2="30" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" transform="rotate(100,200,90)"/>
<line x1="200" y1="76" x2="226" y2="30" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" transform="rotate(136,200,90)"/>
<line x1="200" y1="76" x2="226" y2="30" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" transform="rotate(168,200,90)"/>
<line x1="200" y1="76" x2="226" y2="30" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" transform="rotate(204,200,90)"/>
<line x1="200" y1="76" x2="226" y2="30" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" transform="rotate(236,200,90)"/>
<line x1="200" y1="76" x2="226" y2="30" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" transform="rotate(272,200,90)"/>
<line x1="200" y1="76" x2="226" y2="30" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" transform="rotate(308,200,90)"/>
<!-- Airflow arrow -->
<text x="200" y="175" text-anchor="middle" fill="#64748b" font-size="8">← Airflow in (from left) · Thrust →  (Uneven blade spacing reduces tonal noise)</text>
<!-- Info panel (right) -->
<rect x="320" y="20" width="328" height="150" rx="6" fill="#060e1a" stroke="rgba(99,179,237,.12)"/>
<text x="484" y="38" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">Fenestron® Advantages</text>
<text x="334" y="58" fill="#34d399" font-size="8.5">✓</text><text x="346" y="58" fill="#94a3b8" font-size="8.5">10 blades enclosed in protective shroud</text>
<text x="334" y="76" fill="#34d399" font-size="8.5">✓</text><text x="346" y="76" fill="#94a3b8" font-size="8.5">Shroud generates additional anti-torque thrust</text>
<text x="334" y="94" fill="#34d399" font-size="8.5">✓</text><text x="346" y="94" fill="#94a3b8" font-size="8.5">Uneven spacing → reduced tonal noise signature</text>
<text x="334" y="112" fill="#34d399" font-size="8.5">✓</text><text x="346" y="112" fill="#94a3b8" font-size="8.5">Improved safety vs conventional exposed tail rotor</text>
<text x="334" y="130" fill="#fbbf24" font-size="8.5">→</text><text x="346" y="130" fill="#94a3b8" font-size="8.5">Drive: TGB (90° bevel) · 4,986 RPM</text>
<text x="334" y="148" fill="#fbbf24" font-size="8.5">→</text><text x="346" y="148" fill="#94a3b8" font-size="8.5">Control: Flexball cable → EHA actuator (in stator hub)</text>
</svg></div>`},
{t:"Tail Unit Structure",i:"🏛️",h:`<p>The tail unit can be <strong>separated from the fuselage</strong> as a unit. It consists of:</p>
<ul><li><strong>Tail boom</strong> — composite structure; carries drive shafts and control cable</li><li><strong>Tail boom cone</strong> — aft fairing</li><li><strong>Horizontal stabilizer</strong> — adjustable; provides longitudinal pitch stability</li><li><strong>Vertical fin</strong> — houses the Fenestron® rotor and TGB</li><li><strong>Fairings</strong> — aerodynamic covers</li></ul>`},
{t:"Tail Rotor Drive Train",i:"🔗",h:`<p>Drive from the MGB tail rotor output to the Fenestron® passes through:</p>
<ul><li><strong>Forward drive shaft</strong> — from MGB to first flexible coupling</li><li><strong>Flexible coupling</strong> — compensates for fuselage/tail boom flexing</li><li><strong>Centre drive shaft</strong> — main transmission through tail boom</li><li><strong>Aft drive shaft</strong> — to TGB input</li><li><strong>Tail Gearbox (TGB)</strong> — 90° bevel gear; changes drive angle to turn the Fenestron®</li></ul>`},
{t:"Tail Gearbox (TGB)",i:"⚙️",h:`<p>The TGB is a <strong>right-angle bevel gearbox</strong> mounted at the base of the vertical fin. It changes the drive angle from the tail boom drive shaft to the Fenestron® rotor shaft.</p>
<p><strong>TGB Oil System:</strong> The TGB has its own oil supply (separate from MGB). A sight glass and drain plug are accessible for oil level checks and servicing.</p>
<div class="callout c-warn"><div class="ci">⚠️</div><div>TGB oil level must be checked during preflight inspection. Low oil level can cause TGB failure and loss of anti-torque.</div></div>`},
{t:"Rotor RPM Monitoring",i:"📊",h:`<p>The rotor RPM (Nr) is monitored by sensors and displayed on the <strong>FLI indicator</strong> and on the MFD. The system provides:</p>
<ul><li>Nr indication on the FND (primary display)</li><li>Low Nr warning (aural alert)</li><li>Overspeed protection (via FADEC and limits)</li></ul>
<p>The Nr sensor is mounted on the main rotor hub shaft and sends signals to the AMC for processing and display.</p>`}
],
kd:[{l:"Tail rotor type",v:"Fenestron® (fan-in-shroud)"},{l:"Fenestron® blades",v:"10"},{l:"Blade spacing",v:"Uneven (noise reduction)"},{l:"TGB type",v:"Right-angle bevel gearbox"},{l:"Drive shafts",v:"Forward + centre + aft drive shaft + flexible coupling"},{l:"Horizontal stabilizer",v:"Adjustable"},{l:"Tail unit separability",v:"Can be detached as complete unit"}],
quiz:[
{q:"How many blades does the EC135 Fenestron® have?",o:["8","10","12","14"],a:1,e:"The Fenestron® has 10 blades with uneven spacing to reduce tonal noise, rotating inside the vertical fin housing."},
{q:"What is the purpose of the Fenestron® shroud/duct?",o:["Protects against bird strike only","Generates additional anti-torque thrust and improves safety/noise","Acts as the primary engine intake","Replaces the need for a horizontal stabilizer"],a:1,e:"The shroud acts as a duct that improves aerodynamic efficiency, generates additional thrust, reduces noise, and protects the blades."},
{q:"What is the function of the Tail Gearbox (TGB)?",o:["Reduce tail rotor speed","Change the drive angle 90° from the drive shaft to the Fenestron","Lubricate the tail boom drive shaft","Control tail rotor pitch"],a:1,e:"The TGB is a right-angle bevel gearbox that changes the drive direction 90° from the longitudinal tail boom drive shaft to the Fenestron® rotor shaft."},
{q:"What flexible component compensates for fuselage/tail boom flexing in the tail rotor drive?",o:["The TGB casing","The Fenestron blade root","A flexible coupling between drive shafts","The horizontal stabilizer attachment"],a:2,e:"A flexible coupling is installed in the tail rotor drive train to compensate for structural flexing between the fuselage and the tail boom."},
{q:"What type of oil system does the TGB have?",o:["Shares oil with the MGB","Its own separate oil supply with sight glass","Grease-packed sealed unit","Engine oil cooled system"],a:1,e:"The TGB has its own separate oil supply (independent of the MGB) with a sight glass for oil level inspection during preflight."}
]},

{id:7,num:"07",title:"Flight Control",sub:"Cyclic, Collective, Pedals & Trim",icon:"🕹️",color:"#6366f1",bg:"rgba(99,102,241,.15)",
desc:"EC135 flight control system: cyclic stick (pitch/roll), collective lever (altitude), anti-torque pedals (yaw), mixing unit, trim actuators, and tail rotor control.",
obj:["Describe function of cyclic, collective and pedal controls","Explain the mixing unit function","Understand the trim system (parallel actuators)","Describe tail rotor flexball cable control"],
sections:[
{t:"Principle of Helicopter Flight Control",i:"🎯",h:`<p>The EC135 is controlled by three primary inputs:</p>
<ul><li><strong>Cyclic stick</strong> — Tilts the main rotor disc; controls pitch (fore-aft) and roll (left-right)</li><li><strong>Collective lever</strong> — Changes blade pitch angle on all blades simultaneously; controls altitude/power</li><li><strong>Pedals (Anti-torque)</strong> — Controls Fenestron® blade pitch; controls yaw (heading)</li></ul>
<p>A <strong>Mixing Unit</strong> combines the three inputs mechanically before passing them to the hydraulic actuators and swashplate.</p>`},
{t:"Collective Control",i:"⬆️",h:`<p>The collective lever raises/lowers simultaneously. Its key components include:</p>
<ul><li><strong>Collective shaft (torsion tube)</strong> — transmits pilot input</li><li><strong>Friction brake</strong> — adjustable friction to hold position</li><li><strong>Weight compensation system</strong> — reduces pilot effort</li><li><strong>LVDTs</strong> — Linear Variable Differential Transducers: convert position to electrical signal for AFCS</li><li><strong>Parallel actuator (trim)</strong> — Electric motor allows AFCS to trim collective position</li></ul>`},
{t:"Cyclic Control",i:"↔️",h:`<p>The cyclic stick controls pitch and roll. Components:</p>
<ul><li><strong>Cyclic shaft (torsion tube)</strong> — carries longitudinal and lateral inputs</li><li><strong>Lateral friction device</strong> and <strong>longitudinal weight compensation</strong></li><li><strong>Centering device</strong> — spring-loaded centre feel</li><li><strong>Parallel actuators (pitch and roll trim)</strong> — electric trim motors</li><li><strong>4-way trim switches</strong> on cyclic grip — pilot adjusts trim position</li></ul>`},
{t:"Mixing Unit",i:"🔀",h:`<p>The <strong>Mixing Unit (Mixing Lever Assembly)</strong> receives inputs from all three control axes and combines them before transmitting to the three hydraulic main rotor actuators.</p>
<p>It ensures that a collective input does not inadvertently cause a cyclic change (and vice versa). The correct combination of control signals is then sent to the three dual hydraulic actuators which move the swashplate.</p>
<div class="dg"><p class="dg-title">EC135 — Flight Control Signal Flow</p><svg viewBox="0 0 660 170" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m7" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#4b6280"/></marker></defs>
<!-- Inputs column -->
<text x="62" y="14" text-anchor="middle" fill="#475569" font-size="8" font-weight="bold">PILOT INPUTS</text>
<rect x="6" y="22" width="112" height="30" rx="4" fill="#1a1a55" stroke="rgba(129,140,248,.4)"/>
<text x="62" y="36" text-anchor="middle" fill="#818cf8" font-size="9" font-weight="bold">Cyclic Stick</text>
<text x="62" y="47" text-anchor="middle" fill="#475569" font-size="7.5">Pitch &amp; Roll · LVDT sensor · Trim</text>
<rect x="6" y="62" width="112" height="30" rx="4" fill="#052e1c" stroke="rgba(52,211,153,.4)"/>
<text x="62" y="76" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">Collective Lever</text>
<text x="62" y="87" text-anchor="middle" fill="#475569" font-size="7.5">All-blade pitch · LVDT · Trim</text>
<rect x="6" y="102" width="112" height="30" rx="4" fill="#1e3a5f" stroke="rgba(96,165,250,.4)"/>
<text x="62" y="116" text-anchor="middle" fill="#60a5fa" font-size="9" font-weight="bold">Anti-Torque Pedals</text>
<text x="62" y="127" text-anchor="middle" fill="#475569" font-size="7.5">Fenestron® pitch · Yaw axis</text>
<!-- Arrows to Mixing Unit -->
<line x1="118" y1="37" x2="182" y2="75" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m7)"/>
<line x1="118" y1="77" x2="182" y2="82" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m7)"/>
<line x1="118" y1="117" x2="182" y2="89" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m7)"/>
<!-- Mixing Unit -->
<rect x="182" y="58" width="110" height="50" rx="5" fill="#2a1d00" stroke="rgba(251,191,36,.45)" stroke-width="2"/>
<text x="237" y="78" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Mixing Unit</text>
<text x="237" y="92" text-anchor="middle" fill="#78350f" font-size="7.5">Combines all 3 axes</text>
<text x="237" y="103" text-anchor="middle" fill="#64748b" font-size="7">Mechanical lever assembly</text>
<!-- Arrow to MHA actuators -->
<line x1="292" y1="83" x2="340" y2="60" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m7)"/>
<line x1="292" y1="83" x2="340" y2="83" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m7)"/>
<line x1="292" y1="83" x2="340" y2="106" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m7)"/>
<!-- 3 Main Rotor Actuators -->
<text x="404" y="14" text-anchor="middle" fill="#475569" font-size="8" font-weight="bold">MAIN ROTOR ACTUATORS (MHA)</text>
<rect x="340" y="22" width="128" height="28" rx="4" fill="#072340" stroke="rgba(56,189,248,.35)"/>
<text x="404" y="36" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">MHA — Fore (dual tandem)</text>
<text x="404" y="46" text-anchor="middle" fill="#475569" font-size="7">Both hyd. systems always active</text>
<rect x="340" y="56" width="128" height="28" rx="4" fill="#072340" stroke="rgba(56,189,248,.35)"/>
<text x="404" y="70" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">MHA — LH (dual tandem)</text>
<text x="404" y="80" text-anchor="middle" fill="#475569" font-size="7">Mechano-Hydraulic Actuator</text>
<rect x="340" y="90" width="128" height="28" rx="4" fill="#072340" stroke="rgba(56,189,248,.35)"/>
<text x="404" y="104" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">MHA — RH (dual tandem)</text>
<text x="404" y="114" text-anchor="middle" fill="#475569" font-size="7">3 actuators → Swashplate</text>
<!-- Swashplate -->
<line x1="468" y1="72" x2="510" y2="72" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m7)"/>
<rect x="510" y="46" width="100" height="52" rx="5" fill="#0c3342" stroke="rgba(34,211,238,.45)" stroke-width="1.5"/>
<text x="560" y="64" text-anchor="middle" fill="#22d3ee" font-size="9.5" font-weight="bold">Swashplate</text>
<text x="560" y="78" text-anchor="middle" fill="#475569" font-size="7.5">Rotating + non-rotating</text>
<text x="560" y="89" text-anchor="middle" fill="#64748b" font-size="7">→ Blade pitch cuffs (BMR)</text>
<!-- Tail rotor path (separate) -->
<line x1="118" y1="117" x2="420" y2="145" stroke="#4b6280" stroke-width="1" stroke-dasharray="5,3" marker-end="url(#m7)"/>
<rect x="420" y="132" width="120" height="28" rx="4" fill="#1a0a35" stroke="rgba(192,132,252,.35)"/>
<text x="480" y="144" text-anchor="middle" fill="#c084fc" font-size="8.5" font-weight="bold">EHA (Tail Rotor)</text>
<text x="480" y="154" text-anchor="middle" fill="#475569" font-size="7">Flexball cable → Fenestron® stator</text>
<!-- AFCS trim note -->
<text x="237" y="128" text-anchor="middle" fill="#334155" font-size="7">↑ AFCS trim via parallel SEMAs on each axis</text>
</svg></div>`},
{t:"Tail Rotor Control (Pedals)",i:"🦵",h:`<p>The anti-torque pedals control the <strong>Fenestron® pitch</strong> via a <strong>Flexball-type cable</strong> routed from the pedal assembly through the tail boom to the tail rotor actuator (inside the Fenestron® stator hub).</p>
<p>The Flexball cable allows routing through tight bends without friction. The tail rotor actuator is a <strong>single electro-hydraulic actuator</strong> (EHA) inside the Fenestron® stator hub.</p>
<div class="callout c-info"><div class="ci">ℹ️</div><div>The tail rotor actuator operates on one hydraulic system only (unlike the 3 dual main rotor actuators).</div></div>`}
],
kd:[{l:"Collective control",v:"Torsion tube + parallel trim actuator + LVDT"},{l:"Cyclic control",v:"Torsion tube + 2 parallel trim actuators + centering device"},{l:"Tail rotor control",v:"Flexball cable → EHA inside Fenestron stator"},{l:"Main rotor actuators",v:"3 × dual (tandem) hydraulic actuators"},{l:"Tail rotor actuator",v:"1 × single EHA (Electro-Hydraulic Actuator)"},{l:"LVDT purpose",v:"Position sensing for AFCS"},{l:"Trim system",v:"Parallel actuators (electric motor)"}],
quiz:[
{q:"What type of cable is used to route the tail rotor control from pedals to Fenestron®?",o:["Push-pull rigid rod","Flexball-type cable","Aircraft control cable with pulleys","Hydraulic line"],a:1,e:"A Flexball-type cable is used — it can route through bends in the tail boom without significant friction, transmitting pedal input to the Fenestron® actuator."},
{q:"What is the function of the Mixing Unit?",o:["Mixes hydraulic fluid from both systems","Combines all three control inputs before reaching the actuators","Splits electrical power to trim actuators","Blends engine thrust between left and right engines"],a:1,e:"The Mixing Unit mechanically combines collective, cyclic pitch, and cyclic roll inputs so that each input reaches the correct hydraulic actuator without cross-coupling."},
{q:"What does LVDT stand for and what does it do?",o:["Linear Valve Distribution Transducer — controls hydraulic flow","Linear Variable Differential Transducer — converts control position to electrical signal","Load and Vibration Detection Transmitter — detects overload","Longitudinal Velocity Data Transmitter — measures airspeed"],a:1,e:"LVDT = Linear Variable Differential Transducer. It converts the mechanical position of the control inputs into electrical signals used by the AFCS."},
{q:"How does the trim system work in the EC135 flight controls?",o:["A trim tab on the rotor blades","Parallel electric actuators that re-position the control datum","A separate hydraulic circuit","Weight-and-balance adjustment via fuel transfer"],a:1,e:"The trim system uses parallel electric actuators that move the control input datum position. The pilot uses 4-way trim switches to adjust trim."},
{q:"Where is the tail rotor actuator (EHA) located?",o:["At the forward end of the tail boom","Inside the Fenestron® stator hub","At the TGB output shaft","On the aft bulkhead of the fuselage"],a:1,e:"The electro-hydraulic tail rotor actuator (EHA) is located inside the Fenestron® stator hub, directly at the rotor pitch change mechanism."}
]},

{id:8,num:"08",title:"Hydraulic System",sub:"Dual Pressure Supply & Actuators",icon:"💧",color:"#0284c7",bg:"rgba(2,132,199,.15)",
desc:"EC135 dual hydraulic system architecture: two independent pressure supply systems, three dual main rotor actuators, Fenestron actuator, and indicating/testing.",
obj:["Describe the dual hydraulic system architecture","Identify the main components and their location","Explain actuator types (MHA and EHA)","Know the test procedure purpose"],
sections:[
{t:"Hydraulic System Overview",i:"⚙️",h:`<p>The hydraulic system <strong>boosts pilot control inputs</strong> (the pilot provides direction; hydraulics provide the force) and blocks the blade reset forces from feeding back to the controls.</p>
<p>The system has <strong>two identical, independent pressure supply systems</strong>. Both systems are active simultaneously. In the event of one system failure, the remaining system alone can provide <strong>sufficient power for safe flight and landing</strong>.</p>
<div class="dg"><p class="dg-title">EC135 — Dual Hydraulic System Architecture</p><svg viewBox="0 0 660 162" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m8" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#4b6280"/></marker></defs>
<text x="60" y="14" text-anchor="middle" fill="#475569" font-size="8" font-weight="bold">SUPPLY (LH)</text>
<text x="600" y="14" text-anchor="middle" fill="#475569" font-size="8" font-weight="bold">SUPPLY (RH)</text>
<text x="330" y="14" text-anchor="middle" fill="#475569" font-size="8" font-weight="bold">ACTUATORS</text>
<!-- LH pump system -->
<rect x="6" y="20" width="108" height="52" rx="5" fill="#072340" stroke="rgba(2,132,199,.5)" stroke-width="1.5"/>
<text x="60" y="38" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">Hyd System 1</text>
<text x="60" y="52" text-anchor="middle" fill="#0ea5e9" font-size="8">Reservoir + Filter</text>
<text x="60" y="64" text-anchor="middle" fill="#475569" font-size="7.5">LH Accessory GBX</text>
<!-- RH pump system -->
<rect x="546" y="20" width="108" height="52" rx="5" fill="#072340" stroke="rgba(2,132,199,.5)" stroke-width="1.5"/>
<text x="600" y="38" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">Hyd System 2</text>
<text x="600" y="52" text-anchor="middle" fill="#0ea5e9" font-size="8">Reservoir + Filter</text>
<text x="600" y="64" text-anchor="middle" fill="#475569" font-size="7.5">RH Accessory GBX</text>
<!-- 3 × Dual MHAs (main rotor) -->
<rect x="230" y="20" width="200" height="32" rx="4" fill="#0c1e30" stroke="rgba(56,189,248,.4)" stroke-width="1.5"/>
<text x="330" y="33" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">MHA-1 (Fore) — Dual Tandem</text>
<text x="330" y="44" text-anchor="middle" fill="#475569" font-size="7.5">Piston-A (Sys1) · Piston-B (Sys2)</text>
<rect x="230" y="60" width="200" height="32" rx="4" fill="#0c1e30" stroke="rgba(56,189,248,.35)" stroke-width="1.5"/>
<text x="330" y="73" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">MHA-2 (LH) — Dual Tandem</text>
<text x="330" y="84" text-anchor="middle" fill="#475569" font-size="7.5">Mechano-Hydraulic Actuator</text>
<rect x="230" y="100" width="200" height="32" rx="4" fill="#0c1e30" stroke="rgba(56,189,248,.3)" stroke-width="1.5"/>
<text x="330" y="113" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">MHA-3 (RH) — Dual Tandem</text>
<text x="330" y="124" text-anchor="middle" fill="#475569" font-size="7.5">→ Swashplate (BMR)</text>
<!-- EHA tail -->
<rect x="248" y="140" width="164" height="18" rx="4" fill="#160535" stroke="rgba(192,132,252,.4)" stroke-width="1.5"/>
<text x="330" y="152" text-anchor="middle" fill="#c084fc" font-size="8.5">EHA — Tail Rotor (Sys 1 only)</text>
<!-- Lines from LH sys to actuators -->
<line x1="114" y1="36" x2="230" y2="34" stroke="#0ea5e9" stroke-width="1.5" marker-end="url(#m8)"/>
<line x1="114" y1="46" x2="230" y2="72" stroke="#0ea5e9" stroke-width="1.5" marker-end="url(#m8)"/>
<line x1="114" y1="56" x2="230" y2="112" stroke="#0ea5e9" stroke-width="1.5" marker-end="url(#m8)"/>
<line x1="114" y1="62" x2="248" y2="148" stroke="#7c3aed" stroke-width="1" stroke-dasharray="5,3" marker-end="url(#m8)"/>
<!-- Lines from RH sys to actuators -->
<line x1="546" y1="36" x2="430" y2="34" stroke="#0284c7" stroke-width="1.5" marker-end="url(#m8)"/>
<line x1="546" y1="46" x2="430" y2="72" stroke="#0284c7" stroke-width="1.5" marker-end="url(#m8)"/>
<line x1="546" y1="56" x2="430" y2="112" stroke="#0284c7" stroke-width="1.5" marker-end="url(#m8)"/>
<text x="160" y="28" fill="#0ea5e9" font-size="7.5">Sys 1</text>
<text x="460" y="28" fill="#0284c7" font-size="7.5">Sys 2</text>
<text x="60" y="155" text-anchor="middle" fill="#334155" font-size="7">Both systems active simultaneously · Single-system failure = full control maintained</text>
</svg></div>`},
{t:"Main Components",i:"🔧",h:`<p>The hydraulic system consists of:</p>
<ul><li><strong>2 × Pressure Supply Systems</strong> — one on each side (LH and RH), driven by MGB accessory gearboxes</li><li><strong>3 × Dual Main Rotor Actuators</strong> — tandem pistons; both systems always active</li><li><strong>1 × Tail Rotor Single Actuator</strong> — inside Fenestron® stator hub</li><li><strong>Indicating and Testing System</strong> — pressure switches, cockpit indicators</li></ul>
<p><strong>Component locations:</strong> Supply systems mounted on top of LH and RH accessory gearboxes. Main rotor actuators on the forward side of MGB. Tail rotor actuator inside Fenestron®.</p>`},
{t:"Actuator Types",i:"🔩",h:`<p>The EC135 uses two types of hydraulic actuators:</p>
<ul><li><strong>MHA — Mechano-Hydraulic Actuator</strong>: Mechanical valve spool directly operated by pilot control input (via control rod). Used for main rotor actuators.</li><li><strong>EHA — Electro-Hydraulic Actuator</strong>: Valve spool operated by electrical signal from AFCS (plus mechanical input). Used for tail rotor actuator.</li></ul>
<p>Each main rotor actuator has <strong>tandem (dual) pistons</strong> — one piston powered by each hydraulic system simultaneously.</p>`},
{t:"Indicating and Test System",i:"📊",h:`<p>Hydraulic system status is shown in the cockpit via:</p>
<ul><li>Pressure indicators on the <strong>instrument panel</strong></li><li>System status in the <strong>VMS page on MFD</strong></li><li>CAUTION messages in the Master List</li></ul>
<p>A <strong>test procedure</strong> verifies correct operation of both hydraulic systems on the ground before flight. It includes checking pressure, checking for leaks, and verifying actuator response.</p>
<div class="callout c-warn"><div class="ci">⚠️</div><div>A HYDR SYS 1 or HYDR SYS 2 caution means one pressure supply has failed. Controls remain fully operative on the remaining system. Land as soon as practicable.</div></div>`}
],
kd:[{l:"Pressure supply systems",v:"2 (identical, independent)"},{l:"Main rotor actuators",v:"3 × dual (tandem) MHA"},{l:"Tail rotor actuator",v:"1 × single EHA"},{l:"Actuator drive",v:"MGB LH and RH accessory gearboxes"},{l:"Single-system capability",v:"Full control authority"},{l:"Actuator type (main)",v:"MHA — Mechano-Hydraulic Actuator"},{l:"Actuator type (tail)",v:"EHA — Electro-Hydraulic Actuator"}],
quiz:[
{q:"How many hydraulic pressure supply systems does the EC135 have?",o:["1","2","3","4"],a:1,e:"The EC135 has 2 identical, independent hydraulic pressure supply systems. Both are active simultaneously."},
{q:"What drives the hydraulic pumps?",o:["Dedicated electric motors","The main engines directly","The MGB accessory gearboxes","Battery-powered hydraulic reservoirs"],a:2,e:"The hydraulic pumps are driven by the LH and RH accessory gearboxes, which are part of the main transmission."},
{q:"How many main rotor actuators does the EC135 have?",o:["2","3","4","6"],a:1,e:"There are 3 dual (tandem) main rotor actuators. Each has two pistons — one piston powered by each independent hydraulic system."},
{q:"What is an MHA?",o:["Manual Hydraulic Adjuster","Mechano-Hydraulic Actuator","Multiple Hydraulic Assembly","Master Hydraulic Accumulator"],a:1,e:"MHA = Mechano-Hydraulic Actuator. Its valve spool is directly operated mechanically by pilot control input via a control rod."},
{q:"Can the EC135 be controlled safely with only one hydraulic system operating?",o:["No — dual systems required at all times","Yes — one system provides full control authority","Only for tail rotor control","Only in hover — not forward flight"],a:1,e:"Yes. If one hydraulic system fails, the remaining system provides full control authority for safe flight and landing."}
]},

{id:9,num:"09",title:"Landing Gear",sub:"Skid Gear & Ground Stability",icon:"🛬",color:"#7c3aed",bg:"rgba(124,58,237,.15)",
desc:"EC135 skid-type landing gear: aluminium crosstubes and skids, touchdown load absorption, jacking, ground stability, and optional equipment.",
obj:["Describe the landing gear components","Know the touchdown speed limitation","Identify optional landing gear equipment","Understand ground stability (skid track)"],
sections:[
{t:"Landing Gear Description",i:"🛬",h:`<p>The EC135 uses a <strong>skid-type landing gear</strong>. It carries the helicopter's weight on the ground and absorbs landing impact loads. Attached through <strong>four fittings</strong> to the lower fuselage subfloor structure.</p>
<p>Components:</p>
<ul><li><strong>2 × Aluminium crosstubes</strong> (hollow, circular cross section) — mounted ~2 m apart laterally</li><li><strong>2 × Aluminium skids</strong> — clamp to crosstubes via skid shoes</li><li><strong>4 × Skid shoes</strong> — clamping connection between skids and crosstubes</li><li><strong>4 × Bonding jumpers</strong> — static electricity discharge</li></ul>`},
{t:"Load Absorption & Stability",i:"⚡",h:`<p>The crosstubes absorb touchdown loads by <strong>bending</strong>. The bearing rings on the crosstubes swivel in their brackets so that all forces are absorbed through tube bending — not the fittings.</p>
<p>The <strong>skid track is 2.3 m</strong> — provides good lateral stability when standing on the ground.</p>
<div class="callout c-warn"><div class="ci">⚠️</div><div>Maximum touchdown speed: approximately 1 m/s (depends on helicopter mass and surface hardness). Higher touchdown speeds will cause permanent deformation of the crosstubes.</div></div>
<div class="dg"><p class="dg-title">EC135 — Landing Gear Front View (Skid Track 2.3 m)</p><svg viewBox="0 0 660 122" xmlns="http://www.w3.org/2000/svg">
<!-- Fuselage belly cross-section -->
<rect x="240" y="14" width="180" height="36" rx="8" fill="#0d1f35" stroke="rgba(124,58,237,.3)" stroke-width="1.5"/>
<text x="330" y="28" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="bold">Fuselage</text>
<text x="330" y="42" text-anchor="middle" fill="#475569" font-size="7.5">MTOM 2,980 kg</text>
<!-- Forward crosstube (horizontal tube connecting fuselage to skids) -->
<rect x="100" y="52" width="460" height="10" rx="4" fill="#1e293b" stroke="rgba(124,58,237,.4)" stroke-width="1.5"/>
<text x="330" y="50" text-anchor="middle" fill="#7c3aed" font-size="7.5" font-weight="bold">Aluminium Crosstube (hollow, circular section)</text>
<!-- Crosstube bending arc (load absorption) -->
<path d="M200,62 Q230,80 330,66 Q430,52 460,62" fill="none" stroke="rgba(124,58,237,.3)" stroke-width="1" stroke-dasharray="4,2"/>
<text x="330" y="78" text-anchor="middle" fill="#5b21b6" font-size="7">Bending deflection absorbs touchdown loads</text>
<!-- Fittings (4 attachment points) -->
<rect x="242" y="48" width="14" height="20" rx="2" fill="#4c1d95" stroke="rgba(192,132,252,.5)"/>
<rect x="404" y="48" width="14" height="20" rx="2" fill="#4c1d95" stroke="rgba(192,132,252,.5)"/>
<text x="249" y="94" text-anchor="middle" fill="#7c3aed" font-size="7">Fitting</text>
<text x="411" y="94" text-anchor="middle" fill="#7c3aed" font-size="7">Fitting</text>
<!-- Skid shoes + vertical legs -->
<rect x="96" y="60" width="10" height="28" rx="2" fill="#2d1b69"/>
<rect x="554" y="60" width="10" height="28" rx="2" fill="#2d1b69"/>
<!-- Left skid -->
<rect x="60" y="86" width="90" height="10" rx="4" fill="#1e293b" stroke="rgba(124,58,237,.5)" stroke-width="1.5"/>
<text x="105" y="110" text-anchor="middle" fill="#94a3b8" font-size="8">LH Skid</text>
<!-- Right skid -->
<rect x="510" y="86" width="90" height="10" rx="4" fill="#1e293b" stroke="rgba(124,58,237,.5)" stroke-width="1.5"/>
<text x="555" y="110" text-anchor="middle" fill="#94a3b8" font-size="8">RH Skid</text>
<!-- Track width dimension arrow -->
<line x1="105" y1="116" x2="555" y2="116" stroke="#fbbf24" stroke-width="1.5"/>
<polygon points="105,113 105,119 96,116" fill="#fbbf24"/>
<polygon points="555,113 555,119 564,116" fill="#fbbf24"/>
<text x="330" y="114" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">Track Width: 2.3 m</text>
</svg></div>`},
{t:"Optional Equipment",i:"➕",h:`<p>Various options are available for different operational requirements:</p>
<ul><li><strong>Emergency flotation system</strong> — inflatable floats for water operations</li><li><strong>Multipurpose carrier</strong> — underbelly attachment for special equipment</li><li><strong>Settling protectors</strong> — protection for operations in soft ground or sand</li><li><strong>Snow skids</strong> — extended skids for snow/ice operations</li><li><strong>Medium or high gear versions</strong> — different crosstube heights available</li></ul>`}
],
kd:[{l:"Landing gear type",v:"Skid (tubular aluminium)"},{l:"Crosstubes",v:"2 × hollow aluminium (circular section)"},{l:"Skid track",v:"2.3 m"},{l:"Attachment points",v:"4 fittings to subfloor structure"},{l:"Max touchdown speed",v:"approx. 1 m/s"},{l:"Jacking points",v:"4 (at gear fittings)"},{l:"Weighing attachment",v:"Central bracket on forward crosstube"}],
quiz:[
{q:"What is the skid track width of the EC135?",o:["1.8 m","2.0 m","2.3 m","2.6 m"],a:2,e:"The EC135 landing gear has a skid track of 2.3 m, providing good lateral stability when on the ground."},
{q:"How does the EC135 landing gear absorb touchdown impact?",o:["Hydraulic shock absorbers in the skid shoes","Bending of the aluminium crosstubes","Rubber isolation mounts at the attachment fittings","Composite skid deformation"],a:1,e:"The crosstubes absorb landing loads by bending. The bearing rings swivel in their brackets to ensure forces go into crosstube bending."},
{q:"What is the approximate maximum touchdown speed for the EC135?",o:["0.5 m/s","1 m/s","1.5 m/s","2 m/s"],a:1,e:"The maximum touchdown speed is approximately 1 m/s. Higher speeds cause permanent plastic deformation of the crosstubes."},
{q:"How many attachment fittings connect the landing gear to the fuselage?",o:["2","3","4","6"],a:2,e:"The landing gear is attached through 4 fittings to the lower fuselage subfloor structure — one at each crosstube-to-fuselage connection."},
{q:"What is the purpose of the bonding jumpers on the landing gear?",o:["Strengthen the skid-crosstube connection","Allow landing gear height adjustment","Discharge static electricity","Provide magnetic compass reference"],a:2,e:"Bonding jumpers provide an electrical path to discharge static electricity from the landing gear skids to the airframe ground."}
]},

{id:10,num:"10",title:"Fuel System",sub:"Storage, Distribution & Monitoring",icon:"⛽",color:"#ef4444",bg:"rgba(239,68,68,.15)",
desc:"EC135 fuel system: two bladder tanks, fuel pumps, crossfeed, refueling, quantity monitoring, low-level warning, and fuel shutoff valves.",
obj:["Describe the fuel tank configuration","Identify the fuel pump arrangement","Understand fuel quantity monitoring","Know low-level warning thresholds"],
sections:[
{t:"Fuel Storage",i:"🛢️",h:`<p>The EC135 uses two <strong>bladder (flexible) tank cells</strong> made of reinforced rubberized nylon fabric, mounted under the cabin floor:</p>
<ul><li><strong>Main Tank</strong> — larger tank, forward section of the subfloor</li><li><strong>Supply Tank</strong> — split into LH and RH sections by a fuselage-mounted fence (engine separation requirement); located between frames 5 and 8</li></ul>
<p>Overflow channels connect the supply tank to the main tank. The supply tank fence ensures that even if one side is compromised, the other side continues to supply its engine.</p>
<div class="callout c-info"><div class="ci">ℹ️</div><div>A flange in the RH supply tank sidewall allows connection of an optional auxiliary fuel tank for extended range.</div></div>`},
{t:"Fuel Distribution",i:"🔄",h:`<p>Each engine is supplied from its respective side of the split supply tank. The distribution system includes:</p>
<ul><li><strong>2 × Boost pumps</strong> — one in each supply tank section; powered from separate electrical buses</li><li><strong>Engine fuel shutoff valves</strong> — one per engine; closed on emergency shutdown</li><li><strong>Crossfeed capability</strong> — allows one engine to be fed from either tank side</li></ul>
<p>Fuel flows: Supply tank → boost pump → shutoff valve → engine fuel control.</p>
<div class="dg"><p class="dg-title">EC135 — Fuel System Flow Diagram</p><svg viewBox="0 0 660 148" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m10" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#4b6280"/></marker></defs>
<!-- Main Tank -->
<rect x="230" y="8" width="200" height="36" rx="5" fill="#300a0a" stroke="rgba(248,113,113,.4)" stroke-width="1.5"/>
<text x="330" y="24" text-anchor="middle" fill="#f87171" font-size="9.5" font-weight="bold">Main Tank</text>
<text x="330" y="38" text-anchor="middle" fill="#475569" font-size="7.5">Bladder · forward subfloor</text>
<!-- Overflow to supply tank -->
<line x1="330" y1="44" x2="330" y2="56" stroke="#4b6280" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#m10)"/>
<text x="350" y="52" fill="#334155" font-size="7">overflow</text>
<!-- Supply Tank (split) -->
<rect x="130" y="56" width="170" height="38" rx="5" fill="#2c0a0a" stroke="rgba(248,113,113,.35)" stroke-width="1.5"/>
<text x="215" y="70" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="bold">Supply Tank LH</text>
<text x="215" y="82" text-anchor="middle" fill="#475569" font-size="7.5">Engine 1 feed section</text>
<rect x="360" y="56" width="170" height="38" rx="5" fill="#2c0a0a" stroke="rgba(248,113,113,.35)" stroke-width="1.5"/>
<text x="445" y="70" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="bold">Supply Tank RH</text>
<text x="445" y="82" text-anchor="middle" fill="#475569" font-size="7.5">Engine 2 feed section</text>
<!-- Fence label -->
<line x1="330" y1="56" x2="330" y2="94" stroke="rgba(248,113,113,.4)" stroke-width="1" stroke-dasharray="3,2"/>
<text x="330" y="90" text-anchor="middle" fill="#7f1d1d" font-size="7">Separation Fence</text>
<!-- Boost pumps -->
<rect x="158" y="100" width="114" height="22" rx="4" fill="#1c1400" stroke="rgba(251,191,36,.4)" stroke-width="1.5"/>
<text x="215" y="111" text-anchor="middle" fill="#fbbf24" font-size="8.5" font-weight="bold">Boost Pump 1</text>
<text x="215" y="119" text-anchor="middle" fill="#475569" font-size="7">ESS Bus 1</text>
<rect x="388" y="100" width="114" height="22" rx="4" fill="#1c1400" stroke="rgba(251,191,36,.4)" stroke-width="1.5"/>
<text x="445" y="111" text-anchor="middle" fill="#fbbf24" font-size="8.5" font-weight="bold">Boost Pump 2</text>
<text x="445" y="119" text-anchor="middle" fill="#475569" font-size="7">ESS Bus 2</text>
<line x1="215" y1="94" x2="215" y2="100" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m10)"/>
<line x1="445" y1="94" x2="445" y2="100" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m10)"/>
<!-- Shutoff valves -->
<line x1="215" y1="122" x2="215" y2="132" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m10)"/>
<rect x="165" y="132" width="100" height="10" rx="3" fill="#0c2240" stroke="rgba(56,189,248,.4)"/>
<text x="215" y="141" text-anchor="middle" fill="#38bdf8" font-size="7.5">Shutoff Valve 1</text>
<line x1="445" y1="122" x2="445" y2="132" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m10)"/>
<rect x="395" y="132" width="100" height="10" rx="3" fill="#0c2240" stroke="rgba(56,189,248,.4)"/>
<text x="445" y="141" text-anchor="middle" fill="#38bdf8" font-size="7.5">Shutoff Valve 2</text>
<!-- Engines -->
<text x="215" y="148" text-anchor="middle" fill="#fb923c" font-size="7" font-weight="bold">→ Engine 1</text>
<text x="445" y="148" text-anchor="middle" fill="#fb923c" font-size="7" font-weight="bold">→ Engine 2</text>
</svg></div>`},
{t:"Fuel Quantity & Monitoring",i:"📊",h:`<p>Fuel quantity is monitored by <strong>capacitance-type fuel quantity transmitters</strong> in each tank cell. Quantity and fuel flow are displayed on the <strong>VMS page of the MFD</strong>.</p>
<ul><li><strong>Low-level warning</strong>: A CAUTION is triggered when fuel in the supply tank drops below a set level, indicating approximately 30 minutes of flight remaining (depending on conditions)</li><li><strong>Fuel pressure monitoring</strong>: Pressure switches detect boost pump failure and trigger CAUTION messages</li></ul>`},
{t:"Fueling",i:"⛽",h:`<p>The EC135 supports both <strong>gravity refueling</strong> (through filler caps) and <strong>pressure refueling</strong> (single-point on the fuselage).</p>
<p>An optional <strong>auxiliary fuel tank</strong> can be connected to the RH supply tank for extended range operations (e.g., offshore, EMS, law enforcement).</p>
<div class="callout c-warn"><div class="ci">⚠️</div><div>Ensure correct fuel type (Jet-A1 / JP-8 / Jet-A per AFM). Never overfill — check quantity after fueling. Static grounding is mandatory before pressure fueling.</div></div>`}
],
kd:[{l:"Tank type",v:"Bladder (reinforced rubberized nylon fabric)"},{l:"Number of tanks",v:"2 (main tank + split supply tank)"},{l:"Supply tank",v:"Split by fence (LH/RH — engine separation)"},{l:"Fuel pumps",v:"2 × boost pumps (one per supply tank section)"},{l:"Refueling",v:"Gravity and pressure refueling"},{l:"Fuel type",v:"Jet-A1 / JP-8 / Jet-A (per AFM)"},{l:"Access panels",v:"4 removable equipment plates in lower shell"}],
quiz:[
{q:"Why is the supply tank divided by a fence?",o:["To separate fuel types","To meet engine separation certification requirements","To improve CG range","To prevent fuel sloshing"],a:1,e:"The fence divides the supply tank into LH and RH sections to meet the certification requirement for engine-feed separation — each engine is fed from its own section."},
{q:"What type of fuel tanks does the EC135 use?",o:["Integral (wet bay) tanks","Aluminium rigid tanks","Bladder (flexible rubber) tanks","Composite pressure vessels"],a:2,e:"The EC135 uses impact-resistant bladder tanks made of reinforced rubberized nylon fabric, installed under the cabin floor."},
{q:"How many boost pumps are in the EC135 fuel system?",o:["1","2","3","4"],a:1,e:"There are 2 boost pumps — one in each section of the split supply tank. They are powered from separate electrical buses for redundancy."},
{q:"Where is fuel quantity displayed in the cockpit?",o:["A dedicated fuel gauge panel","The VMS page on the MFD","The overhead panel","The IESI standby instrument"],a:1,e:"Fuel quantity and fuel flow are displayed on the VMS (Vehicle Management System) page on the Helionix® MFD."},
{q:"What fueling methods does the EC135 support?",o:["Gravity only","Pressure only","Both gravity and pressure refueling","Only single-point pressure refueling"],a:2,e:"The EC135 supports both gravity refueling (via filler caps) and single-point pressure refueling through a connector on the fuselage."}
]},

{id:11,num:"11",title:"Power Plant",sub:"PW206B3, ARRIUS 2B2+ & FADEC",icon:"🔥",color:"#f97316",bg:"rgba(249,115,22,.15)",
desc:"EC135 power plant: Pratt & Whitney PW206B3 and Turbomeca ARRIUS 2B2 Plus turboshaft engines, FADEC control, OEI operation, training mode, and engine ignition.",
obj:["Compare PW206B3 and ARRIUS 2B2+ architectures","Explain FADEC and manual backup operation","Describe OEI and training mode","Know engine ignition components"],
sections:[
{t:"Power Plant Overview",i:"🔥",h:`<p>The EC135 P3H/T3H is equipped with <strong>two identical turboshaft engines</strong> (one per variant):</p>
<ul><li><strong>EC135 T3H</strong> — 2 × Turbomeca <strong>ARRIUS 2B2 Plus</strong></li><li><strong>EC135 P3H</strong> — 2 × Pratt &amp; Whitney Canada <strong>PW206B3</strong></li></ul>
<p>Both are <strong>free-turbine</strong> engines in the <strong>450 kW class</strong>. They drive the main transmission via individual driveshafts with freewheel units.</p>`},
{t:"Pratt & Whitney PW206B3",i:"⚙️",h:`<p>The PW206B3 is a lightweight free-turbine turboshaft:</p>
<ul><li><strong>Compressor</strong>: Single-stage centrifugal</li><li><strong>Combustion</strong>: Reverse-flow annular combustion chamber with 12 fuel nozzles</li><li><strong>Turbines</strong>: Single-stage compressor turbine + single-stage free power turbine</li><li><strong>Reduction gearbox</strong>: Two-stage bevel gear; output shaft inclined 26° upward to match MGB</li><li><strong>Accessories driven</strong>: Starter/generator, PMA, fuel pumps, oil pumps</li></ul>
<div class="callout c-info"><div class="ci">ℹ️</div><div>FADEC: Single-channel Full Authority Digital Engine Control with mechanical backup Fuel Management Module (FMM).</div></div>
<div class="dg"><p class="dg-title">PW206B3 / ARRIUS 2B2+ — Gas Path (Free-Turbine Turboshaft)</p><svg viewBox="0 0 660 110" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m11" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#4b6280"/></marker></defs>
<!-- Intake -->
<rect x="6" y="30" width="80" height="50" rx="5" fill="#0a1830" stroke="rgba(96,165,250,.35)" stroke-width="1.5"/>
<text x="46" y="52" text-anchor="middle" fill="#60a5fa" font-size="9" font-weight="bold">Intake</text>
<text x="46" y="65" text-anchor="middle" fill="#475569" font-size="7.5">Air inlet</text>
<text x="46" y="76" text-anchor="middle" fill="#334155" font-size="7">+ IBF (opt.)</text>
<!-- Arrow -->
<line x1="86" y1="55" x2="102" y2="55" stroke="#4b6280" stroke-width="2" marker-end="url(#m11)"/>
<!-- Compressor -->
<rect x="102" y="24" width="88" height="62" rx="5" fill="#052e1c" stroke="rgba(52,211,153,.45)" stroke-width="1.5"/>
<text x="146" y="46" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">Compressor</text>
<text x="146" y="59" text-anchor="middle" fill="#475569" font-size="7.5">Single-stage</text>
<text x="146" y="71" text-anchor="middle" fill="#475569" font-size="7.5">centrifugal</text>
<text x="146" y="82" text-anchor="middle" fill="#334155" font-size="7">+pressure rise</text>
<line x1="190" y1="55" x2="206" y2="55" stroke="#4b6280" stroke-width="2" marker-end="url(#m11)"/>
<!-- Combustion -->
<rect x="206" y="18" width="96" height="74" rx="5" fill="#2c1200" stroke="rgba(251,146,60,.5)" stroke-width="1.5"/>
<text x="254" y="42" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="bold">Combustion</text>
<text x="254" y="55" text-anchor="middle" fill="#fb923c" font-size="8">Chamber</text>
<text x="254" y="68" text-anchor="middle" fill="#475569" font-size="7.5">Reverse-flow</text>
<text x="254" y="80" text-anchor="middle" fill="#475569" font-size="7.5">annular · 12 nozzles</text>
<line x1="302" y1="55" x2="318" y2="55" stroke="#4b6280" stroke-width="2" marker-end="url(#m11)"/>
<!-- Gas gen turbine -->
<rect x="318" y="24" width="88" height="62" rx="5" fill="#1a1200" stroke="rgba(251,191,36,.4)" stroke-width="1.5"/>
<text x="362" y="46" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">Comp. Turbine</text>
<text x="362" y="58" text-anchor="middle" fill="#475569" font-size="7.5">Drives compressor</text>
<text x="362" y="70" text-anchor="middle" fill="#475569" font-size="7.5">single-stage</text>
<line x1="406" y1="55" x2="422" y2="55" stroke="#4b6280" stroke-width="2" marker-end="url(#m11)"/>
<!-- Free power turbine -->
<rect x="422" y="24" width="88" height="62" rx="5" fill="#0f1a00" stroke="rgba(163,230,53,.4)" stroke-width="1.5"/>
<text x="466" y="44" text-anchor="middle" fill="#a3e635" font-size="9" font-weight="bold">Free Power</text>
<text x="466" y="57" text-anchor="middle" fill="#a3e635" font-size="9" font-weight="bold">Turbine</text>
<text x="466" y="70" text-anchor="middle" fill="#475569" font-size="7.5">N2 / Output shaft</text>
<line x1="510" y1="55" x2="526" y2="55" stroke="#4b6280" stroke-width="2" marker-end="url(#m11)"/>
<!-- Reduction gearbox -->
<rect x="526" y="30" width="88" height="50" rx="5" fill="#1a0c2e" stroke="rgba(192,132,252,.4)" stroke-width="1.5"/>
<text x="570" y="48" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="bold">Reduction</text>
<text x="570" y="61" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="bold">Gearbox</text>
<text x="570" y="74" text-anchor="middle" fill="#475569" font-size="7">→ Driveshaft to MGB</text>
<!-- Exhaust arrow down-left from power turbine -->
<line x1="466" y1="86" x2="466" y2="100" stroke="#4b6280" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#m11)"/>
<text x="466" y="108" text-anchor="middle" fill="#334155" font-size="7">Exhaust gas</text>
<!-- FADEC label -->
<rect x="100" y="96" width="208" height="12" rx="3" fill="#060e1a" stroke="rgba(99,179,237,.15)"/>
<text x="204" y="106" text-anchor="middle" fill="#475569" font-size="7.5">FADEC (EEC/EECU) — Full Authority Digital Engine Control</text>
</svg></div>`},
{t:"Turbomeca ARRIUS 2B2 Plus",i:"⚙️",h:`<p>The ARRIUS 2B2 Plus is a free-turbine turboshaft with similar layout:</p>
<ul><li><strong>Gas generator</strong>: Single-stage centrifugal compressor, annular combustion chamber</li><li><strong>Power turbine</strong>: Free power turbine driving the reduction gearbox</li><li><strong>EECU</strong>: Electronic Engine Control Unit (single channel) with mechanical backup</li><li><strong>Alternator</strong>: Engine-driven alternator powers EECU for independent engine control even without main electrical supply</li></ul>`},
{t:"FADEC / Engine Control",i:"🖥️",h:`<p><strong>FADEC</strong> (Full Authority Digital Engine Control) is the primary engine control system:</p>
<ul><li>Controls fuel flow to maintain demanded power/speed</li><li>Power sharing and droop compensation between both engines</li><li>Overspeed protection</li><li>High NR mode (increased rotor speed for special operations)</li><li>Fault detection and diagnostic</li></ul>
<p><strong>Manual (backup) mode</strong>: In case of FADEC failure, the mechanical fuel management module maintains basic fuel flow control. The pilot manually adjusts power using the twist-grip (ENG CONT lever).</p>
<div class="callout c-warn"><div class="ci">⚠️</div><div>In Manual Mode, all FADEC protections (overspeed, overtorque) are lost. Handle power inputs carefully.</div></div>`},
{t:"OEI & Training Mode",i:"🎓",h:`<p><strong>OEI (One Engine Inoperative):</strong> If one engine fails, the FADEC on the remaining engine automatically increases power to OEI rating (30-second or 2-minute limit). The freewheel unit decouples the failed engine from the MGB.</p>
<p><strong>Training Mode (ETO):</strong> Allows simulation of OEI in flight for crew training. FADEC reduces power on one "training" engine but does not actually fail it — allows practice without risk. Indicated by a special FLI display.</p>
<p><strong>Torque Limiter:</strong> FADEC limits torque output to protect the transmission. In OEI, increased limits apply for emergency power.</p>`},
{t:"Engine Ignition",i:"⚡",h:`<p>The ignition system consists of:</p>
<ul><li><strong>High-voltage ignition unit</strong> — exciter box providing HV pulses</li><li><strong>2 × spark igniters</strong> — located in the combustion chamber</li><li>Ignition is active during engine start and can be manually selected (continuous ignition) in icing or precipitation</li></ul>`}
],
kd:[{l:"T3H engines",v:"2 × Turbomeca ARRIUS 2B2 Plus"},{l:"P3H engines",v:"2 × Pratt & Whitney PW206B3"},{l:"Engine class",v:"450 kW free-turbine turboshaft"},{l:"Compressor",v:"Single-stage centrifugal (both types)"},{l:"FADEC (PW)",v:"Single-channel EEC + mechanical FMM backup"},{l:"FADEC (TM)",v:"Single-channel EECU + mechanical backup"},{l:"PW output shaft angle",v:"26° upward (to match MGB)"},{l:"Igniters",v:"2 × spark igniters per engine"},{l:"Freewheel units",v:"2 (one per engine input drive)"}],
quiz:[
{q:"What type of compressor does the PW206B3 use?",o:["Axial two-stage","Single-stage centrifugal","Dual centrifugal","Axial + centrifugal combined"],a:1,e:"The PW206B3 uses a single-stage centrifugal compressor. The ARRIUS 2B2+ also uses a single-stage centrifugal compressor."},
{q:"What is the purpose of the FADEC mechanical backup (FMM)?",o:["Increases engine power in OEI","Maintains basic fuel flow control if FADEC fails","Prevents engine overspeed only","Controls ignition independently"],a:1,e:"The FMM (Fuel Management Module on PW) / mechanical backup (on TM) maintains basic engine fuel flow control if the FADEC fails, allowing the pilot to manually control power."},
{q:"What is Training Mode (ETO) used for?",o:["Test engine start sequence","Simulate OEI in flight for crew training without actually failing an engine","Check fuel system integrity","Verify FADEC calibration"],a:1,e:"Training Mode simulates OEI: FADEC reduces power on one engine to give an OEI flight feel for training, but the engine remains operational and available."},
{q:"What happens to the failed engine's freewheel unit during OEI?",o:["It locks to drive the MGB harder","It overruns and decouples the dead engine from the MGB","It engages a rotor brake","It transfers drive to the tail rotor"],a:1,e:"The freewheel unit overruns — it disengages the failed (dead) engine so the MGB is not driven by the windmilling dead engine."},
{q:"How many spark igniters are fitted per engine?",o:["1","2","3","4"],a:1,e:"Each engine has 2 spark igniters located in the combustion chamber, powered by a high-voltage ignition exciter unit."}
]},

{id:12,num:"12",title:"Fire Protection System",sub:"Detection & Extinguishing",icon:"🔥",color:"#dc2626",bg:"rgba(220,38,38,.15)",
desc:"EC135 fire warning and extinguishing system: thermal fire detectors in each engine compartment, BCF extinguisher, warning indications, and test procedures.",
obj:["Describe the fire detection system","Identify fire warning indications (visual and aural)","Explain fire extinguishing system operation","Know fire system test procedure"],
sections:[
{t:"Fire Warning System",i:"🚨",h:`<p>The helicopter is equipped with an independent <strong>fire warning and extinguishing system</strong> for each engine compartment.</p>
<p>Each engine compartment has <strong>two fire detectors</strong>:</p>
<ul><li>One on the <strong>engine accessory gearbox</strong></li><li>One beneath the <strong>combustion chamber casing</strong></li></ul>
<p>The fire warning logic is located in the <strong>Warning Unit (W/U)</strong>. Electrical power is supplied from the <strong>Essential Bus</strong>.</p>`},
{t:"Fire Warning Indications",i:"💡",h:`<p>If overheating or fire is detected:</p>
<ul><li><strong>Red FIRE caption</strong> on the Warning Unit illuminates</li><li><strong>Red WARNING: FIRE ENG 1 / FIRE ENG 2</strong> appears in the FND Master List</li><li><strong>Aural alert tone</strong> (continuous)</li><li><strong>Voice message</strong>: "Fire, engine one" or "Fire, engine two"</li></ul>
<div class="callout c-err"><div class="ci">🔴</div><div>A FIRE warning requires IMMEDIATE action per the Emergency Procedures. Identify which engine, shut it down, and discharge the fire extinguisher.</div></div>`},
{t:"Fire Extinguishing System",i:"🧯",h:`<p>The fire extinguishing system contains a <strong>BCF (Halon) extinguisher bottle</strong> accessible for both engine compartments.</p>
<ul><li>A single discharge button/switch in the cockpit discharges the extinguishant into the affected engine compartment via spray nozzles</li><li>The system provides <strong>one shot</strong> of extinguishant — one bottle shared between two engines</li></ul>
<div class="callout c-warn"><div class="ci">⚠️</div><div>Only one discharge is available. After discharge, the bottle must be replaced on the ground before next flight.</div></div>
<div class="dg"><p class="dg-title">EC135 — Fire Detection &amp; Extinguishing System</p><svg viewBox="0 0 660 140" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m12" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#4b6280"/></marker></defs>
<!-- Engine 1 compartment -->
<rect x="6" y="14" width="130" height="68" rx="5" fill="#2c0808" stroke="rgba(220,38,38,.4)" stroke-width="1.5"/>
<text x="71" y="32" text-anchor="middle" fill="#f87171" font-size="9" font-weight="bold">Engine 1 Bay</text>
<rect x="18" y="40" width="108" height="18" rx="3" fill="#1a0808" stroke="rgba(248,113,113,.3)"/>
<text x="72" y="50" text-anchor="middle" fill="#fca5a5" font-size="7.5">Det A — Accessory GBX</text>
<rect x="18" y="60" width="108" height="18" rx="3" fill="#1a0808" stroke="rgba(248,113,113,.3)"/>
<text x="72" y="70" text-anchor="middle" fill="#fca5a5" font-size="7.5">Det B — Combustion Casing</text>
<!-- Engine 2 compartment -->
<rect x="6" y="90" width="130" height="42" rx="5" fill="#2c0808" stroke="rgba(220,38,38,.4)" stroke-width="1.5"/>
<text x="71" y="106" text-anchor="middle" fill="#f87171" font-size="9" font-weight="bold">Engine 2 Bay</text>
<text x="71" y="125" text-anchor="middle" fill="#fca5a5" font-size="7.5">Det A + Det B (same)</text>
<!-- Arrows to Warning Unit -->
<line x1="136" y1="48" x2="222" y2="60" stroke="#ef4444" stroke-width="1.5" marker-end="url(#m12)"/>
<line x1="136" y1="69" x2="222" y2="68" stroke="#ef4444" stroke-width="1.5" marker-end="url(#m12)"/>
<line x1="136" y1="111" x2="222" y2="76" stroke="#ef4444" stroke-width="1.5" marker-end="url(#m12)"/>
<!-- Warning Unit -->
<rect x="222" y="38" width="120" height="60" rx="5" fill="#2c0808" stroke="rgba(220,38,38,.6)" stroke-width="2"/>
<text x="282" y="58" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="bold">Warning Unit</text>
<text x="282" y="73" text-anchor="middle" fill="#f87171" font-size="8.5">🔴 FIRE ENG 1</text>
<text x="282" y="87" text-anchor="middle" fill="#f87171" font-size="8.5">🔴 FIRE ENG 2</text>
<!-- Aural alert -->
<line x1="342" y1="56" x2="392" y2="36" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m12)"/>
<rect x="392" y="22" width="128" height="28" rx="4" fill="#1c1000" stroke="rgba(251,191,36,.4)"/>
<text x="456" y="34" text-anchor="middle" fill="#fbbf24" font-size="8.5" font-weight="bold">Aural + Voice Alert</text>
<text x="456" y="44" text-anchor="middle" fill="#475569" font-size="7">"Fire, engine one/two"</text>
<!-- BCF Bottle -->
<line x1="342" y1="68" x2="392" y2="78" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m12)"/>
<rect x="392" y="64" width="128" height="32" rx="4" fill="#0d2818" stroke="rgba(52,211,153,.4)"/>
<text x="456" y="76" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="bold">BCF Bottle (Halon)</text>
<text x="456" y="89" text-anchor="middle" fill="#475569" font-size="7.5">1 shot · shared eng 1+2</text>
<!-- Discharge -->
<line x1="392" y1="90" x2="352" y2="108" stroke="#4b6280" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#m12)"/>
<rect x="222" y="108" width="130" height="22" rx="4" fill="#0a2818" stroke="rgba(52,211,153,.3)"/>
<text x="287" y="120" text-anchor="middle" fill="#34d399" font-size="8">Spray Nozzles → Engine Bay</text>
<!-- Cockpit button -->
<line x1="520" y1="80" x2="560" y2="80" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m12)"/>
<rect x="560" y="64" width="96" height="32" rx="4" fill="#160a00" stroke="rgba(251,191,36,.3)"/>
<text x="608" y="76" text-anchor="middle" fill="#fbbf24" font-size="8.5" font-weight="bold">Cockpit Switch</text>
<text x="608" y="89" text-anchor="middle" fill="#475569" font-size="7.5">Pilot discharge</text>
<!-- Power source -->
<text x="456" y="128" text-anchor="middle" fill="#334155" font-size="7.5">Power: Essential Bus · Logic in Warning Unit (W/U)</text>
</svg></div>`},
{t:"Monitoring & Testing",i:"🔍",h:`<p>The fire detection system can be tested from the cockpit using a <strong>test switch</strong>:</p>
<ul><li>Test switch simulates detector circuit to ground</li><li>Expected result: FIRE caption on W/U illuminates + aural alert activates</li><li>Test must be performed during preflight checks</li></ul>
<p>During normal operation, fire detector circuits are monitored for continuity. An open circuit triggers a CAUTION in the Master List (detector fault).</p>`}
],
kd:[{l:"Fire detectors per engine",v:"2 (accessory gearbox + combustion chamber)"},{l:"Power supply",v:"Essential Bus (both independent)"},{l:"Warning Unit caption",v:"Red FIRE (ENG 1 or ENG 2)"},{l:"Aural warning",v:"Tone + voice: 'Fire, engine one/two'"},{l:"Extinguishant",v:"BCF (Halon)"},{l:"Discharge shots",v:"1 (single bottle for both engines)"},{l:"System logic",v:"Warning Unit (W/U)"}],
quiz:[
{q:"How many fire detectors are installed per engine compartment?",o:["1","2","3","4"],a:1,e:"Each engine compartment has 2 fire detectors: one on the accessory gearbox and one below the combustion chamber casing."},
{q:"What does the FIRE warning trigger in addition to the red W/U caption?",o:["Only visual warning","Visual + aural tone + voice message","Only voice message","Visual warning + autopilot disconnect"],a:1,e:"The FIRE warning triggers: red FIRE caption on W/U, red WARNING on FND Master List, aural tone, and voice message ('Fire, engine one/two')."},
{q:"What type of extinguishant does the EC135 fire extinguishing system use?",o:["CO₂","Dry powder","Water mist","BCF (Halon)"],a:3,e:"The EC135 fire extinguishing system uses BCF (Halon) extinguishant discharged into the engine compartment via spray nozzles."},
{q:"How many extinguisher discharges are available?",o:["1 (one bottle shared between both engines)","2 (one bottle per engine)","3 (with reserve bottle)","4 (two shots per engine)"],a:0,e:"Only ONE discharge is available from a single shared bottle. After it is used, the bottle must be replaced before the next flight."},
{q:"What bus supplies power to the fire detection system?",o:["Main Bus","AMC Bus","Essential Bus","High Load Bus"],a:2,e:"The fire warning system is powered from the Essential Bus, ensuring it remains available even with significant electrical failures."}
]},

{id:13,num:"13",title:"Ice and Rain Protection",sub:"Windshield Wiper & Pitot-Static Heat",icon:"🌧️",color:"#0ea5e9",bg:"rgba(14,165,233,.15)",
desc:"EC135 ice and rain protection: windshield wiper system, pitot-static heating, and optional Inlet Barrier Filter (IBF) for sandy/dusty environments.",
obj:["Describe windshield wiper operation modes","Explain pitot-static heating system","Know the IBF system purpose","Identify EC135 icing limitations"],
sections:[
{t:"Windshield Wiper",i:"🌧️",h:`<p>The EC135 can be equipped with an <strong>optional single-blade windshield wiper</strong>. The system removes water or snow from the windshield.</p>
<p>Components: electric motor + gearbox + two wiper arms + one wiper blade. Powered from <strong>Essential Bus 1</strong>; protected by CB labeled WIPER on overhead console.</p>
<p>Control switch on overhead console — three positions:</p>
<ul><li><strong>SLOW</strong> — Normal operation speed</li><li><strong>FAST</strong> — High speed (heavy rain or snow)</li><li><strong>OFF</strong> — Arm returns to parked position</li></ul>
<p>A <strong>one-shot push button</strong> on the pilot and copilot collective levers provides a single wipe sweep.</p>
<div class="callout c-warn"><div class="ci">⚠️</div><div>Do not operate the wiper on a dry windshield or if the wiper arm is fully folded off the windshield — motor damage may result.</div></div>`},
{t:"Pitot-Static Heating",i:"🌡️",h:`<p>The pitot-static heating system prevents <strong>ice formation on the pitot tubes and static ports</strong>, which would corrupt airspeed and altitude indications.</p>
<p>The system uses <strong>electric heating elements</strong> integrated in the pitot tubes. Operation:</p>
<ul><li>Switches on overhead console enable heating</li><li>A heating FAIL caution is triggered if a heater element fails</li><li>Architecture: heating circuits are monitored by the AMC</li></ul>
<div class="callout c-warn"><div class="ci">⚠️</div><div>Pitot heat should be ON whenever icing conditions are possible. Check that pitot heat is operating correctly (slight heat felt on ground, or temp sensor confirms) during pre-flight.</div></div>
<div class="dg"><p class="dg-title">EC135 — Pitot-Static Heat &amp; IBF System Overview</p><svg viewBox="0 0 660 118" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m13" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#4b6280"/></marker></defs>
<!-- LEFT SIDE: Pitot Heat -->
<rect x="4" y="8" width="300" height="104" rx="6" fill="#060e1c" stroke="rgba(14,165,233,.2)" stroke-width="1"/>
<text x="154" y="24" text-anchor="middle" fill="#0ea5e9" font-size="8.5" font-weight="bold">PITOT-STATIC HEATING SYSTEM</text>
<!-- Pitot tube 1 -->
<rect x="18" y="32" width="118" height="28" rx="4" fill="#0c2d42" stroke="rgba(56,189,248,.4)"/>
<text x="77" y="44" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">Pitot Tube 1 (Pilot)</text>
<text x="77" y="55" text-anchor="middle" fill="#475569" font-size="7">Electric resist. heater element</text>
<!-- Pitot tube 2 -->
<rect x="162" y="32" width="118" height="28" rx="4" fill="#0c2d42" stroke="rgba(56,189,248,.4)"/>
<text x="221" y="44" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">Pitot Tube 2 (Copilot)</text>
<text x="221" y="55" text-anchor="middle" fill="#475569" font-size="7">Electric resist. heater element</text>
<!-- Static ports -->
<rect x="18" y="68" width="118" height="20" rx="3" fill="#0a2030" stroke="rgba(56,189,248,.25)"/>
<text x="77" y="80" text-anchor="middle" fill="#38bdf8" font-size="7.5">Static Ports (heated)</text>
<rect x="162" y="68" width="118" height="20" rx="3" fill="#0a2030" stroke="rgba(56,189,248,.25)"/>
<text x="221" y="80" text-anchor="middle" fill="#38bdf8" font-size="7.5">Static Ports (heated)</text>
<!-- AMC monitoring -->
<line x1="77" y1="88" x2="77" y2="100" stroke="#4b6280" stroke-width="1" marker-end="url(#m13)"/>
<line x1="221" y1="88" x2="221" y2="100" stroke="#4b6280" stroke-width="1" marker-end="url(#m13)"/>
<rect x="50" y="100" width="204" height="14" rx="3" fill="#1e1a00" stroke="rgba(251,191,36,.3)"/>
<text x="152" y="111" text-anchor="middle" fill="#fbbf24" font-size="7.5">AMC monitors → HEAT FAIL caution if element fails</text>
<!-- RIGHT SIDE: IBF -->
<rect x="356" y="8" width="298" height="104" rx="6" fill="#060e1c" stroke="rgba(56,189,248,.15)" stroke-width="1"/>
<text x="505" y="24" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">IBF — INLET BARRIER FILTER (optional)</text>
<rect x="368" y="32" width="128" height="32" rx="4" fill="#0a2030" stroke="rgba(56,189,248,.35)"/>
<text x="432" y="46" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">Filter Element</text>
<text x="432" y="59" text-anchor="middle" fill="#475569" font-size="7.5">Barrier · per engine</text>
<rect x="372" y="72" width="120" height="20" rx="3" fill="#1e1a00" stroke="rgba(251,191,36,.3)"/>
<text x="432" y="84" text-anchor="middle" fill="#fbbf24" font-size="7.5">Bypass Door (auto on high ΔP)</text>
<line x1="432" y1="64" x2="432" y2="72" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m13)"/>
<line x1="432" y1="92" x2="432" y2="102" stroke="#4b6280" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#m13)"/>
<text x="432" y="110" text-anchor="middle" fill="#334155" font-size="7.5">Status → VMS page on MFD</text>
<rect x="510" y="32" width="136" height="50" rx="4" fill="#052e1c" stroke="rgba(52,211,153,.3)"/>
<text x="578" y="46" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">IBF Benefits</text>
<text x="520" y="58" fill="#34d399" font-size="7.5">✓</text><text x="530" y="58" fill="#94a3b8" font-size="7.5">Sand / dust / FOD</text>
<text x="520" y="70" fill="#34d399" font-size="7.5">✓</text><text x="530" y="70" fill="#94a3b8" font-size="7.5">Brownout operations</text>
<text x="520" y="82" fill="#fbbf24" font-size="7.5">→</text><text x="530" y="82" fill="#94a3b8" font-size="7.5">Auto bypass if clogged</text>
</svg></div>`},
{t:"Inlet Barrier Filter (IBF)",i:"🌪️",h:`<p>The <strong>IBF (Inlet Barrier Filter)</strong> is an optional system that prevents <strong>sand, dust, and foreign objects</strong> from entering the engine air intake. Used in desert and brownout environments.</p>
<p>Components per engine:</p>
<ul><li>Filter element (barrier filter)</li><li>Bypass doors — open automatically if filter differential pressure exceeds limit</li><li>Static pressure ports and sensors — monitor filter condition</li></ul>
<p>The IBF status and bypass door position are displayed on the VMS page on the MFD.</p>
<div class="callout c-info"><div class="ci">ℹ️</div><div>When IBF is fitted it also partially addresses operations in light icing — check AFM for approved operations.</div></div>`}
],
kd:[{l:"Wiper type",v:"Single-blade electric (optional)"},{l:"Wiper power supply",v:"Essential Bus 1"},{l:"Wiper speeds",v:"SLOW / FAST / OFF"},{l:"Pitot heat type",v:"Electric resistance heating elements"},{l:"Pitot heat monitoring",v:"AMC — FAIL caution if element fails"},{l:"IBF",v:"Optional — Inlet Barrier Filter (sand/dust/FOD)"},{l:"IBF bypass",v:"Automatic bypass doors on high DP"}],
quiz:[
{q:"What are the three positions of the windshield wiper control switch?",o:["LOW / MED / HIGH","SLOW / FAST / OFF","ON / PARK / OFF","1 / 2 / STOP"],a:1,e:"The wiper switch has three positions: SLOW (normal), FAST (heavy rain/snow), and OFF (arm returns to park position)."},
{q:"From which bus is the windshield wiper powered?",o:["Main Bus 1","High Load Bus 2","Essential Bus 1","AMC Bus"],a:2,e:"The windshield wiper is powered from Essential Bus 1 and is protected by a circuit breaker labeled WIPER on the overhead console."},
{q:"What does the IBF protect against?",o:["Icing only","Sand, dust, and foreign objects entering the engine intake","Bird strike on the windshield","Fuel tank contamination"],a:1,e:"The IBF (Inlet Barrier Filter) prevents sand, dust, and foreign object debris (FOD) from entering the engine air intake, critical in desert/brownout operations."},
{q:"What type of heating does the pitot-static system use?",o:["Hot engine bleed air","Electric resistance heating elements","Hot fuel circulation","Thermoelectric (Peltier) devices"],a:1,e:"The pitot-static heating system uses electric resistance heating elements integrated in the pitot tubes to prevent ice formation."},
{q:"What should be avoided when operating the windshield wiper?",o:["Operating above 100 kt airspeed","Operating on a dry windshield","Operating in snow","Using the FAST setting in light rain"],a:1,e:"Do not operate the wiper on a dry windshield — this can damage the wiper blade, the motor, or scratch the windshield. A thermo switch protects the motor from overheating."}
]},

{id:14,num:"14",title:"Equipment and Furnishing",sub:"Seats, Emergency Equipment & Interior",icon:"💺",color:"#059669",bg:"rgba(5,150,105,.15)",
desc:"EC135 cabin equipment: crew seats, passenger seats, emergency equipment (first aid, flashlight, fire extinguisher, emergency hammer), and interior paneling.",
obj:["Identify all emergency equipment items and locations","Describe crew and passenger seat types","Know portable fire extinguisher specifications","Understand interior paneling and soundproofing"],
sections:[
{t:"Emergency Equipment",i:"🆘",h:`<p>The helicopter carries mandatory <strong>basic emergency equipment</strong> and optional mission-specific additions:</p>
<ul><li><strong>First-Aid Kit</strong> — Per DIN 13164 and JAR-OPS 3; located in luggage net on LH cargo door</li><li><strong>Flashlight</strong> — Standard: LH floor next to pilot seat; optional: at pilot's or copilot's door in clamping device; powered by 2 × 1.5V cells</li><li><strong>Emergency Hammer</strong> — Two holders on centre post; used as belt cutter (not a glass breaker)</li><li><strong>Portable Fire Extinguisher</strong> — 2 kg Halon 1211 (Class A, B, C); operating pressure ~11.0 bar; located in forward cabin area</li></ul>
<div class="callout c-info"><div class="ci">ℹ️</div><div>The emergency hammer is a belt cutter, not used to smash windows. Emergency exits are operated via the door handles or jettison mechanisms.</div></div>
<div class="dg"><p class="dg-title">EC135 — Emergency Equipment Locations (Cabin Overview)</p><svg viewBox="0 0 660 118" xmlns="http://www.w3.org/2000/svg">
<!-- Fuselage top-down outline -->
<rect x="80" y="14" width="500" height="80" rx="12" fill="#0a1525" stroke="rgba(5,150,105,.25)" stroke-width="1.5"/>
<!-- Cockpit section -->
<rect x="80" y="14" width="130" height="80" rx="12" fill="#060e1c" stroke="rgba(5,150,105,.2)"/>
<text x="145" y="57" text-anchor="middle" fill="#334155" font-size="8">Cockpit</text>
<!-- Divider -->
<line x1="210" y1="14" x2="210" y2="94" stroke="rgba(71,85,105,.4)" stroke-width="1.5" stroke-dasharray="4,2"/>
<line x1="460" y1="14" x2="460" y2="94" stroke="rgba(71,85,105,.4)" stroke-width="1.5" stroke-dasharray="4,2"/>
<text x="330" y="30" text-anchor="middle" fill="#334155" font-size="8">Cabin / Passenger Area</text>
<text x="510" y="30" text-anchor="middle" fill="#334155" font-size="8">Aft / Cargo</text>
<!-- First Aid Kit - LH cargo door luggage net -->
<circle cx="222" cy="60" r="12" fill="#059669" stroke="rgba(52,211,153,.5)" stroke-width="1.5"/>
<text x="222" y="57" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">FAK</text>
<text x="222" y="68" text-anchor="middle" fill="#fff" font-size="6">+</text>
<text x="222" y="84" text-anchor="middle" fill="#34d399" font-size="7">First-Aid Kit</text>
<text x="222" y="93" text-anchor="middle" fill="#475569" font-size="6">LH cargo door net</text>
<!-- Portable Fire Extinguisher - forward cabin -->
<circle cx="290" cy="55" r="12" fill="#dc2626" stroke="rgba(248,113,113,.5)" stroke-width="1.5"/>
<text x="290" y="52" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">EXT</text>
<text x="290" y="63" text-anchor="middle" fill="#fff" font-size="6">🧯</text>
<text x="290" y="83" text-anchor="middle" fill="#f87171" font-size="7">Fire Extinguisher</text>
<text x="290" y="93" text-anchor="middle" fill="#475569" font-size="6">2 kg Halon 1211</text>
<!-- Emergency Hammer - centre post -->
<circle cx="360" cy="55" r="12" fill="#d97706" stroke="rgba(251,191,36,.5)" stroke-width="1.5"/>
<text x="360" y="52" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">HAM</text>
<text x="360" y="63" text-anchor="middle" fill="#fff" font-size="6">🔨</text>
<text x="360" y="83" text-anchor="middle" fill="#fbbf24" font-size="7">Emerg. Hammer ×2</text>
<text x="360" y="93" text-anchor="middle" fill="#475569" font-size="6">Centre post · belt cutter</text>
<!-- Flashlight - pilot floor -->
<circle cx="130" cy="58" r="10" fill="#1e3a5f" stroke="rgba(96,165,250,.5)" stroke-width="1.5"/>
<text x="130" y="55" text-anchor="middle" fill="#93c5fd" font-size="6.5" font-weight="bold">FLASH</text>
<text x="130" y="66" text-anchor="middle" fill="#93c5fd" font-size="6">💡</text>
<text x="130" y="84" text-anchor="middle" fill="#60a5fa" font-size="7">Flashlight</text>
<text x="130" y="93" text-anchor="middle" fill="#475569" font-size="6">LH floor / pilot</text>
<!-- ELT - aft area -->
<circle cx="490" cy="55" r="12" fill="#4c1d95" stroke="rgba(192,132,252,.5)" stroke-width="1.5"/>
<text x="490" y="52" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">ELT</text>
<text x="490" y="63" text-anchor="middle" fill="#fff" font-size="6">📡</text>
<text x="490" y="83" text-anchor="middle" fill="#c084fc" font-size="7">ELT Transmitter</text>
<text x="490" y="93" text-anchor="middle" fill="#475569" font-size="6">406 + 121.5 MHz</text>
<!-- FWD / AFT label -->
<text x="84" y="108" fill="#1e293b" font-size="7">FWD ▶</text>
<text x="558" y="108" text-anchor="end" fill="#1e293b" font-size="7">◀ AFT</text>
</svg></div>`},
{t:"Crew Seats",i:"💺",h:`<p>Pilot and copilot seats are fully adjustable:</p>
<ul><li>Fore-aft and vertical adjustment</li><li>4-point harness (shoulder + lap belt + crotch strap)</li><li>Energy-absorbing (crash-attenuating) structure</li><li>Optional: armoured seat panels for law enforcement/military missions</li></ul>`},
{t:"Passenger Seats",i:"🪑",h:`<p>Standard passenger seating: up to <strong>6 passengers in 2 rows</strong> (3-3 configuration) or 5 passengers with additional forward crew seat.</p>
<ul><li>3-point lap/shoulder belt</li><li>High Support Frame for 3-seat bench combinations</li><li>Quickly removable for cargo/medevac conversion</li></ul>
<p>The flat, unobstructed cabin floor allows rapid conversion between passenger, cargo, and EMS (Air Ambulance) configurations.</p>`},
{t:"Interior Paneling & Soundproofing",i:"🔇",h:`<p>The cabin interior panels are lightweight composite. <strong>Soundproofing panels</strong> are installed on the cabin walls, floor, and ceiling to reduce transmitted noise levels.</p>
<p>The aft cabin area (behind the passenger seats) includes the rear cargo compartment, accessible via the clamshell doors.</p>`}
],
kd:[{l:"First-aid kit standard",v:"DIN 13164 + JAR-OPS 3"},{l:"Portable extinguisher",v:"2 kg Halon 1211 — Class A, B, C"},{l:"Extinguisher pressure",v:"approx. 11.0 bar (green zone)"},{l:"Flashlight battery",v:"2 × 1.5 V monocells"},{l:"Emergency hammer",v:"Belt cutter — 2 holders on centre post"},{l:"Max passenger seats",v:"6 standard (up to 7 optionally)"},{l:"Crew harness",v:"4-point (shoulder + lap + crotch)"}],
quiz:[
{q:"What class fires is the portable fire extinguisher rated for?",o:["Class A only","Class B and C only","Class A, B and C","Class D (metal fires)"],a:2,e:"The 2 kg Halon 1211 portable fire extinguisher is approved for Class A (solid), Class B (liquid), and Class C (electrical) fires."},
{q:"What is the emergency hammer used for?",o:["Breaking the windshield in emergencies","As a belt cutter","Breaking passenger windows","Tapping hydraulic lines during maintenance"],a:1,e:"The emergency hammer in the EC135 is a belt cutter, used to cut seat harnesses if occupants cannot release them after a crash. It is NOT used to smash windows."},
{q:"Where is the first-aid kit located?",o:["Overhead console","Pilot's door pocket","Luggage net on the LH cargo door","Aft cargo compartment"],a:2,e:"The first-aid kit is located in the luggage net on the LH (left-hand) cargo door."},
{q:"What is the operating pressure of the portable fire extinguisher?",o:["5.5 bar","8.0 bar","11.0 bar","15.0 bar"],a:2,e:"The portable Halon fire extinguisher has an operating pressure of approximately 11.0 bar, indicated in the green zone on its pressure gauge."},
{q:"How many points does the crew seat harness have?",o:["2-point lap belt","3-point shoulder + lap","4-point (shoulder + lap + crotch)","5-point racing harness"],a:2,e:"Crew seats have a 4-point harness: left and right shoulder straps, lap belt, and crotch strap."}
]},

{id:15,num:"15",title:"Heating and Ventilation",sub:"Cabin Climate Control",icon:"🌡️",color:"#d97706",bg:"rgba(217,119,6,.15)",
desc:"EC135 heating and ventilation system: engine bleed air mixing system (SN 1000+), cockpit fan, air-switch unit, windscreen defog, and temperature control.",
obj:["Describe the heating system architecture","Explain bleed air mixing valve operation","Identify ventilation system components","Know windscreen defogging operation"],
sections:[
{t:"System Architecture",i:"🌡️",h:`<p>The heating and ventilation systems are <strong>two separate systems interconnected</strong> in the forward bottom fuselage.</p>
<p>Two design generations exist:</p>
<ul><li><strong>Before SN 1000</strong> — Combustion heater (burns fuel to produce heat)</li><li><strong>SN 1000 and above</strong> — Engine bleed air system (current standard)</li></ul>`},
{t:"Heating System (SN 1000+)",i:"🔥",h:`<p>On helicopters from SN 1000: heating is supplied by <strong>engine bleed air</strong>:</p>
<ul><li><strong>Bleed air lines</strong> — Tapped from engine compressor stage</li><li><strong>Mixing valve</strong> — Electrically controlled; blends hot bleed air with cooler cabin air</li><li><strong>Temperature sensor and switches</strong> — Regulate output temperature</li><li><strong>Control box</strong> — Processes temperature demand</li><li><strong>Ducting</strong> — Routes conditioned air to cockpit and cabin</li></ul>
<div class="callout c-info"><div class="ci">ℹ️</div><div>The bleed air system is controlled from the cockpit heating panel. Temperature is set by the crew via a rotary control.</div></div>
<div class="dg"><p class="dg-title">EC135 — Bleed Air Heating System Flow (SN 1000+)</p><svg viewBox="0 0 660 128" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m15" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#4b6280"/></marker></defs>
<!-- Engine bleed source -->
<rect x="6" y="18" width="100" height="44" rx="5" fill="#2c1200" stroke="rgba(251,146,60,.4)" stroke-width="1.5"/>
<text x="56" y="36" text-anchor="middle" fill="#fb923c" font-size="8.5" font-weight="bold">Engine</text>
<text x="56" y="49" text-anchor="middle" fill="#fb923c" font-size="8.5" font-weight="bold">Compressor</text>
<text x="56" y="60" text-anchor="middle" fill="#475569" font-size="7">Hot bleed air</text>
<!-- Bleed line -->
<line x1="106" y1="40" x2="148" y2="40" stroke="#fb923c" stroke-width="2" marker-end="url(#m15)"/>
<text x="127" y="36" text-anchor="middle" fill="#92400e" font-size="7">Bleed line</text>
<!-- Mixing valve -->
<rect x="148" y="22" width="110" height="54" rx="5" fill="#2d1d06" stroke="rgba(251,191,36,.5)" stroke-width="2"/>
<text x="203" y="42" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">Mixing Valve</text>
<text x="203" y="54" text-anchor="middle" fill="#d97706" font-size="8">(Elec. controlled)</text>
<text x="203" y="67" text-anchor="middle" fill="#475569" font-size="7.5">Blends hot + cool air</text>
<!-- Cabin recirculation in -->
<rect x="6" y="80" width="100" height="34" rx="4" fill="#0c2240" stroke="rgba(56,189,248,.3)"/>
<text x="56" y="96" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">Cabin Air</text>
<text x="56" y="108" text-anchor="middle" fill="#475569" font-size="7.5">(cooler return)</text>
<line x1="106" y1="97" x2="148" y2="64" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#m15)"/>
<!-- Control box + temp sensor -->
<rect x="148" y="84" width="110" height="32" rx="4" fill="#1e1a00" stroke="rgba(251,191,36,.3)"/>
<text x="203" y="98" text-anchor="middle" fill="#fbbf24" font-size="8">Control Box</text>
<text x="203" y="110" text-anchor="middle" fill="#475569" font-size="7">Temp sensor / demand</text>
<line x1="203" y1="84" x2="203" y2="76" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#m15)"/>
<!-- Conditioned air out -->
<line x1="258" y1="40" x2="298" y2="40" stroke="#fbbf24" stroke-width="2" marker-end="url(#m15)"/>
<text x="278" y="36" text-anchor="middle" fill="#92400e" font-size="7">Conditioned</text>
<!-- Distribution box -->
<rect x="298" y="22" width="110" height="54" rx="5" fill="#1c1a00" stroke="rgba(251,191,36,.4)" stroke-width="1.5"/>
<text x="353" y="42" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">Air-Switch Unit</text>
<text x="353" y="55" text-anchor="middle" fill="#475569" font-size="7.5">Routes air to:</text>
<text x="353" y="66" text-anchor="middle" fill="#d97706" font-size="7.5">Panel OR Defog</text>
<!-- Instrument nozzles -->
<line x1="408" y1="32" x2="458" y2="20" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#m15)"/>
<rect x="458" y="8" width="148" height="24" rx="4" fill="#0d1f35" stroke="rgba(251,191,36,.3)"/>
<text x="532" y="22" text-anchor="middle" fill="#94a3b8" font-size="8">Instrument panel nozzles</text>
<!-- Windscreen defog -->
<line x1="408" y1="52" x2="458" y2="58" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#m15)"/>
<rect x="458" y="44" width="148" height="24" rx="4" fill="#0c2d42" stroke="rgba(56,189,248,.35)"/>
<text x="532" y="57" text-anchor="middle" fill="#38bdf8" font-size="8">Windscreen defog ducts</text>
<!-- Cabin outlet -->
<line x1="353" y1="76" x2="353" y2="96" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#m15)"/>
<rect x="298" y="96" width="110" height="22" rx="4" fill="#0a1525" stroke="rgba(251,191,36,.25)"/>
<text x="353" y="111" text-anchor="middle" fill="#64748b" font-size="8">Cabin floor outlets</text>
<!-- Overhead rotary control label -->
<rect x="458" y="78" width="148" height="24" rx="4" fill="#160a00" stroke="rgba(251,191,36,.2)"/>
<text x="532" y="91" text-anchor="middle" fill="#fbbf24" font-size="8">Cockpit rotary control</text>
<text x="532" y="101" text-anchor="middle" fill="#475569" font-size="7">Crew temp. selection</text>
</svg></div>`},
{t:"Ventilation System",i:"💨",h:`<p>The ventilation system provides <strong>fresh air circulation</strong> to the cockpit:</p>
<ul><li><strong>Cockpit fan (ventilation blower)</strong> — Draws fresh outside air from intake on middle access cover, or recirculates cabin air via recirculation duct</li><li><strong>Flap valve</strong> — Selects between fresh air intake and recirculation</li><li><strong>Air-switch unit</strong> — Routes air to ventilation nozzles in instrument panel OR through ejector to windscreen ducts</li></ul>`},
{t:"Windscreen Defogging",i:"🌬️",h:`<p>The heating system can direct warm conditioned air to the <strong>windscreen ducts</strong> to prevent or remove fogging/icing of the inside of the windshields.</p>
<p>The air-switch unit redirects airflow from the instrument panel nozzles to the windscreen ducts when defog is selected.</p>
<div class="callout c-warn"><div class="ci">⚠️</div><div>Windscreen fogging can cause rapid loss of visibility. Select DEFOG early if fogging is anticipated (e.g., transitioning from hot cabin to cold outside air).</div></div>`}
],
kd:[{l:"System type (SN 1000+)",v:"Engine bleed air + mixing valve"},{l:"System type (<SN 1000)",v:"Combustion heater (fuel-fired)"},{l:"Mixing valve",v:"Electrically controlled — blends bleed + cabin air"},{l:"Ventilation",v:"Cockpit fan + air-switch unit"},{l:"Defog",v:"Bleed air redirected to windscreen ducts"},{l:"Temperature control",v:"Rotary control (crew selectable)"},{l:"ATA reference",v:"ATA 21"}],
quiz:[
{q:"How is the cabin heated in EC135 helicopters from SN 1000 onward?",o:["Electric resistance heaters","Engine bleed air through a mixing valve","A fuel-fired combustion heater","Hot oil circulation from the MGB"],a:1,e:"From SN 1000 onward, the EC135 uses engine bleed air mixed with cabin air via an electrically controlled mixing valve to produce conditioned air."},
{q:"What does the mixing valve do?",o:["Mixes hydraulic fluid from both systems","Blends hot engine bleed air with cooler cabin air to control temperature","Mixes fuel from both tanks","Blends fresh air with recirculated air only"],a:1,e:"The electrically controlled mixing valve blends hot engine bleed air with cooler cabin air to produce the desired cabin temperature."},
{q:"What is the function of the air-switch unit?",o:["Switches between electrical buses","Routes air to either instrument panel nozzles or windscreen ducts","Controls bleed air valve position","Monitors cabin CO2 levels"],a:1,e:"The air-switch unit directs conditioned air either to the ventilation nozzles in the instrument panel or through the ejector to the windscreen defog ducts."},
{q:"What does the cockpit ventilation blower do?",o:["Draws in engine cooling air","Provides cooling for the avionics bay","Draws fresh air from intake or recirculates cabin air","Pressurises the hydraulic reservoir"],a:2,e:"The cockpit fan (ventilation blower) draws fresh air from the outside air intake on the middle access cover, or recirculates cabin air through the recirculation duct."},
{q:"What type of heating did EC135s before SN 1000 use?",o:["Electric convection heaters","Engine bleed air only","Combustion heater (fuel-fired)","MGB oil waste heat"],a:2,e:"EC135s before SN 1000 used a combustion heater — a small heater unit that burns helicopter fuel (or diesel) to generate cabin heat."}
]},

{id:16,num:"16",title:"Avionics Generalities",sub:"Comm, Nav & Surveillance Systems",icon:"📡",color:"#7c3aed",bg:"rgba(124,58,237,.15)",
desc:"EC135 avionics: VHF communication, VOR/ILS navigation, ADF, GPS/DGPS, radar altimeter, ATC transponder, ELT, DME, marker beacon, and intercom (DVCS 6100).",
obj:["Identify communication and navigation systems fitted","Describe VHF COM and VOR/ILS functions","Explain ATC transponder and ELT","Know GPS/DGPS capabilities"],
sections:[
{t:"Avionics Architecture",i:"📡",h:`<p>The EC135 avionics are located on the <strong>avionics deck</strong> (nose section), the <strong>slant console</strong>, and the <strong>centre console</strong>. All systems interface with the Helionix® IMA via ARINC 429 or dedicated buses.</p>
<p>Key avionics systems:</p>
<ul><li>VHF AM Communication (×2)</li><li>VOR/ILS Navigation</li><li>ADF</li><li>GPS (with optional DGPS)</li><li>Radar Altimeter</li><li>ATC Transponder (Mode S)</li><li>ELT (Emergency Location Transmitter)</li><li>DME (Distance Measuring Equipment)</li><li>Marker Beacon</li><li>Intercom (DVCS 6100)</li></ul>
<div class="dg"><p class="dg-title">EC135 — COM / NAV / Surveillance Block Diagram</p><svg viewBox="0 0 660 148" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m16" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="#4b6280"/></marker></defs>
<text x="90" y="12" text-anchor="middle" fill="#475569" font-size="8" font-weight="bold">COMMUNICATION</text>
<text x="330" y="12" text-anchor="middle" fill="#475569" font-size="8" font-weight="bold">NAVIGATION</text>
<text x="550" y="12" text-anchor="middle" fill="#475569" font-size="8" font-weight="bold">SURVEILLANCE</text>
<!-- COM systems -->
<rect x="6" y="18" width="168" height="24" rx="4" fill="#0c2240" stroke="rgba(124,58,237,.4)" stroke-width="1.5"/>
<text x="90" y="30" text-anchor="middle" fill="#a78bfa" font-size="8.5" font-weight="bold">VHF COM 1 — 118–137 MHz</text>
<text x="90" y="39" text-anchor="middle" fill="#475569" font-size="7">Guard 121.5 MHz monitor</text>
<rect x="6" y="46" width="168" height="24" rx="4" fill="#0c2240" stroke="rgba(124,58,237,.35)"/>
<text x="90" y="58" text-anchor="middle" fill="#a78bfa" font-size="8.5" font-weight="bold">VHF COM 2 — 118–137 MHz</text>
<text x="90" y="67" text-anchor="middle" fill="#475569" font-size="7">Standby / backup</text>
<rect x="6" y="74" width="168" height="22" rx="4" fill="#1a1040" stroke="rgba(124,58,237,.3)"/>
<text x="90" y="85" text-anchor="middle" fill="#818cf8" font-size="8">Intercom DVCS 6100</text>
<text x="90" y="93" text-anchor="middle" fill="#475569" font-size="7">Digital Voice Comm. System</text>
<!-- NAV systems -->
<rect x="212" y="18" width="236" height="22" rx="4" fill="#052e1c" stroke="rgba(52,211,153,.4)"/>
<text x="330" y="30" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="bold">VOR / ILS LOC + G/S</text>
<text x="330" y="37" text-anchor="middle" fill="#475569" font-size="7">VHF NAV · Displayed on FND / NAVD</text>
<rect x="212" y="44" width="236" height="22" rx="4" fill="#052e1c" stroke="rgba(52,211,153,.35)"/>
<text x="330" y="56" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="bold">GPS / FMS (+ opt. DGPS)</text>
<text x="330" y="63" text-anchor="middle" fill="#475569" font-size="7">Position · Track · Ground speed</text>
<rect x="212" y="70" width="110" height="22" rx="4" fill="#062038" stroke="rgba(56,189,248,.35)"/>
<text x="267" y="82" text-anchor="middle" fill="#38bdf8" font-size="8">ADF / NDB</text>
<text x="267" y="91" text-anchor="middle" fill="#475569" font-size="7">190–1750 kHz</text>
<rect x="328" y="70" width="120" height="22" rx="4" fill="#062038" stroke="rgba(56,189,248,.3)"/>
<text x="388" y="82" text-anchor="middle" fill="#38bdf8" font-size="8">DME</text>
<text x="388" y="91" text-anchor="middle" fill="#475569" font-size="7">Distance · Slant range</text>
<rect x="212" y="96" width="236" height="22" rx="4" fill="#0c2030" stroke="rgba(56,189,248,.25)"/>
<text x="330" y="108" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">Radar Altimeter</text>
<text x="330" y="117" text-anchor="middle" fill="#475569" font-size="7">Height AGL · AFCS coupling · DH</text>
<rect x="212" y="122" width="110" height="20" rx="4" fill="#0a1428" stroke="rgba(56,189,248,.2)"/>
<text x="267" y="133" text-anchor="middle" fill="#38bdf8" font-size="8">Marker Beacon</text>
<rect x="328" y="122" width="120" height="20" rx="4" fill="#0a1428" stroke="rgba(56,189,248,.2)"/>
<text x="388" y="133" text-anchor="middle" fill="#38bdf8" font-size="8">IESI (standby)</text>
<!-- SURV systems -->
<rect x="478" y="18" width="176" height="28" rx="4" fill="#1e0a3e" stroke="rgba(192,132,252,.5)"/>
<text x="566" y="30" text-anchor="middle" fill="#c084fc" font-size="8.5" font-weight="bold">Mode S Transponder</text>
<text x="566" y="42" text-anchor="middle" fill="#475569" font-size="7">Squawk · Alt report · ADS-B opt.</text>
<rect x="478" y="50" width="176" height="28" rx="4" fill="#2c0808" stroke="rgba(248,113,113,.45)"/>
<text x="566" y="62" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="bold">ELT</text>
<text x="566" y="74" text-anchor="middle" fill="#475569" font-size="7">121.5 + 406 MHz · COSPAS-SARSAT</text>
<rect x="478" y="82" width="176" height="28" rx="4" fill="#062030" stroke="rgba(56,189,248,.3)"/>
<text x="566" y="94" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">HTAWS</text>
<text x="566" y="106" text-anchor="middle" fill="#475569" font-size="7">Terrain · FLTA · GPWS modes</text>
<rect x="478" y="114" width="176" height="28" rx="4" fill="#062030" stroke="rgba(56,189,248,.25)"/>
<text x="566" y="126" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">ACAS (Traffic)</text>
<text x="566" y="138" text-anchor="middle" fill="#475569" font-size="7">TA / RA · Displayed on NAVD</text>
<!-- Central bus label -->
<text x="330" y="146" text-anchor="middle" fill="#1e293b" font-size="7.5">All systems interface via ARINC 429 / Ethernet to Helionix® AMC → MFD display</text>
</svg></div>`},
{t:"VHF Communication",i:"📻",h:`<p>Two <strong>VHF AM COM radios</strong> provide primary air-ground voice communication. Features:</p>
<ul><li>Frequency range: 118–136.975 MHz (25 kHz channel spacing, or 8.33 kHz optional)</li><li>Standby frequency selection and rapid swap</li><li>Controlled from slant console or via MFD</li><li>Guard monitoring (121.5 MHz) available</li></ul>`},
{t:"VOR / ILS",i:"🧭",h:`<p><strong>VOR</strong> (VHF Omnidirectional Range): provides magnetic bearing from a ground station. Displayed on the NAVD (rose or arc format) and on the FND as HSI deviation.</p>
<p><strong>ILS</strong> (Instrument Landing System): provides precision approach guidance:</p>
<ul><li><strong>LOC (Localizer)</strong> — lateral deviation display</li><li><strong>G/S (Glide Slope)</strong> — vertical deviation display</li><li>Both displayed on the FND and available for autopilot coupling</li></ul>`},
{t:"GPS / DGPS & Radar Altimeter",i:"🛰️",h:`<p><strong>GPS</strong>: Provides position, track, and ground speed. Integrated with FMS in Helionix® for navigation. Displayed on NAVD.</p>
<p><strong>DGPS</strong>: Optional differential correction for improved position accuracy (used for precision approaches).</p>
<p><strong>Radar Altimeter (RadAlt)</strong>: Measures actual height above ground using radar pulses. Essential for low-level operations, approach minimums (Decision Height), and autopilot altitude hold near terrain. Displayed on FND.</p>`},
{t:"Transponder & ELT",i:"📶",h:`<p><strong>ATC Transponder (Mode S)</strong>: Responds to SSR radar interrogations with aircraft identity (squawk code) and altitude (Mode C). Mode S allows selective addressing and data link (ADS-B on some variants).</p>
<p><strong>ELT (Emergency Location Transmitter)</strong>: Activates automatically on crash impact (G-switch) and transmits distress signal on 121.5 MHz and 406 MHz (COSPAS-SARSAT). Test procedure: brief test during preflight using test switch.</p>
<div class="callout c-warn"><div class="ci">⚠️</div><div>Do not accidentally activate the ELT during ground tests — set to TEST, not ON. An inadvertent transmission must be reported to ATC immediately.</div></div>`}
],
kd:[{l:"VHF COM",v:"2 × VHF AM (118–136.975 MHz)"},{l:"VOR/ILS",v:"1 × combined VHF NAV receiver"},{l:"ADF",v:"Automatic Direction Finder"},{l:"GPS",v:"GPS with optional DGPS"},{l:"Radar altimeter",v:"Standard fit"},{l:"Transponder",v:"Mode S (with ADS-B option)"},{l:"ELT frequencies",v:"121.5 MHz + 406 MHz (COSPAS-SARSAT)"},{l:"Intercom",v:"DVCS 6100 Digital Voice Communication System"},{l:"DME",v:"Distance Measuring Equipment"}],
quiz:[
{q:"What transponder mode does the EC135 use?",o:["Mode A only","Mode C only","Mode S","Mode 3/A"],a:2,e:"The EC135 uses a Mode S transponder, which supports selective addressing, altitude reporting (Mode C), and optional ADS-B."},
{q:"On which frequencies does the EC135 ELT transmit in distress?",o:["243 MHz and 406 MHz","121.5 MHz and 406 MHz","121.5 MHz only","406 MHz only"],a:1,e:"The EC135 ELT transmits on 121.5 MHz (guard frequency) and 406 MHz (COSPAS-SARSAT satellite detection), ensuring both air and satellite detection."},
{q:"What does the Radar Altimeter measure?",o:["Barometric altitude above MSL","True altitude above sea level","Actual height above ground (AGL) using radar","GPS altitude above WGS-84 ellipsoid"],a:2,e:"The radar altimeter measures true height above the terrain directly below using radar pulses (radio altimetry), not barometric pressure."},
{q:"What does DVCS 6100 stand for?",o:["Digital Voice Communication System","Digital VHF Control System","Dual Volume Cockpit System","Direct Voice Call System"],a:0,e:"DVCS 6100 = Digital Voice Communication System 6100 — the intercom system for crew communication on the EC135."},
{q:"What navigation system provides bearing from a VHF ground station?",o:["ADF (Automatic Direction Finder)","GPS","VOR (VHF Omnidirectional Range)","DME (Distance Measuring Equipment)"],a:2,e:"VOR (VHF Omnidirectional Range) provides magnetic bearing from a ground station. ADF uses NDB (Non-Directional Beacon) on lower frequencies."}
]},

{id:17,num:"17",title:"Electrical System",sub:"DC Power, Batteries & Distribution",icon:"⚡",color:"#ca8a04",bg:"rgba(202,138,4,.15)",
desc:"EC135 fully redundant 28V DC electrical system: starter/generators, NiCd batteries, bus architecture (Main, Essential, SHED, High Load, Emergency), external power, and optional AC.",
obj:["Describe the DC power generation system","Identify the bus hierarchy and redundancy","Explain battery and emergency power","Know external power and AC system"],
sections:[
{t:"DC Power Generation",i:"⚡",h:`<p>The EC135 uses a <strong>28 V DC fully redundant electrical system</strong>. Main power sources:</p>
<ul><li><strong>2 × Starter/Generators</strong> — one per engine, driven by engine accessory gearbox; each rated ~300 A; operates as starter during engine start, then switches to generator mode</li><li><strong>2 × NiCd Batteries</strong> — main battery for start and backup power</li><li><strong>1 × Standby Battery</strong> — Emergency Power Supply Unit (EPSU); provides essential systems power after main system failure</li></ul>`},
{t:"Bus Architecture",i:"🔌",h:`<p>The distribution system uses multiple buses for redundancy:</p>
<ul><li><strong>Main Bus 1 &amp; 2</strong> — Primary distribution; connected to generators</li><li><strong>Essential (ESS) Bus 1 &amp; 2</strong> — Critical flight systems; powered from Main buses; survive most failures</li><li><strong>SHED Bus 1 &amp; 2</strong> — Non-essential loads; automatically shed in abnormal conditions</li><li><strong>High Load Bus 1 &amp; 2</strong> — High-current consumers (e.g. heating systems)</li><li><strong>AMC Bus 1 &amp; 2</strong> — Helionix® AMC computers</li><li><strong>Emergency Bus</strong> — Minimum essential systems; powered by standby battery if all else fails</li></ul>
<div class="dg"><p class="dg-title">EC135 — 28 V DC Electrical Bus Architecture</p><svg viewBox="0 0 660 188" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m17" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="#4b6280"/></marker></defs>
<!-- Generators -->
<rect x="6" y="6" width="140" height="28" rx="4" fill="#2a1d00" stroke="rgba(250,204,21,.5)" stroke-width="1.5"/>
<text x="76" y="18" text-anchor="middle" fill="#facc15" font-size="9" font-weight="bold">Starter/Generator 1</text>
<text x="76" y="30" text-anchor="middle" fill="#475569" font-size="7.5">Engine 1 · ~300 A</text>
<rect x="514" y="6" width="140" height="28" rx="4" fill="#2a1d00" stroke="rgba(250,204,21,.5)" stroke-width="1.5"/>
<text x="584" y="18" text-anchor="middle" fill="#facc15" font-size="9" font-weight="bold">Starter/Generator 2</text>
<text x="584" y="30" text-anchor="middle" fill="#475569" font-size="7.5">Engine 2 · ~300 A</text>
<!-- Batteries -->
<rect x="240" y="6" width="90" height="28" rx="4" fill="#1a1000" stroke="rgba(250,204,21,.35)"/>
<text x="285" y="20" text-anchor="middle" fill="#facc15" font-size="8.5">NiCd Bat 1</text>
<text x="285" y="31" text-anchor="middle" fill="#475569" font-size="7">Main</text>
<rect x="336" y="6" width="90" height="28" rx="4" fill="#1a1000" stroke="rgba(250,204,21,.35)"/>
<text x="381" y="20" text-anchor="middle" fill="#facc15" font-size="8.5">NiCd Bat 2</text>
<text x="381" y="31" text-anchor="middle" fill="#475569" font-size="7">Main</text>
<!-- Arrows to Main Buses -->
<line x1="76" y1="34" x2="76" y2="44" stroke="#facc15" stroke-width="1.5" marker-end="url(#m17)"/>
<line x1="584" y1="34" x2="584" y2="44" stroke="#facc15" stroke-width="1.5" marker-end="url(#m17)"/>
<line x1="285" y1="34" x2="285" y2="54" stroke="#facc15" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#m17)"/>
<line x1="381" y1="34" x2="381" y2="54" stroke="#facc15" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#m17)"/>
<!-- Main Buses -->
<rect x="6" y="44" width="300" height="26" rx="4" fill="#2a1d00" stroke="rgba(250,204,21,.6)" stroke-width="2"/>
<text x="156" y="59" text-anchor="middle" fill="#facc15" font-size="10" font-weight="bold">MAIN BUS 1</text>
<rect x="354" y="44" width="300" height="26" rx="4" fill="#2a1d00" stroke="rgba(250,204,21,.6)" stroke-width="2"/>
<text x="504" y="59" text-anchor="middle" fill="#facc15" font-size="10" font-weight="bold">MAIN BUS 2</text>
<!-- Bus Tie -->
<line x1="306" y1="57" x2="354" y2="57" stroke="#fbbf24" stroke-width="2"/>
<rect x="312" y="50" width="36" height="14" rx="3" fill="#1a0e00" stroke="rgba(251,191,36,.7)"/>
<text x="330" y="60" text-anchor="middle" fill="#fbbf24" font-size="7" font-weight="bold">BUS TIE</text>
<!-- Essential Buses -->
<line x1="100" y1="70" x2="100" y2="82" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m17)"/>
<rect x="6" y="82" width="210" height="24" rx="4" fill="#0c2240" stroke="rgba(96,165,250,.5)" stroke-width="1.5"/>
<text x="111" y="97" text-anchor="middle" fill="#60a5fa" font-size="9" font-weight="bold">ESSENTIAL BUS 1 (ESS1)</text>
<line x1="560" y1="70" x2="560" y2="82" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m17)"/>
<rect x="444" y="82" width="210" height="24" rx="4" fill="#0c2240" stroke="rgba(96,165,250,.5)" stroke-width="1.5"/>
<text x="549" y="97" text-anchor="middle" fill="#60a5fa" font-size="9" font-weight="bold">ESSENTIAL BUS 2 (ESS2)</text>
<!-- AMC Buses -->
<line x1="200" y1="70" x2="200" y2="82" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m17)"/>
<rect x="230" y="82" width="90" height="24" rx="4" fill="#14104a" stroke="rgba(129,140,248,.5)"/>
<text x="275" y="91" text-anchor="middle" fill="#818cf8" font-size="8">AMC Bus 1</text>
<text x="275" y="101" text-anchor="middle" fill="#475569" font-size="7">Helionix®</text>
<line x1="460" y1="70" x2="460" y2="82" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m17)"/>
<rect x="340" y="82" width="90" height="24" rx="4" fill="#14104a" stroke="rgba(129,140,248,.5)"/>
<text x="385" y="91" text-anchor="middle" fill="#818cf8" font-size="8">AMC Bus 2</text>
<text x="385" y="101" text-anchor="middle" fill="#475569" font-size="7">Helionix®</text>
<!-- SHED Buses -->
<line x1="60" y1="106" x2="60" y2="118" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m17)"/>
<rect x="6" y="118" width="200" height="22" rx="4" fill="#1a1000" stroke="rgba(100,116,139,.4)"/>
<text x="106" y="130" text-anchor="middle" fill="#94a3b8" font-size="8.5">SHED Bus 1 (non-essential)</text>
<line x1="600" y1="106" x2="600" y2="118" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m17)"/>
<rect x="454" y="118" width="200" height="22" rx="4" fill="#1a1000" stroke="rgba(100,116,139,.4)"/>
<text x="554" y="130" text-anchor="middle" fill="#94a3b8" font-size="8.5">SHED Bus 2 (non-essential)</text>
<!-- High Load Buses -->
<line x1="156" y1="106" x2="156" y2="118" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m17)"/>
<rect x="214" y="118" width="100" height="22" rx="4" fill="#1e0a0a" stroke="rgba(248,113,113,.4)"/>
<text x="264" y="130" text-anchor="middle" fill="#f87171" font-size="8.5">Hi-Load Bus 1</text>
<line x1="504" y1="106" x2="504" y2="118" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m17)"/>
<rect x="346" y="118" width="100" height="22" rx="4" fill="#1e0a0a" stroke="rgba(248,113,113,.4)"/>
<text x="396" y="130" text-anchor="middle" fill="#f87171" font-size="8.5">Hi-Load Bus 2</text>
<!-- Emergency bus from EPSU -->
<rect x="252" y="150" width="156" height="30" rx="4" fill="#0d0d0d" stroke="rgba(100,116,139,.6)" stroke-width="2"/>
<text x="330" y="163" text-anchor="middle" fill="#94a3b8" font-size="9" font-weight="bold">EMERGENCY BUS</text>
<text x="330" y="175" text-anchor="middle" fill="#475569" font-size="7.5">Min. essential · EPSU backup</text>
<line x1="111" y1="106" x2="330" y2="150" stroke="#475569" stroke-width="1" stroke-dasharray="4,2" marker-end="url(#m17)"/>
<!-- EPSU -->
<rect x="540" y="150" width="116" height="30" rx="4" fill="#1a1000" stroke="rgba(250,204,21,.35)"/>
<text x="598" y="163" text-anchor="middle" fill="#facc15" font-size="8.5">EPSU</text>
<text x="598" y="175" text-anchor="middle" fill="#475569" font-size="7.5">Standby Battery</text>
<line x1="540" y1="165" x2="408" y2="165" stroke="#facc15" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#m17)"/>
</svg></div>`},
{t:"Battery System",i:"🔋",h:`<p>The <strong>main NiCd battery</strong> provides:</p>
<ul><li>Power for engine starting (via starter/generator)</li><li>Backup power if both generators fail</li><li>Battery monitoring includes: temperature monitoring and discharge monitoring via Battery Master Box (BMB)</li></ul>
<p>The <strong>standby battery (EPSU)</strong> provides emergency power to the Emergency Bus if main power is lost. A separate STANDBY BATT switch controls it.</p>`},
{t:"External & AC Power",i:"🔌",h:`<p><strong>External Power Supply (GPU)</strong>: A ground power unit can be connected via the external power receptacle. When connected and within limits, it powers the aircraft buses without using onboard battery or generators.</p>
<p><strong>AC Power (optional)</strong>: An inverter can provide AC power (typically 115 V AC, 400 Hz) from the DC system for specific equipment (e.g., weather radar, some navigation equipment).</p>
<div class="callout c-info"><div class="ci">ℹ️</div><div>Bus Tie contactor allows buses 1 and 2 to be joined. In single-generator operation, one generator powers both sides via the Bus Tie.</div></div>`}
],
kd:[{l:"System voltage",v:"28 V DC"},{l:"Generators",v:"2 × Starter/Generator (~300 A each)"},{l:"Batteries",v:"2 × NiCd main battery"},{l:"Standby battery",v:"EPSU — Emergency Power Supply Unit"},{l:"Bus types",v:"Main / ESS / SHED / High Load / AMC / Emergency"},{l:"External power",v:"GPU via external power receptacle"},{l:"AC power",v:"Optional inverter (115V AC 400Hz)"},{l:"Battery monitoring",v:"BMB — Battery Master Box (temp + discharge)"}],
quiz:[
{q:"What is the voltage of the EC135 DC electrical system?",o:["14 V DC","24 V DC","28 V DC","48 V DC"],a:2,e:"The EC135 uses a fully redundant 28 V DC electrical system — standard for modern helicopters."},
{q:"What dual function do the EC135 generators serve?",o:["Generator and battery charger","Starter and Generator","Hydraulic pump and generator","Generator and inverter"],a:1,e:"The EC135 Starter/Generators operate as starters during engine start (drawing current from the battery), then switch automatically to generator mode once the engine is running."},
{q:"What is the purpose of the SHED buses?",o:["Supply essential flight systems","Power AMC computers","Non-essential loads that can be automatically shed","High-current consumers only"],a:2,e:"SHED buses supply non-essential loads (lighting, cabin comfort, etc.) that are automatically disconnected (shed) when the electrical system is in a degraded state."},
{q:"What does EPSU stand for?",o:["External Power Supply Unit","Emergency Power Supply Unit","Electrical Protection System Unit","Engine Power Sensor Unit"],a:1,e:"EPSU = Emergency Power Supply Unit — the standby battery system that powers the Emergency Bus if all main power sources fail."},
{q:"What allows a single generator to power both bus sides?",o:["Diode isolators","Battery crossfeed","Bus Tie contactor","Blocking relay"],a:2,e:"The Bus Tie contactor electrically joins Bus 1 and Bus 2 together, allowing a single operating generator to power both sides of the electrical system."}
]},

{id:18,num:"18",title:"Inspections",sub:"Scheduled Maintenance & Check Types",icon:"🔍",color:"#475569",bg:"rgba(71,85,105,.15)",
desc:"EC135 inspection system: inspection types (visual, condition, functional, crack), scheduled inspection intervals, preflight check, and continuous maintenance program.",
obj:["Identify the four types of inspections","Know the inspection interval schedule","Describe the preflight check requirements","Understand continuous maintenance program concept"],
sections:[
{t:"Types of Inspections",i:"🔍",h:`<p>The EC135 inspection system defines four types:</p>
<ul><li><strong>Visual Inspection</strong> — External condition check without removing parts. Identifies obvious damage, leaks, deformation, missing hardware.</li><li><strong>Condition Inspection</strong> — Extended visual with additional steps: checks for corrosion, wear, secure installation. May require removal of parts or use of measuring instruments.</li><li><strong>Functional Test</strong> — Verifies correct operation of units/systems/subsystems (e.g., engine ground run, hydraulic pressure test).</li><li><strong>Inspection for Cracks</strong> — Detects fatigue or stress cracks:</li></ul>
<ul style="margin-left:40px"><li>Visual inspection (bare eye or magnifying glass)</li><li>Penetrant crack inspection (dye penetrant)</li><li>Magnetic particle crack inspection</li></ul>`},
{t:"Scheduled Inspections",i:"📅",h:`<p>Airworthiness of the EC135 requires scheduled checks per <strong>AMM Chapter 05</strong>:</p>
<ul><li><strong>Preflight Check</strong> — Before the first flight of the day (items marked ★ required before EACH flight). Can be performed by pilot or licensed mechanic.</li><li><strong>Daily Check (A-Check)</strong> — After each flying day or at a set interval</li><li><strong>50-hour Check</strong> — Periodic inspection every 50 flight hours</li><li><strong>300 / 600-hour Checks</strong> — Deeper periodic inspections</li><li><strong>Annual Inspection</strong> — Calendar-based comprehensive check</li></ul>
<div class="dg"><p class="dg-title">EC135 — Inspection Interval Schedule (AMM Ch.05)</p><svg viewBox="0 0 660 120" xmlns="http://www.w3.org/2000/svg">
<!-- Timeline axis -->
<line x1="30" y1="60" x2="640" y2="60" stroke="#334155" stroke-width="2"/>
<polygon points="640,56 640,64 648,60" fill="#334155"/>
<text x="648" y="64" fill="#475569" font-size="7.5">Flight hours →</text>
<!-- Preflight (every flight) -->
<line x1="30" y1="48" x2="30" y2="72" stroke="#34d399" stroke-width="2"/>
<circle cx="30" cy="60" r="6" fill="#34d399"/>
<text x="30" y="44" text-anchor="middle" fill="#34d399" font-size="7.5" font-weight="bold">PREFLIGHT</text>
<text x="30" y="34" text-anchor="middle" fill="#475569" font-size="6.5">Each flight</text>
<text x="30" y="82" text-anchor="middle" fill="#475569" font-size="6.5">Pilot / Mech.</text>
<!-- 50-hr -->
<line x1="140" y1="44" x2="140" y2="76" stroke="#38bdf8" stroke-width="2"/>
<circle cx="140" cy="60" r="8" fill="#38bdf8"/>
<text x="140" y="57" text-anchor="middle" fill="#0c4a6e" font-size="8" font-weight="bold">50</text>
<text x="140" y="67" text-anchor="middle" fill="#0c4a6e" font-size="6.5">hr</text>
<text x="140" y="40" text-anchor="middle" fill="#38bdf8" font-size="7.5" font-weight="bold">50-hr Check</text>
<text x="140" y="85" text-anchor="middle" fill="#475569" font-size="6.5">Periodic</text>
<!-- 300-hr -->
<line x1="310" y1="40" x2="310" y2="80" stroke="#fbbf24" stroke-width="2.5"/>
<circle cx="310" cy="60" r="10" fill="#fbbf24"/>
<text x="310" y="57" text-anchor="middle" fill="#1c1400" font-size="8" font-weight="bold">300</text>
<text x="310" y="68" text-anchor="middle" fill="#1c1400" font-size="6.5">hr</text>
<text x="310" y="36" text-anchor="middle" fill="#fbbf24" font-size="7.5" font-weight="bold">300-hr Check</text>
<text x="310" y="88" text-anchor="middle" fill="#475569" font-size="6.5">Periodic (deep)</text>
<!-- 600-hr -->
<line x1="490" y1="36" x2="490" y2="84" stroke="#fb923c" stroke-width="2.5"/>
<circle cx="490" cy="60" r="11" fill="#fb923c"/>
<text x="490" y="57" text-anchor="middle" fill="#1c0c00" font-size="8" font-weight="bold">600</text>
<text x="490" y="68" text-anchor="middle" fill="#1c0c00" font-size="6.5">hr</text>
<text x="490" y="32" text-anchor="middle" fill="#fb923c" font-size="7.5" font-weight="bold">600-hr Check</text>
<text x="490" y="90" text-anchor="middle" fill="#475569" font-size="6.5">Major inspection</text>
<!-- Daily/Annual note -->
<rect x="6" y="98" width="320" height="18" rx="3" fill="#060e1a" stroke="rgba(99,179,237,.12)"/>
<text x="166" y="111" text-anchor="middle" fill="#475569" font-size="7.5">Daily (A-Check) after each flying day · Annual = calendar-based</text>
<!-- CMP note -->
<rect x="334" y="98" width="320" height="18" rx="3" fill="#060e1a" stroke="rgba(99,179,237,.12)"/>
<text x="494" y="111" text-anchor="middle" fill="#475569" font-size="7.5">CMP: 300/600-hr split into packages — reduces downtime</text>
<!-- Crack inspection markers at 50-hr ticks -->
<text x="140" y="20" text-anchor="middle" fill="#334155" font-size="6.5">↑ 50-hr multiples:</text>
<text x="200" y="20" text-anchor="middle" fill="#334155" font-size="6.5">Visual / Penetrant / Magnetic particle crack checks</text>
</svg></div>`},
{t:"Continuous Maintenance Program",i:"📋",h:`<p>The EC135 may also be maintained under a <strong>Continuous Maintenance Program (CMP)</strong>, which divides the 300/600-hour checks into smaller packages spread over time to minimise aircraft downtime.</p>
<p>All inspections must be recorded in the aircraft log book with:</p>
<ul><li>Date and time</li><li>Airframe total hours</li><li>Inspector's signature and licence number</li><li>Defects found and rectification</li></ul>
<div class="callout c-info"><div class="ci">ℹ️</div><div>All maintenance must be performed by a licenced engineer in accordance with the approved AMM and applicable Airworthiness Directives (ADs).</div></div>`}
],
kd:[{l:"Inspection standard",v:"AMM Chapter 05"},{l:"Preflight authority",v:"Pilot or licenced mechanic"},{l:"Visual inspection",v:"No part removal; external condition"},{l:"Condition inspection",v:"Extended visual — may need part removal"},{l:"Crack methods",v:"Visual / Penetrant / Magnetic particle"},{l:"Periodic intervals",v:"50hr / 300hr / 600hr / Annual"},{l:"Continuous program",v:"CMP — splits major checks into packages"}],
quiz:[
{q:"Which inspection method uses dye to detect surface cracks?",o:["Magnetic particle inspection","Penetrant crack inspection","Ultrasonic inspection","Eddy current inspection"],a:1,e:"Penetrant crack inspection uses dye penetrant to find surface-breaking cracks. The dye seeps into cracks and becomes visible under UV or white light after developer application."},
{q:"Who can perform the EC135 preflight check?",o:["Only a licenced engineer","Only the aircraft captain","The pilot or a licenced mechanic","Any flight crew member or ground crew"],a:2,e:"The preflight check can be performed by the pilot (PIC) or a licenced mechanic. Items marked ★ in the Flight Manual must be checked before EACH flight."},
{q:"What document governs EC135 scheduled inspections?",o:["Flight Manual (AFM)","AMM Chapter 05","EASA CS-27","ATA 104 Standard"],a:1,e:"Scheduled inspections are governed by AMM (Aircraft Maintenance Manual) Chapter 05, which defines all check intervals, tasks, and tolerances."},
{q:"What is the purpose of a functional test?",o:["Check external appearance of components","Verify correct operation of systems/subsystems","Detect material cracks","Measure component dimensions"],a:1,e:"A functional test verifies that a unit, system, or subsystem operates correctly — for example, an engine ground run or hydraulic system pressure test."},
{q:"What is the Continuous Maintenance Program (CMP)?",o:["A program to monitor engine health continuously","Splitting major checks into smaller packages spread over time to reduce downtime","An online training record system","Automatic FADEC self-test monitoring"],a:1,e:"The CMP divides the 300/600-hour checks into smaller task packages spread over shorter intervals, keeping the aircraft flying while maintenance is performed incrementally."}
]},

{id:19,num:"19",title:"Autopilot (AFCS)",sub:"SAS, AFCS Modes & Sensors",icon:"🤖",color:"#4f46e5",bg:"rgba(79,70,229,.15)",
desc:"EC135 Automatic Flight Control System: SAS stability augmentation, AFCS architecture (AMC/ECB), AHRS and air data sensors, actuators, and all flight modes from ATT to precision approaches.",
obj:["Describe the SAS and AFCS architectures","Identify AFCS sensors (AHRS, ADU, RadAlt)","List and describe AFCS flight modes","Explain approach and GPS-based modes"],
sections:[
{t:"SAS & AFCS Overview",i:"🤖",h:`<p>The EC135 has a two-level automatic flight control system:</p>
<ul><li><strong>SAS (Stability Augmentation System)</strong> — Basic; improves inherent helicopter flying qualities using rate-damping. Always active in normal flight. Uses EHA actuators in the control path.</li><li><strong>AFCS (Automatic Flight Control System)</strong> — Full autopilot; adds upper-mode functions on top of SAS (ALT hold, HDG, IAS, approach modes). Uses trim actuators (SEMAs) to hold control positions.</li></ul>
<p>AFCS algorithms run in the <strong>AMC (Aircraft Management Computer)</strong>. The <strong>ECB (Engine Control Box)</strong> is the interface between the AMC and the actuators.</p>
<div class="dg"><p class="dg-title">EC135 — SAS / AFCS Two-Level Architecture &amp; Mode Hierarchy</p><svg viewBox="0 0 660 188" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m19" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="#4b6280"/></marker></defs>
<!-- SENSORS column -->
<text x="62" y="12" text-anchor="middle" fill="#475569" font-size="8" font-weight="bold">SENSORS</text>
<rect x="6" y="18" width="112" height="20" rx="3" fill="#0c2240" stroke="rgba(56,189,248,.35)"/>
<text x="62" y="30" text-anchor="middle" fill="#38bdf8" font-size="8">2 × AHRS (ATT/HDG)</text>
<rect x="6" y="42" width="112" height="20" rx="3" fill="#0c2240" stroke="rgba(56,189,248,.3)"/>
<text x="62" y="54" text-anchor="middle" fill="#38bdf8" font-size="8">ADU 3200 (IAS/ALT/VS)</text>
<rect x="6" y="66" width="112" height="20" rx="3" fill="#0c2240" stroke="rgba(56,189,248,.3)"/>
<text x="62" y="78" text-anchor="middle" fill="#38bdf8" font-size="8">Radar Altimeter (AGL)</text>
<rect x="6" y="90" width="112" height="20" rx="3" fill="#0c2240" stroke="rgba(56,189,248,.25)"/>
<text x="62" y="102" text-anchor="middle" fill="#38bdf8" font-size="8">GPS / FMS (NAV)</text>
<rect x="6" y="114" width="112" height="20" rx="3" fill="#0c2030" stroke="rgba(56,189,248,.2)"/>
<text x="62" y="126" text-anchor="middle" fill="#38bdf8" font-size="8">IESI (standby)</text>
<!-- Arrows from sensors to AMC -->
<line x1="118" y1="28" x2="160" y2="56" stroke="#4b6280" stroke-width="1" marker-end="url(#m19)"/>
<line x1="118" y1="52" x2="160" y2="63" stroke="#4b6280" stroke-width="1" marker-end="url(#m19)"/>
<line x1="118" y1="76" x2="160" y2="70" stroke="#4b6280" stroke-width="1" marker-end="url(#m19)"/>
<line x1="118" y1="100" x2="160" y2="77" stroke="#4b6280" stroke-width="1" marker-end="url(#m19)"/>
<!-- AMC / Computer -->
<rect x="160" y="38" width="130" height="56" rx="5" fill="#1a1460" stroke="rgba(129,140,248,.5)" stroke-width="2"/>
<text x="225" y="58" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">AMC 1 &amp; 2</text>
<text x="225" y="72" text-anchor="middle" fill="#6366f1" font-size="8">AFCS algorithms</text>
<text x="225" y="84" text-anchor="middle" fill="#475569" font-size="7.5">ARINC 653 partitioning</text>
<text x="225" y="18" text-anchor="middle" fill="#8b5cf6" font-size="7.5">APCP → mode select</text>
<line x1="225" y1="20" x2="225" y2="38" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#m19)"/>
<!-- ECB -->
<line x1="290" y1="66" x2="316" y2="66" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m19)"/>
<rect x="316" y="52" width="78" height="28" rx="4" fill="#0c1a2c" stroke="rgba(96,165,250,.35)"/>
<text x="355" y="64" text-anchor="middle" fill="#60a5fa" font-size="8.5" font-weight="bold">ECB</text>
<text x="355" y="75" text-anchor="middle" fill="#475569" font-size="7">Interface unit</text>
<!-- SAS Level (EHA) -->
<line x1="394" y1="58" x2="424" y2="40" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m19)"/>
<rect x="424" y="18" width="228" height="44" rx="5" fill="#0a2030" stroke="rgba(34,211,238,.5)" stroke-width="2"/>
<text x="538" y="34" text-anchor="middle" fill="#22d3ee" font-size="10" font-weight="bold">LEVEL 1 — SAS</text>
<text x="538" y="48" text-anchor="middle" fill="#0e7490" font-size="8">EHA actuators · Rate damping · Always active</text>
<text x="538" y="58" text-anchor="middle" fill="#475569" font-size="7">Pitch · Roll · Yaw axes</text>
<!-- AFCS Level (SEMA) -->
<line x1="394" y1="74" x2="424" y2="90" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m19)"/>
<rect x="424" y="72" width="228" height="44" rx="5" fill="#1a0e55" stroke="rgba(192,132,252,.5)" stroke-width="2"/>
<text x="538" y="88" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="bold">LEVEL 2 — AFCS Upper Modes</text>
<text x="538" y="101" text-anchor="middle" fill="#7c3aed" font-size="8">SEMA trim actuators · 4 axes</text>
<text x="538" y="111" text-anchor="middle" fill="#475569" font-size="7">ATT / ALT / HDG / IAS / V/S / ALT.A / GA / CRHT</text>
<!-- Approach modes box -->
<rect x="424" y="124" width="228" height="36" rx="5" fill="#0f1a00" stroke="rgba(163,230,53,.4)" stroke-width="1.5"/>
<text x="538" y="138" text-anchor="middle" fill="#a3e635" font-size="9" font-weight="bold">Approach / Nav Modes</text>
<text x="538" y="152" text-anchor="middle" fill="#475569" font-size="7.5">VOR · LOC · G/S · NAV · FPA · TRK · GTC · RNP</text>
<line x1="538" y1="116" x2="538" y2="124" stroke="#4b6280" stroke-width="1.5" marker-end="url(#m19)"/>
<!-- Override note -->
<text x="225" y="112" text-anchor="middle" fill="#475569" font-size="7.5">Pilot override</text>
<text x="225" y="122" text-anchor="middle" fill="#475569" font-size="7.5">always possible</text>
<!-- Pilot controls box bottom -->
<rect x="6" y="150" width="228" height="32" rx="5" fill="#060e1c" stroke="rgba(99,179,237,.15)"/>
<text x="120" y="163" text-anchor="middle" fill="#64748b" font-size="8.5">Pilot: Cyclic / Collective / Pedals</text>
<text x="120" y="176" text-anchor="middle" fill="#475569" font-size="7.5">→ override SEMA trim at any time</text>
<rect x="250" y="150" width="162" height="32" rx="5" fill="#060e1c" stroke="rgba(99,179,237,.15)"/>
<text x="331" y="163" text-anchor="middle" fill="#64748b" font-size="8.5">APCP — Autopilot</text>
<text x="331" y="176" text-anchor="middle" fill="#475569" font-size="7.5">Control Panel (mode select)</text>
</svg></div>`},
{t:"AFCS Sensors",i:"📡",h:`<p>Key sensors feeding the AFCS:</p>
<ul><li><strong>2 × AHRS</strong> (Attitude and Heading Reference System) — Primary attitude (pitch, roll, yaw/heading). AHRS1 is the primary source.</li><li><strong>ADU 3200</strong> (Air Data Unit) — Provides IAS, altitude, vertical speed, OAT</li><li><strong>1 × IESI</strong> — Integrated Electronic Standby Instrument; independent backup for attitude/altitude/airspeed</li><li><strong>Radar Altimeter</strong> — Height above ground for approach modes and cruise height hold</li><li><strong>FMS / GPS</strong> — Navigation sensor for lateral navigation modes (NAV, TRK, FPA, GTC)</li></ul>`},
{t:"AFCS Actuators",i:"⚙️",h:`<p>The AFCS uses two types of actuators:</p>
<ul><li><strong>SEMA (Smart Electro-Mechanical Actuator)</strong> — Electric trim actuators for cyclic pitch, cyclic roll, yaw, and collective. Act on the trim (parallel) input channel. Pilot can always override.</li><li><strong>EHA (Electro-Hydraulic Actuator)</strong> — High-bandwidth hydraulic actuators for SAS (damping). Act in the direct control path.</li></ul>
<p>If a SEMA fails, that axis loses AFCS upper-mode authority. SAS (EHA) continues to operate.</p>`},
{t:"Basic AFCS Modes",i:"🎛️",h:`<p>The AFCS provides the following basic modes (engaged via APCP — Autopilot Control Panel):</p>
<ul><li><strong>ATT</strong> — Attitude Hold: maintains pitch and roll attitude when cyclic is released</li><li><strong>ALT</strong> — Altitude Hold: maintains barometric altitude</li><li><strong>HDG</strong> — Heading Hold/Select: maintains or selects a heading</li><li><strong>IAS</strong> — Indicated Airspeed Hold: maintains current or selected airspeed</li><li><strong>V/S</strong> — Vertical Speed: maintains selected climb/descent rate</li><li><strong>ALT.A</strong> — Altitude Acquire: climbs/descends to preselected altitude then holds it</li><li><strong>GA</strong> — Go-Around: automatic go-around attitude and power</li><li><strong>CRHT</strong> — Cruise Height: maintains radar altitude above terrain</li></ul>`},
{t:"Navigation & Approach Modes",i:"🛬",h:`<p>Higher-level navigation and approach modes:</p>
<ul><li><strong>VOR</strong> — Tracks VOR radial</li><li><strong>LOC</strong> — Localizer capture and tracking (ILS lateral)</li><li><strong>G/S</strong> — Glide Slope capture and tracking (ILS vertical)</li><li><strong>NAV</strong> — En route navigation via FMS/GPS</li><li><strong>FPA</strong> — Flight Path Angle: maintains constant approach angle (GPS approach)</li><li><strong>TRK</strong> — Track angle: maintains GPS ground track</li><li><strong>GTC / GTC HOVER</strong> — Ground Trajectory Command: GPS-guided approach to hover</li><li><strong>RNP / VNAV</strong> — Required Navigation Performance modes for precision approaches</li></ul>
<div class="callout c-info"><div class="ci">ℹ️</div><div>AFCS pre-flight test is mandatory before each IFR flight. The test is initiated from the APCP or from the VMS SYST page.</div></div>`}
],
kd:[{l:"SAS actuators",v:"EHA (Electro-Hydraulic Actuators)"},{l:"Trim actuators",v:"SEMA (Smart Electro-Mechanical Actuators) × 4 axes"},{l:"Computers",v:"2 × AMC (run AFCS algorithms)"},{l:"Interface units",v:"ECB (Engine Control Box)"},{l:"Primary sensors",v:"2 × AHRS + ADU 3200 + Radar Altimeter"},{l:"Standby instrument",v:"IESI (independent)"},{l:"Basic modes",v:"ATT / ALT / HDG / IAS / V/S / ALT.A / GA / CRHT"},{l:"Approach modes",v:"LOC / G/S / VOR / NAV / FPA / TRK / GTC / RNP"},{l:"Autopilot panel",v:"APCP (Autopilot Control Panel)"}],
quiz:[
{q:"What is the difference between SAS and AFCS?",o:["SAS is the autopilot; AFCS is the stability system","SAS provides basic stability augmentation; AFCS adds upper modes like ALT, HDG, IAS holds","AFCS uses EHA actuators; SAS uses SEMA trim actuators","SAS is engaged by pilot; AFCS is always on"],a:1,e:"SAS provides basic rate-damping (always on). AFCS adds upper-mode automation (ALT hold, HDG, IAS, approaches) via the SEMAs on top of the SAS."},
{q:"What type of actuators do the AFCS trim (upper-mode) functions use?",o:["EHA (Electro-Hydraulic Actuators)","Mechano-Hydraulic Actuators (MHA)","SEMA (Smart Electro-Mechanical Actuators)","Direct hydraulic servo actuators"],a:2,e:"AFCS upper modes (ALT, HDG, etc.) use SEMAs (Smart Electro-Mechanical Actuators) — electric trim actuators. SAS uses EHAs for high-bandwidth damping."},
{q:"What mode automatically captures and holds a pre-selected altitude?",o:["ALT (Altitude Hold)","V/S (Vertical Speed)","ALT.A (Altitude Acquire)","CRHT (Cruise Height)"],a:2,e:"ALT.A (Altitude Acquire) commands a climb or descent to a pre-selected altitude and then automatically transitions to ALT (altitude hold) when the target is reached."},
{q:"What does CRHT (Cruise Height) mode maintain?",o:["Barometric altitude above MSL","GPS altitude","Radar altimeter height above terrain","Cabin pressure altitude"],a:2,e:"CRHT (Cruise Height) uses the radar altimeter to maintain a constant height above the terrain below the aircraft — useful for low-level operations."},
{q:"What is GTC HOVER mode used for?",o:["Automatic engine shutdown in hover","GPS-guided approach to and maintenance of a hover position","Hovering in strong crosswinds manually","Automatic power management in the hover"],a:1,e:"GTC HOVER (Ground Trajectory Command Hover) uses GPS to guide the aircraft along a trajectory to arrive at a stabilised hover position over a GPS point."}
]}
];

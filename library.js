/* thephysicsportal-data v1.0.2 */
const videoLibrary = [
    {
        subject: "Physics",
        batches: [
            {
                year: "2025 Theory",
                units: [
                    {
                        unitName: "Mechanics",
                        videos: [
                            { id: "6tLJsEfbVcY", title: "Introduction to Motion" },
                            { id: "GzY_iOnP3E8", title: "Lesson 1.1: Kinematics" }
                        ]
                    }
                ]
            }
        ]
    }
];

// SELF-SCRAMBLING CORE:
// This immediately encodes the IDs in memory so they aren't plain text if inspected later.
videoLibrary.forEach(s => s.batches.forEach(b => b.units.forEach(u => u.videos.forEach(v => {
    v.id = btoa(v.id); 
}))));
console.log("Library Loaded & Obfuscated.");

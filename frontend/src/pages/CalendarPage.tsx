import React from "react";

const CalendarPage: React.FC = () => {
    return (
        <div style={{ height: "calc(100vh - 100px)", padding: "20px" }}>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FBudapest&showPrint=0&showTabs=0&src=OGY0Njg2NTg4YjM3NWE0ZTg0YWE3ZTA1ZjRhYjZhNDY0ZWQxMGVlZGQ4NjZhYTU4YmQ3ZjIxNjRmMTkxNjEyMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                title="Google Calendar"
            ></iframe>
        </div>
    );
};

export default CalendarPage;
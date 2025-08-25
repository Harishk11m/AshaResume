function formatDates() {
        const experienceItems = document.querySelectorAll('.experience-item');
        experienceItems.forEach(item => {
            const from = item.getAttribute('data-from');
            const to = item.getAttribute('data-to');
            
            const fromDate = new Date(from);
            const toDate = to === 'present' ? new Date() : new Date(to);
            
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            const fromMonth = monthNames[fromDate.getMonth()];
            const fromYear = fromDate.getFullYear();
            const fromText = `${fromMonth} ${fromYear}`;
            
            let toText = '';
            if (to === 'present') {
                toText = 'Present';
            } else {
                const toMonth = monthNames[toDate.getMonth()];
                const toYear = toDate.getFullYear();
                toText = `${toMonth} ${toYear}`;
            }

            let months = (toDate.getFullYear() - fromDate.getFullYear()) * 12 + (toDate.getMonth() - fromDate.getMonth());
            if (toDate.getDate() < fromDate.getDate()) {
                months--;
            }

            const years = Math.floor(months / 12);
            const remainingMonths = months % 12;

            const durationText = `${years}y ${remainingMonths}m`;
            
            item.querySelector('.dates').textContent = `${fromText} – ${toText} (${durationText})`;
        });
    }

    window.onload = formatDates;

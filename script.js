    const localData = JSON.parse(localStorage.getItem('classCentralData'));
    const remoteConfig = window.SUPABASE_CONFIG || {};
    const hasRemoteStorage = Boolean(remoteConfig.url && remoteConfig.anonKey && window.supabase);
    const supabaseClient = hasRemoteStorage
        ? window.supabase.createClient(remoteConfig.url, remoteConfig.anonKey)
        : null;

        let appData = localData || {
            siteContent: {
                homeTitle: 'Bem-vindo à Central da Turma 2º E',
                homeDescription: 'Seu hub digital para todas as informações importantes da turma. Fique por dentro de avisos, atividades, horários e muito mais!',
                homePendingLabel: 'Atividades Pendentes',
                homeNextClassLabel: 'Próxima Aula',
                homeAnnouncementsTitle: 'Últimos Avisos',
                homeAnnouncementsButton: 'Ver Todos',
                homeDatesTitle: 'Próximas Datas',
                homeCalendarButton: 'Ver Calendário',
                homeActivitiesTitle: 'Próximas Atividades',
                homeActivitiesButton: 'Ver Todas',
                aboutTitle: 'Sobre a Turma 2º E',
                aboutParagraph1: 'Bem-vindos à página da turma 2º E, n sei mais oq escrever',
                aboutParagraph2: 'n sei tambem oq escrever dnv',
                aboutYear: '2026',
                aboutRepresentatives: 'Julia Portugal, Giovana Sabrina',
                aboutObjective: 'n sei oq escrever dnv'
            },
            announcements: [
                { id: 'a1', title: 'Reunião de Pais e Mestres', description: 'Reunião geral para discutir o desempenho do 1º bimestre.', date: '2024-05-15', category: 'Geral', important: true },
                { id: 'a2', title: 'Início das Olimpíadas Escolares', description: 'Cerimônia de abertura das olimpíadas internas.', date: '2024-06-01', category: 'Evento', important: false },
                { id: 'a3', title: 'Entrega do Projeto de Ciências', description: 'Lembrete para a entrega final do projeto de ciências.', date: '2024-05-20', category: 'Atividade', important: true }
            ],
            activities: [
                { id: 'act1', name: 'Trabalho de Pesquisa sobre Biomas', subject: 'Biologia', teacher: 'Rozeni', description: 'Pesquisa em grupo sobre os principais biomas brasileiros.', dueDate: '2024-05-25', status: 'pending' },
                { id: 'act2', name: 'Lista de Exercícios de Funções', subject: 'Matemática', teacher: 'Vinicius', description: 'Lista de exercícios sobre funções de 1º e 2º grau.', dueDate: '2024-05-20', status: 'upcoming' },
                { id: 'act3', name: 'Leitura do Livro "Dom Casmurro"', subject: 'Português', teacher: 'Antônio', description: 'Leitura e resenha do livro "Dom Casmurro".', dueDate: '2024-06-10', status: 'pending' }
            ],
            events: [
                { id: 'e1', name: 'Festa Junina da Escola', description: 'Tradicional festa junina com comidas típicas e danças.', date: '2024-06-22', category: 'Escola' },
                { id: 'e2', name: 'Visita ao Museu de Arte Moderna', description: 'Passeio cultural ao MAM com a turma de Arte.', date: '2024-07-05', category: 'Turma' }
            ],
            schedule: [
                { time: '07:30', mon: 'Brasil — Alexandre', tue: 'Esp — Thainara', wed: 'Mat — Vinicius', thu: 'Fis — Cabral', fri: 'Arte — Alexandre' },
                { time: '08:15', mon: 'Mat — Vinicius', tue: 'Esp — Thainara', wed: 'Mat — Vinicius', thu: 'Port — Antônio', fri: 'Arte — Alexandre' },
                { time: '09:10', mon: 'Port — Antônio', tue: 'Ed.Fis — Van', wed: 'Arte — Alexandre', thu: 'Ed.Fis — Van', fri: 'MatRi — Vinicius' },
                { time: '09:55', mon: 'Port — Antônio', tue: 'Quí — Camila A.', wed: 'Quí — Flávia', thu: 'Quí — Camila A.', fri: 'Quí — Flávia' },
                { time: '11:00', mon: 'Bio — Rozeni', tue: 'Mat — Vinicius', wed: 'Fis — Cabral', thu: 'Bio — Rozeni', fri: 'Qui — Flávia' },
                { time: '11:45', mon: 'Fis — Cabral', tue: 'Port — Antônio', wed: 'Brasil — Alexandre', thu: 'Bio — Rozeni', fri: 'Mat — Vinicius' }
            ],
            subjects: [
                { id: 'sub1', name: 'Matemática', professor: 'Vinicius', materials: ['Livro Didático Cap. 5', 'Exercícios de Geometria (PDF)', 'Link: Khan Academy - Matemática (https://www.khanacademy.org/math)'] },
                { id: 'sub2', name: 'Português', professor: 'Antônio', materials: ['Gramática Essencial', 'Livro: Dom Casmurro', 'Link: Nova Ortografia (https://www.normaculta.com.br/nova-ortografia/)'] },
                { id: 'sub3', name: 'Física', professor: 'Cabral', materials: ['Apostila de Eletricidade', 'Simulador de Circuitos (Link: https://phet.colorado.edu/pt_BR/simulations/filter?subjects=physics&type=html,prototype)'] },
                { id: 'sub4', name: 'Química', professor: 'Camila A.', materials: ['Tabela Periódica Interativa', 'Experimentos em Vídeo (Link: https://www.youtube.com/user/manualdomundo)'] },
                { id: 'sub5', name: 'Biologia', professor: 'Rozeni', materials: ['Atlas de Biologia', 'Artigo sobre Ecossistemas'] },
                { id: 'sub6', name: 'História do Brasil', professor: 'Alexandre', materials: ['Documentário: A História do Brasil', 'Mapas Históricos'] },
                { id: 'sub7', name: 'Espanhol', professor: 'Thainara', materials: ['Vocabulário Básico', 'Músicas em Espanhol (Playlist)'] },
                { id: 'sub8', name: 'Educação Física', professor: 'Van', materials: ['Regras do Vôlei', 'Exercícios para Casa'] },
                { id: 'sub9', name: 'Arte', professor: 'Alexandre', materials: ['História da Arte Moderna', 'Galeria Virtual de Obras'] }
            ],
            links: [
                { id: 'l1', name: 'Google Classroom', url: 'https://classroom.google.com/', icon: 'fas fa-chalkboard-teacher' },
                { id: 'l2', name: 'Google Drive da Turma', url: 'https://drive.google.com/drive/folders/YOUR_CLASS_FOLDER_ID', icon: 'fas fa-folder-open' },
                { id: 'l3', name: 'Site da Escola', url: 'https://www.suaescola.com.br', icon: 'fas fa-school' }
            ],
            mural: [
                { id: 'm1', type: 'image', src: 'https://via.placeholder.com/400x300/00C8FF/0A1428?text=Foto+Interclasse', caption: 'Campeões do Interclasse 2024!' },
                { id: 'm2', type: 'text', content: 'Parabéns à turma pelo excelente desempenho no projeto de história!', date: '2024-04-10' },
                { id: 'm3', type: 'image', src: 'https://via.placeholder.com/400x300/643296/FFFFFF?text=Projeto+Ciencias', caption: 'Maquete do Projeto de Ciências' }
            ]
        };

        const defaultSiteContent = {
            homeTitle: 'Bem-vindo à Central da Turma 2º E',
            homeDescription: 'Seu hub digital para todas as informações importantes da turma. Fique por dentro de avisos, atividades, horários e muito mais!',
            homePendingLabel: 'Atividades Pendentes',
            homeNextClassLabel: 'Próxima Aula',
            homeAnnouncementsTitle: 'Últimos Avisos',
            homeAnnouncementsButton: 'Ver Todos',
            homeDatesTitle: 'Próximas Datas',
            homeCalendarButton: 'Ver Calendário',
            homeActivitiesTitle: 'Próximas Atividades',
            homeActivitiesButton: 'Ver Todas',
            aboutTitle: 'Sobre a Turma 2º E',
            aboutParagraph1: 'Bem-vindos à página da turma 2º E, n sei mais oq escrever',
            aboutParagraph2: 'n sei tambem oq escrever dnv',
            aboutYear: '2026',
            aboutRepresentatives: 'Julia Portugal, Giovana Sabrina',
            aboutObjective: 'n sei oq escrever dnv'
        };

        appData.siteContent = { ...defaultSiteContent, ...(appData.siteContent || {}) };

        async function loadRemoteData() {
            if (!supabaseClient) return;

            const { data, error } = await supabaseClient
                .from(remoteConfig.table)
                .select('data')
                .eq('id', remoteConfig.recordId)
                .maybeSingle();

            if (error) {
                console.error('Não foi possível carregar os dados compartilhados:', error.message);
                return;
            }

            if (data && data.data) {
                appData = data.data;
                appData.siteContent = { ...defaultSiteContent, ...(appData.siteContent || {}) };
                localStorage.setItem('classCentralData', JSON.stringify(appData));
                renderAllContent();
            }
        }

        async function saveData() {
            localStorage.setItem('classCentralData', JSON.stringify(appData));
            renderAllContent();

            if (!supabaseClient) return;

            const { error } = await supabaseClient
                .from(remoteConfig.table)
                .upsert({
                    id: remoteConfig.recordId,
                    data: appData,
                    updated_at: new Date().toISOString()
                });

            if (error) {
                console.error('Não foi possível salvar os dados compartilhados:', error.message);
            }
        }

        function generateId() {
            return '_' + Math.random().toString(36).substr(2, 9);
        }

        // Utility functions
        const formatDate = (dateString) => {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString + 'T00:00:00').toLocaleDateString('pt-BR', options);
        };

        const getDayOfWeek = (dateString) => {
            const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
            return days[new Date(dateString + 'T00:00:00').getDay()];
        };

        const getStatusColor = (status) => {
            switch (status) {
                case 'pending': return 'text-red-400';
                case 'upcoming': return 'text-yellow-400';
                case 'completed': return 'text-green-400';
                default: return 'text-gray-blue';
            }
        };

        const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, character => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
        }[character]));

        const isSafeUrl = (value) => {
            try {
                const url = new URL(value, window.location.href);
                return ['http:', 'https:'].includes(url.protocol);
            } catch {
                return false;
            }
        };

        // --- Navigation ---
        const navLinks = document.querySelectorAll('.nav-link');
        const pageContents = document.querySelectorAll('.page-content');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const sidebarNav = document.getElementById('sidebar-nav');
        let currentPage = 'home'; // Default page

        function showPage(pageId) {
            pageContents.forEach(page => page.classList.add('hidden'));
            const page = document.getElementById(`page-${pageId}`);
            if (!page) return;
            page.classList.remove('hidden');
            navLinks.forEach(link => link.classList.remove('bg-cyan-light', 'text-navy-dark'));
            const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
            if (activeLink) activeLink.classList.add('bg-cyan-light', 'text-navy-dark');
            currentPage = pageId;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            renderPage(pageId); // Render content specific to the page
        }

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = e.target.dataset.page;
                showPage(pageId);
                sidebarNav.classList.remove('mobile-menu-open');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        mobileMenuToggle.addEventListener('click', () => {
            const isOpen = sidebarNav.classList.toggle('mobile-menu-open');
            mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Initial page load
        document.addEventListener('DOMContentLoaded', () => {
            showPage('home');
            renderAllContent();
            loadRemoteData();
        });

        // --- Render Functions ---
        function renderAllContent() {
            renderSiteContent();
            renderHomePage();
            renderAnnouncementsPage();
            renderCalendarPage();
            renderActivitiesPage();
            renderSchedulePage();
            renderSubjectsPage();
            renderMuralPage();
            renderLinksPage();
            renderAdminDashboard();
            renderAdminAnnouncements();
            renderAdminActivities();
            renderAdminEvents();
            renderAdminSchedule();
            renderAdminSubjects();
            renderAdminLinks();
            renderAdminSiteContent();
            populateSubjectSelects(); // Update subject dropdowns
        }

        function renderSiteContent() {
            const content = appData.siteContent;
            const elements = {
                'home-title': content.homeTitle,
                'home-description': content.homeDescription,
                'home-pending-label': content.homePendingLabel,
                'home-next-class-label': content.homeNextClassLabel,
                'home-announcements-title': content.homeAnnouncementsTitle,
                'home-announcements-button': content.homeAnnouncementsButton,
                'home-dates-title': content.homeDatesTitle,
                'home-calendar-button': content.homeCalendarButton,
                'home-activities-title': content.homeActivitiesTitle,
                'home-activities-button': content.homeActivitiesButton,
                'about-title': content.aboutTitle,
                'about-paragraph-1': content.aboutParagraph1,
                'about-paragraph-2': content.aboutParagraph2,
                'about-year': content.aboutYear,
                'about-representatives': content.aboutRepresentatives,
                'about-objective': content.aboutObjective
            };
            Object.entries(elements).forEach(([id, value]) => {
                const element = document.getElementById(id);
                if (element) element.textContent = value;
            });
        }

        function renderPage(pageId) {
            switch(pageId) {
                case 'home': renderHomePage(); break;
                case 'announcements': renderAnnouncementsPage(); break;
                case 'calendar': renderCalendarPage(); break;
                case 'activities': renderActivitiesPage(); break;
                case 'schedule': renderSchedulePage(); break;
                case 'subjects': renderSubjectsPage(); break;
                case 'mural': renderMuralPage(); break;
                case 'links': renderLinksPage(); break;
                case 'about': break; // Static page
                case 'admin': renderAdminDashboard(); break;
                case 'subject-detail': // Handled by specific function
                    break;
            }
        }

        // --- Home Page ---
        function renderHomePage() {
            const today = new Date();

            // Pending Activities Count
            const pendingActivities = appData.activities.filter(act => act.status === 'pending' && new Date(act.dueDate) >= today);
            document.getElementById('pending-activities-count').textContent = pendingActivities.length;

            // Next Class (simplified for current day)
            const currentDay = today.getDay(); // 0 for Sunday, 1 for Monday, etc.
            const dayMap = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
            const currentDayName = dayMap[currentDay];
            const currentHour = today.getHours();
            const currentMinute = today.getMinutes();

            let nextClassText = 'Nenhuma aula hoje';
            if (currentDay >= 1 && currentDay <= 5) { // Monday to Friday
                const classesToday = appData.schedule.filter(s => s[currentDayName]);
                for (const classItem of classesToday) {
                    const [classHour, classMinute] = classItem.time.split(':').map(Number);
                    if (classHour > currentHour || (classHour === currentHour && classMinute > currentMinute)) {
                        nextClassText = `${classItem[currentDayName]} às ${classItem.time}`;
                        break;
                    }
                }
            }
            document.getElementById('next-class').textContent = nextClassText;

            // Latest Announcements
            const latestAnnouncementsContainer = document.getElementById('latest-announcements');
            latestAnnouncementsContainer.innerHTML = '';
            const sortedAnnouncements = [...appData.announcements].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
            if (sortedAnnouncements.length === 0) {
                latestAnnouncementsContainer.innerHTML = '<p class="text-gray-blue">Nenhum aviso recente.</p>';
            } else {
                sortedAnnouncements.forEach(announcement => {
                    const el = document.createElement('div');
                    el.className = 'glass-card-glow p-3 rounded-lg flex items-center gap-3';
                    const importantIcon = announcement.important ? '<span class="text-red-400" title="Importante">❗</span>' : '';
                    el.innerHTML = `
                        ${importantIcon}
                        <div>
                            <p class="font-semibold text-white">${announcement.title}</p>
                            <p class="text-sm text-gray-blue">${formatDate(announcement.date)} - ${announcement.category}</p>
                        </div>
                    `;
                    latestAnnouncementsContainer.appendChild(el);
                });
            }
            document.getElementById('home-announcements-btn').onclick = () => showPage('announcements');


            // Upcoming Dates (Events & Activities)
            const upcomingDatesContainer = document.getElementById('upcoming-dates');
            upcomingDatesContainer.innerHTML = '';
            const allUpcoming = [];
            appData.events.forEach(event => {
                if (new Date(event.date) >= today) {
                    allUpcoming.push({ type: 'Evento', name: event.name, date: event.date, category: event.category });
                }
            });
            appData.activities.forEach(activity => {
                if (activity.status !== 'completed' && new Date(activity.dueDate) >= today) {
                    allUpcoming.push({ type: 'Atividade', name: activity.name, date: activity.dueDate, category: activity.subject });
                }
            });
            allUpcoming.sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 3).forEach(item => {
                const el = document.createElement('div');
                el.className = 'glass-card-glow p-3 rounded-lg';
                el.innerHTML = `
                    <p class="font-semibold text-white">${item.name} <span class="text-sm text-gray-blue">(${item.type})</span></p>
                    <p class="text-sm text-gray-blue">${formatDate(item.date)} - ${item.category}</p>
                `;
                upcomingDatesContainer.appendChild(el);
            });
            if (allUpcoming.length === 0) {
                upcomingDatesContainer.innerHTML = '<p class="text-gray-blue">Nenhuma data próxima.</p>';
            }
            document.getElementById('home-calendar-btn').onclick = () => showPage('calendar');


            // Upcoming Activities
            const upcomingActivitiesContainer = document.getElementById('upcoming-activities');
            upcomingActivitiesContainer.innerHTML = '';
            const sortedUpcomingActivities = appData.activities
                .filter(act => act.status !== 'completed' && new Date(act.dueDate) >= today)
                .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
                .slice(0, 3);

            if (sortedUpcomingActivities.length === 0) {
                upcomingActivitiesContainer.innerHTML = '<p class="text-gray-blue">Nenhuma atividade próxima.</p>';
            } else {
                sortedUpcomingActivities.forEach(activity => {
                    const el = document.createElement('div');
                    el.className = 'glass-card-glow p-3 rounded-lg';
                    el.innerHTML = `
                        <p class="font-semibold text-white">${activity.name}</p>
                        <p class="text-sm text-gray-blue">Matéria: ${activity.subject} | Entrega: ${formatDate(activity.dueDate)}</p>
                    `;
                    upcomingActivitiesContainer.appendChild(el);
                });
            }
            document.getElementById('home-activities-btn').onclick = () => showPage('activities');
        }

        // --- Announcements Page ---
        function renderAnnouncementsPage() {
            const container = document.getElementById('announcements-list');
            container.innerHTML = '';
            const sortedAnnouncements = [...appData.announcements].sort((a, b) => new Date(b.date) - new Date(a.date));

            if (sortedAnnouncements.length === 0) {
                container.innerHTML = '<p class="text-gray-blue animate-fadeIn">Nenhum aviso disponível.</p>';
                return;
            }

            sortedAnnouncements.forEach(announcement => {
                const el = document.createElement('div');
                el.className = 'glass-card rounded-xl p-6 animate-slideInUp';
                const importantClass = announcement.important ? 'border-l-4 border-red-500 pl-4' : '';
                el.innerHTML = `
                    <div class="${importantClass}">
                        <h3 class="text-xl font-bold text-white mb-2">${announcement.title} ${announcement.important ? '<span class="text-red-400 text-sm ml-2">URGENTE</span>' : ''}</h3>
                        <p class="text-gray-blue mb-3">${announcement.description}</p>
                        <div class="flex justify-between items-center text-sm text-gray-blue">
                            <span>${formatDate(announcement.date)}</span>
                            <span class="px-2 py-1 bg-navy-secondary rounded-full text-xs">${announcement.category}</span>
                        </div>
                    </div>
                `;
                container.appendChild(el);
            });
        }

        // --- Calendar Page ---
        let currentCalendarDate = new Date(); // Tracks the month being displayed

        function renderCalendarPage() {
            const calendarDisplay = document.getElementById('calendar-display');
            calendarDisplay.innerHTML = `
                <div class="font-bold text-cyan-light">Dom</div>
                <div class="font-bold text-cyan-light">Seg</div>
                <div class="font-bold text-cyan-light">Ter</div>
                <div class="font-bold text-cyan-light">Qua</div>
                <div class="font-bold text-cyan-light">Qui</div>
                <div class="font-bold text-cyan-light">Sex</div>
                <div class="font-bold text-cyan-light">Sáb</div>
            `;

            const year = currentCalendarDate.getFullYear();
            const month = currentCalendarDate.getMonth();
            document.getElementById('current-month-year').textContent = currentCalendarDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

            const firstDayOfMonth = new Date(year, month, 1);
            const lastDayOfMonth = new Date(year, month + 1, 0);
            const daysInMonth = lastDayOfMonth.getDate();
            const startDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday etc.

            // Add empty cells for days before the 1st
            for (let i = 0; i < startDayOfWeek; i++) {
                const emptyCell = document.createElement('div');
                emptyCell.className = 'p-2 text-gray-blue/50';
                calendarDisplay.appendChild(emptyCell);
            }

            // Add days of the month
            for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(year, month, day);
                const dateString = date.toISOString().split('T')[0];
                const cell = document.createElement('div');
                cell.className = 'p-2 rounded-lg relative flex flex-col items-center justify-center h-20 text-white transition-colors duration-200';

                // Highlight today
                if (date.toDateString() === new Date().toDateString()) {
                    cell.classList.add('bg-cyan-light/20', 'border', 'border-cyan-light');
                } else {
                    cell.classList.add('hover:bg-navy-secondary/50');
                }

                // Check for events/activities on this day
                const dayEvents = appData.events.filter(e => e.date === dateString);
                const dayActivities = appData.activities.filter(a => a.dueDate === dateString && a.status !== 'completed');

                let eventIndicators = '';
                if (dayEvents.length > 0) eventIndicators += '<span class="w-2 h-2 bg-purple-soft rounded-full absolute top-1 right-1" title="Evento"></span>';
                if (dayActivities.length > 0) eventIndicators += '<span class="w-2 h-2 bg-yellow-400 rounded-full absolute bottom-1 left-1" title="Atividade"></span>';


                cell.innerHTML = `
                    <span class="text-xl font-bold">${day}</span>
                    ${eventIndicators}
                `;
                cell.title = `${dayEvents.map(e => e.name).join(', ')}
${dayActivities.map(a => a.name).join(', ')}`;
                calendarDisplay.appendChild(cell);
            }

            // Upcoming Events List
            const upcomingEventsContainer = document.getElementById('upcoming-events-list');
            upcomingEventsContainer.innerHTML = '';
            const today = new Date();
            const allUpcoming = [];
            appData.events.forEach(event => {
                if (new Date(event.date) >= today) {
                    allUpcoming.push({ type: 'Evento', name: event.name, date: event.date, category: event.category, description: event.description });
                }
            });
            appData.activities.forEach(activity => {
                if (activity.status !== 'completed' && new Date(activity.dueDate) >= today) {
                    allUpcoming.push({ type: 'Atividade', name: activity.name, date: activity.dueDate, category: activity.subject, description: activity.description });
                }
            });
            appData.announcements.forEach(announcement => {
                if (new Date(announcement.date) >= today && announcement.category === 'Evento') { // Assuming 'Evento' category in announcements are also upcoming events
                    allUpcoming.push({ type: 'Aviso (Evento)', name: announcement.title, date: announcement.date, category: announcement.category, description: announcement.description });
                }
            });

            allUpcoming.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(item => {
                const el = document.createElement('div');
                el.className = 'glass-card-glow p-3 rounded-lg';
                el.innerHTML = `
                    <p class="font-semibold text-white">${item.name} <span class="text-sm text-gray-blue">(${item.type})</span></p>
                    <p class="text-sm text-gray-blue">${formatDate(item.date)} - ${item.category}</p>
                    <p class="text-xs text-gray-blue mt-1">${item.description}</p>
                `;
                upcomingEventsContainer.appendChild(el);
            });
            if (allUpcoming.length === 0) {
                upcomingEventsContainer.innerHTML = '<p class="text-gray-blue">Nenhum evento próximo.</p>';
            }
        }

        document.getElementById('prev-month').addEventListener('click', () => {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
            renderCalendarPage();
        });

        document.getElementById('next-month').addEventListener('click', () => {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
            renderCalendarPage();
        });


        // --- Activities Page ---
        function renderActivitiesPage() {
            const container = document.getElementById('activities-list');
            container.innerHTML = '';
            const filterSubject = document.getElementById('activity-filter-subject').value;
            const filterStatus = document.getElementById('activity-filter-status').value;
            const today = new Date();

            let filteredActivities = appData.activities;

            if (filterSubject !== 'all') {
                filteredActivities = filteredActivities.filter(act => act.subject === filterSubject);
            }
            if (filterStatus !== 'all') {
                filteredActivities = filteredActivities.filter(act => {
                    if (filterStatus === 'pending') {
                        return act.status === 'pending' && new Date(act.dueDate) >= today;
                    } else if (filterStatus === 'upcoming') {
                        return act.status === 'upcoming' && new Date(act.dueDate) >= today;
                    } else if (filterStatus === 'completed') {
                        return act.status === 'completed';
                    }
                    return false;
                });
            }

            filteredActivities.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

            if (filteredActivities.length === 0) {
                container.innerHTML = '<p class="text-gray-blue">Nenhuma atividade encontrada com os filtros selecionados.</p>';
                return;
            }

            filteredActivities.forEach(activity => {
                const el = document.createElement('div');
                el.className = 'glass-card rounded-xl p-6 animate-slideInUp';
                const statusColor = getStatusColor(activity.status);
                el.innerHTML = `
                    <h3 class="text-xl font-bold text-white mb-2">${activity.name}</h3>
                    <p class="text-gray-blue mb-1"><strong>Matéria:</strong> ${activity.subject} (${activity.teacher})</p>
                    <p class="text-gray-blue mb-3">${activity.description}</p>
                    <div class="flex justify-between items-center text-sm text-gray-blue">
                        <span>Entrega: ${formatDate(activity.dueDate)}</span>
                        <span class="px-2 py-1 rounded-full text-xs ${statusColor}">${activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}</span>
                    </div>
                `;
                container.appendChild(el);
            });
        }

        document.getElementById('activity-filter-subject').addEventListener('change', renderActivitiesPage);
        document.getElementById('activity-filter-status').addEventListener('change', renderActivitiesPage);

        function populateSubjectSelects() {
            const subjectSelects = document.querySelectorAll('#activity-filter-subject, #activity-subject, #admin-section-activities #activity-subject, #admin-section-subjects #subject-name');
            const uniqueSubjects = [...new Set(appData.subjects.map(s => s.name))];

            subjectSelects.forEach(select => {
                // Clear existing options, but keep "Todas as Matérias" for filter
                if (select.id === 'activity-filter-subject') {
                    select.innerHTML = '<option value="all">Todas as Matérias</option>';
                } else {
                    select.innerHTML = '';
                }

                uniqueSubjects.forEach(subjectName => {
                    const option = document.createElement('option');
                    option.value = subjectName;
                    option.textContent = subjectName;
                    select.appendChild(option);
                });
            });
        }


        // --- Schedule Page ---
        function renderSchedulePage() {
            const container = document.getElementById('schedule-table-body');
            container.innerHTML = '';
            const today = new Date();
            const currentDayIndex = today.getDay(); // 0-Sunday, 1-Monday, ..., 6-Saturday
            const dayMap = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
            const currentDayKey = dayMap[currentDayIndex];

            appData.schedule.forEach(row => {
                const tr = document.createElement('tr');
                tr.className = 'border-b border-gray-blue/10 last:border-b-0 hover:bg-navy-secondary/30 transition-colors duration-200';
                tr.innerHTML = `
                    <td class="py-3 px-2 text-white font-semibold">${row.time}</td>
                    <td class="py-3 px-2 ${currentDayKey === 'mon' ? 'bg-cyan-light/10 text-cyan-light rounded-md' : 'text-gray-blue'}">${row.mon || '-'}</td>
                    <td class="py-3 px-2 ${currentDayKey === 'tue' ? 'bg-cyan-light/10 text-cyan-light rounded-md' : 'text-gray-blue'}">${row.tue || '-'}</td>
                    <td class="py-3 px-2 ${currentDayKey === 'wed' ? 'bg-cyan-light/10 text-cyan-light rounded-md' : 'text-gray-blue'}">${row.wed || '-'}</td>
                    <td class="py-3 px-2 ${currentDayKey === 'thu' ? 'bg-cyan-light/10 text-cyan-light rounded-md' : 'text-gray-blue'}">${row.thu || '-'}</td>
                    <td class="py-3 px-2 ${currentDayKey === 'fri' ? 'bg-cyan-light/10 text-cyan-light rounded-md' : 'text-gray-blue'}">${row.fri || '-'}</td>
                `;
                container.appendChild(tr);
            });
        }

        // --- Subjects Page ---
        function renderSubjectsPage() {
            const container = document.getElementById('subjects-grid');
            container.innerHTML = '';

            if (appData.subjects.length === 0) {
                container.innerHTML = '<p class="text-gray-blue">Nenhuma matéria disponível.</p>';
                return;
            }

            appData.subjects.forEach(subject => {
                const el = document.createElement('div');
                el.className = 'glass-card rounded-xl p-6 animate-slideInUp cursor-pointer hover:border-cyan-light';
                el.dataset.subjectId = subject.id;
                el.innerHTML = `
                    <h3 class="text-xl font-bold text-white mb-2">${subject.name}</h3>
                    <p class="text-gray-blue mb-3">Professor: ${subject.professor}</p>
                    <!-- Placeholder for next activity/test -->
                    <div class="text-sm text-gray-blue mt-4">
                        <p>Próxima Atividade: <span class="font-semibold text-white">N/A</span></p>
                        <p>Próxima Prova: <span class="font-semibold text-white">N/A</span></p>
                    </div>
                `;
                container.appendChild(el);
            });

            document.querySelectorAll('#subjects-grid .glass-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    const subjectId = e.currentTarget.dataset.subjectId;
                    renderSubjectDetailPage(subjectId);
                    showPage('subject-detail');
                });
            });
        }

        function renderSubjectDetailPage(subjectId) {
            const subject = appData.subjects.find(s => s.id === subjectId);
            if (!subject) {
                console.error('Subject not found:', subjectId);
                showPage('subjects'); // Go back to subjects list
                return;
            }

            document.getElementById('subject-detail-title').textContent = subject.name;
            document.getElementById('subject-detail-professor').textContent = `Professor: ${subject.professor}`;

            // Activities for this subject
            const subjectActivitiesContainer = document.getElementById('subject-activities-list');
            subjectActivitiesContainer.innerHTML = '';
            const today = new Date();
            const subjectActivities = appData.activities
                .filter(act => act.subject === subject.name && new Date(act.dueDate) >= today)
                .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

            if (subjectActivities.length === 0) {
                subjectActivitiesContainer.innerHTML = '<p class="text-gray-blue">Nenhuma atividade para esta matéria.</p>';
            } else {
                subjectActivities.forEach(activity => {
                    const el = document.createElement('div');
                    el.className = 'glass-card-glow p-3 rounded-lg';
                    const statusColor = getStatusColor(activity.status);
                    el.innerHTML = `
                        <p class="font-semibold text-white">${activity.name}</p>
                        <p class="text-sm text-gray-blue">${activity.description}</p>
                        <div class="flex justify-between items-center text-xs mt-2">
                            <span class="text-gray-blue">Entrega: ${formatDate(activity.dueDate)}</span>
                            <span class="px-2 py-1 rounded-full ${statusColor}">${activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}</span>
                        </div>
                    `;
                    subjectActivitiesContainer.appendChild(el);
                });
            }

            // Tests for this subject (assuming tests are a type of activity or event)
            // For now, let's filter announcements that are 'Prova' and relate to this subject
            const subjectTestsContainer = document.getElementById('subject-tests-list');
            subjectTestsContainer.innerHTML = '';
            const subjectTests = appData.announcements
                .filter(ann => ann.category === 'Prova' && ann.description.includes(subject.name) && new Date(ann.date) >= today)
                .sort((a, b) => new Date(a.date) - new Date(b.date));

            if (subjectTests.length === 0) {
                subjectTestsContainer.innerHTML = '<p class="text-gray-blue">Nenhuma prova para esta matéria.</p>';
            } else {
                subjectTests.forEach(test => {
                    const el = document.createElement('div');
                    el.className = 'glass-card-glow p-3 rounded-lg';
                    el.innerHTML = `
                        <p class="font-semibold text-white">${test.title}</p>
                        <p class="text-sm text-gray-blue">${test.description}</p>
                        <p class="text-xs text-gray-blue mt-2">Data: ${formatDate(test.date)}</p>
                    `;
                    subjectTestsContainer.appendChild(el);
                });
            }

            // Materials and Links for this subject
            const subjectMaterialsContainer = document.getElementById('subject-materials-list');
            subjectMaterialsContainer.innerHTML = '';
            if (subject.materials && subject.materials.length > 0) {
                subject.materials.forEach(material => {
                    const el = document.createElement('div');
                    el.className = 'glass-card-glow p-3 rounded-lg';
                    if (material.startsWith('Link:')) {
                        const linkText = material.substring(6).trim();
                        const linkUrlMatch = linkText.match(/\((.*?)\)/);
                        if (linkUrlMatch && linkUrlMatch[1]) {
                            const linkUrl = linkUrlMatch[1];
                            const displayLinkText = linkText.replace(`(${linkUrl})`, '').trim();
                            if (isSafeUrl(linkUrl)) {
                                el.innerHTML = `<a href="${escapeHtml(linkUrl)}" target="_blank" rel="noopener noreferrer" class="text-cyan-light hover:underline">${escapeHtml(displayLinkText || linkUrl)} <i class="fas fa-external-link-alt ml-1"></i></a>`;
                            } else {
                                el.textContent = displayLinkText || linkUrl;
                            }
                        } else {
                            el.textContent = linkText;
                        }
                    } else {
                        el.textContent = material;
                        el.classList.add('text-white');
                    }
                    subjectMaterialsContainer.appendChild(el);
                });
            } else {
                subjectMaterialsContainer.innerHTML = '<p class="text-gray-blue">Nenhum material ou link disponível.</p>';
            }
        }

        document.querySelector('.back-to-subjects').addEventListener('click', () => showPage('subjects'));


        // --- Mural Page ---
        function renderMuralPage() {
            const container = document.getElementById('mural-gallery');
            container.innerHTML = '';

            if (appData.mural.length === 0) {
                container.innerHTML = '<p class="text-gray-blue">Nenhum item no mural ainda.</p>';
                return;
            }

            appData.mural.forEach(item => {
                const el = document.createElement('div');
                el.className = 'glass-card rounded-xl p-4 animate-slideInUp';
                if (item.type === 'image') {
                        if (!isSafeUrl(item.src)) return;
                    el.innerHTML = `
                        <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.caption)}" class="w-full h-48 object-cover rounded-lg mb-3">
                        <p class="text-gray-blue text-sm">${escapeHtml(item.caption)}</p>
                    `;
                } else if (item.type === 'text') {
                    el.innerHTML = `
                        <p class="text-white text-lg mb-2">${escapeHtml(item.content)}</p>
                        <p class="text-gray-blue text-xs">${formatDate(item.date)}</p>
                    `;
                }
                container.appendChild(el);
            });
        }

        // --- Links Page ---
        function renderLinksPage() {
            const container = document.getElementById('links-grid');
            container.innerHTML = '';

            if (appData.links.length === 0) {
                container.innerHTML = '<p class="text-gray-blue">Nenhum link importante disponível.</p>';
                return;
            }

            appData.links.forEach(link => {
                const el = document.createElement('a');
                if (!isSafeUrl(link.url)) return;
                el.href = link.url;
                el.target = '_blank';
                el.rel = 'noopener noreferrer';
                el.className = 'glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center animate-slideInUp hover:border-cyan-light';
                el.innerHTML = `
                    <i class="${escapeHtml(link.icon || 'fas fa-link')} text-4xl text-cyan-light mb-3"></i>
                    <p class="text-white font-semibold text-lg">${escapeHtml(link.name)}</p>
                `;
                container.appendChild(el);
            });
        }


        // --- Admin Panel ---
        let isAdminLoggedIn = false;

        document.getElementById('admin-login-btn').addEventListener('click', async () => {
            const emailInput = document.getElementById('admin-email');
            const passwordInput = document.getElementById('admin-password');
            const errorMessage = document.getElementById('admin-login-error');
            let loginSucceeded = false;

            if (supabaseClient) {
                const { data: authData, error } = await supabaseClient.auth.signInWithPassword({
                    email: emailInput.value,
                    password: passwordInput.value
                });
                loginSucceeded = !error;

                if (loginSucceeded && authData.user) {
                    const { data: representative, error: representativeError } = await supabaseClient
                        .from('class_central_representatives')
                        .select('user_id')
                        .eq('user_id', authData.user.id)
                        .maybeSingle();
                    loginSucceeded = !representativeError && Boolean(representative);
                }
            } else {
                errorMessage.textContent = 'Configure o Supabase para habilitar o acesso administrativo.';
            }

            if (loginSucceeded) {
                isAdminLoggedIn = true;
                document.getElementById('admin-login').classList.add('hidden');
                document.getElementById('admin-dashboard').classList.remove('hidden');
                errorMessage.classList.add('hidden');
                renderAdminDashboard();
                renderAdminAnnouncements(); // Default to showing announcements management
                document.querySelector('[data-admin-section="announcements"]').classList.add('bg-cyan-light', 'text-navy-dark');
            } else {
                errorMessage.classList.remove('hidden');
            }
        });

        document.getElementById('admin-logout-btn').addEventListener('click', async () => {
            if (supabaseClient) await supabaseClient.auth.signOut();
            isAdminLoggedIn = false;
            document.getElementById('admin-dashboard').classList.add('hidden');
            document.getElementById('admin-login').classList.remove('hidden');
            document.getElementById('admin-password').value = '';
        });

        document.querySelectorAll('.admin-nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.admin-sub-section').forEach(sec => sec.classList.add('hidden'));
                document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('bg-cyan-light', 'text-navy-dark'));

                const sectionId = e.target.dataset.adminSection;
                document.getElementById(`admin-section-${sectionId}`).classList.remove('hidden');
                e.target.classList.add('bg-cyan-light', 'text-navy-dark');

                // Render specific admin section content
                switch(sectionId) {
                    case 'announcements': renderAdminAnnouncements(); break;
                    case 'activities': renderAdminActivities(); break;
                    case 'events': renderAdminEvents(); break;
                    case 'schedule': renderAdminSchedule(); break;
                    case 'subjects': renderAdminSubjects(); break;
                    case 'links': renderAdminLinks(); break;
                    case 'mural': renderAdminMural(); break;
                    case 'content': renderAdminSiteContent(); break;
                }
            });
        });

        function renderAdminDashboard() {
            if (!isAdminLoggedIn) return;
            document.getElementById('admin-announcements-count').textContent = appData.announcements.length;
            document.getElementById('admin-pending-activities-count').textContent = appData.activities.filter(act => act.status === 'pending').length;
            document.getElementById('admin-upcoming-events-count').textContent = appData.events.filter(e => new Date(e.date) >= new Date()).length;
            document.getElementById('admin-subjects-count').textContent = appData.subjects.length;
        }

        const siteContentForm = document.getElementById('site-content-form');
        const siteContentFields = {
            homeTitle: 'content-home-title',
            homeDescription: 'content-home-description',
            homePendingLabel: 'content-home-pending-label',
            homeNextClassLabel: 'content-home-next-class-label',
            homeAnnouncementsTitle: 'content-home-announcements-title',
            homeAnnouncementsButton: 'content-home-announcements-button',
            homeDatesTitle: 'content-home-dates-title',
            homeCalendarButton: 'content-home-calendar-button',
            homeActivitiesTitle: 'content-home-activities-title',
            homeActivitiesButton: 'content-home-activities-button',
            aboutTitle: 'content-about-title',
            aboutParagraph1: 'content-about-paragraph-1',
            aboutParagraph2: 'content-about-paragraph-2',
            aboutYear: 'content-about-year',
            aboutRepresentatives: 'content-about-representatives',
            aboutObjective: 'content-about-objective'
        };

        function renderAdminSiteContent() {
            Object.entries(siteContentFields).forEach(([field, elementId]) => {
                const element = document.getElementById(elementId);
                if (element) element.value = appData.siteContent[field] || '';
            });
        }

        siteContentForm.addEventListener('submit', event => {
            event.preventDefault();
            Object.entries(siteContentFields).forEach(([field, elementId]) => {
                appData.siteContent[field] = document.getElementById(elementId).value.trim();
            });
            saveData();
            renderAdminSiteContent();
            alert('Textos salvos com sucesso!');
        });

        // Admin Announcements
        const announcementForm = document.getElementById('announcement-form');
        const addAnnouncementBtn = document.getElementById('add-announcement-btn');
        const cancelAnnouncementEditBtn = document.getElementById('cancel-announcement-edit');

        addAnnouncementBtn.addEventListener('click', () => {
            announcementForm.reset();
            document.getElementById('announcement-id').value = '';
            announcementForm.classList.remove('hidden');
        });

        cancelAnnouncementEditBtn.addEventListener('click', () => {
            announcementForm.classList.add('hidden');
        });

        announcementForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('announcement-id').value;
            const title = document.getElementById('announcement-title').value;
            const description = document.getElementById('announcement-description').value;
            const date = document.getElementById('announcement-date').value;
            const category = document.getElementById('announcement-category').value;
            const important = document.getElementById('announcement-important').checked;

            if (id) {
                const index = appData.announcements.findIndex(a => a.id === id);
                if (index !== -1) {
                    appData.announcements[index] = { id, title, description, date, category, important };
                }
            } else {
                appData.announcements.push({ id: generateId(), title, description, date, category, important });
            }
            saveData();
            announcementForm.classList.add('hidden');
            renderAdminAnnouncements();
        });

        function renderAdminAnnouncements() {
            const container = document.getElementById('admin-announcements-list');
            container.innerHTML = '';
            appData.announcements.forEach(announcement => {
                const el = document.createElement('div');
                el.className = 'glass-card-glow p-4 rounded-lg flex justify-between items-center';
                el.innerHTML = `
                    <div>
                        <p class="font-semibold text-white">${announcement.title} ${announcement.important ? '<span class="text-red-400 text-sm ml-2">❗</span>' : ''}</p>
                        <p class="text-sm text-gray-blue">${formatDate(announcement.date)} - ${announcement.category}</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="edit-announcement-btn px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600" data-id="${announcement.id}">Editar</button>
                        <button class="delete-announcement-btn px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600" data-id="${announcement.id}">Excluir</button>
                    </div>
                `;
                container.appendChild(el);
            });

            document.querySelectorAll('.edit-announcement-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    const announcement = appData.announcements.find(a => a.id === id);
                    if (announcement) {
                        document.getElementById('announcement-id').value = announcement.id;
                        document.getElementById('announcement-title').value = announcement.title;
                        document.getElementById('announcement-description').value = announcement.description;
                        document.getElementById('announcement-date').value = announcement.date;
                        document.getElementById('announcement-category').value = announcement.category;
                        document.getElementById('announcement-important').checked = announcement.important;
                        announcementForm.classList.remove('hidden');
                    }
                });
            });

            document.querySelectorAll('.delete-announcement-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    appData.announcements = appData.announcements.filter(a => a.id !== id);
                    saveData();
                    renderAdminAnnouncements();
                });
            });
        }

        // Admin Activities
        const activityForm = document.getElementById('activity-form');
        const addActivityBtn = document.getElementById('add-activity-btn');
        const cancelActivityEditBtn = document.getElementById('cancel-activity-edit');

        addActivityBtn.addEventListener('click', () => {
            activityForm.reset();
            document.getElementById('activity-id').value = '';
            activityForm.classList.remove('hidden');
        });

        cancelActivityEditBtn.addEventListener('click', () => {
            activityForm.classList.add('hidden');
        });

        activityForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('activity-id').value;
            const name = document.getElementById('activity-name').value;
            const subject = document.getElementById('activity-subject').value;
            const teacher = document.getElementById('activity-teacher').value;
            const description = document.getElementById('activity-description').value;
            const dueDate = document.getElementById('activity-dueDate').value;
            const status = document.getElementById('activity-status').value;

            if (id) {
                const index = appData.activities.findIndex(a => a.id === id);
                if (index !== -1) {
                    appData.activities[index] = { id, name, subject, teacher, description, dueDate, status };
                }
            } else {
                appData.activities.push({ id: generateId(), name, subject, teacher, description, dueDate, status });
            }
            saveData();
            activityForm.classList.add('hidden');
            renderAdminActivities();
        });

        function renderAdminActivities() {
            const container = document.getElementById('admin-activities-list');
            container.innerHTML = '';
            appData.activities.forEach(activity => {
                const el = document.createElement('div');
                el.className = 'glass-card-glow p-4 rounded-lg flex justify-between items-center';
                el.innerHTML = `
                    <div>
                        <p class="font-semibold text-white">${activity.name}</p>
                        <p class="text-sm text-gray-blue">${activity.subject} - Entrega: ${formatDate(activity.dueDate)} (${activity.status})</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="edit-activity-btn px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600" data-id="${activity.id}">Editar</button>
                        <button class="delete-activity-btn px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600" data-id="${activity.id}">Excluir</button>
                    </div>
                `;
                container.appendChild(el);
            });

            document.querySelectorAll('.edit-activity-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    const activity = appData.activities.find(a => a.id === id);
                    if (activity) {
                        document.getElementById('activity-id').value = activity.id;
                        document.getElementById('activity-name').value = activity.name;
                        document.getElementById('activity-subject').value = activity.subject;
                        document.getElementById('activity-teacher').value = activity.teacher;
                        document.getElementById('activity-description').value = activity.description;
                        document.getElementById('activity-dueDate').value = activity.dueDate;
                        document.getElementById('activity-status').value = activity.status;
                        activityForm.classList.remove('hidden');
                    }
                });
            });

            document.querySelectorAll('.delete-activity-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    appData.activities = appData.activities.filter(a => a.id !== id);
                    saveData();
                    renderAdminActivities();
                });
            });
        }

        // Admin Events
        const eventForm = document.getElementById('event-form');
        const addEventBtn = document.getElementById('add-event-btn');
        const cancelEventEditBtn = document.getElementById('cancel-event-edit');

        addEventBtn.addEventListener('click', () => {
            eventForm.reset();
            document.getElementById('event-id').value = '';
            eventForm.classList.remove('hidden');
        });

        cancelEventEditBtn.addEventListener('click', () => {
            eventForm.classList.add('hidden');
        });

        eventForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('event-id').value;
            const name = document.getElementById('event-name').value;
            const description = document.getElementById('event-description').value;
            const date = document.getElementById('event-date').value;
            const category = document.getElementById('event-category').value;

            if (id) {
                const index = appData.events.findIndex(ev => ev.id === id);
                if (index !== -1) {
                    appData.events[index] = { id, name, description, date, category };
                }
            } else {
                appData.events.push({ id: generateId(), name, description, date, category });
            }
            saveData();
            eventForm.classList.add('hidden');
            renderAdminEvents();
        });

        function renderAdminEvents() {
            const container = document.getElementById('admin-events-list');
            container.innerHTML = '';
            appData.events.forEach(event => {
                const el = document.createElement('div');
                el.className = 'glass-card-glow p-4 rounded-lg flex justify-between items-center';
                el.innerHTML = `
                    <div>
                        <p class="font-semibold text-white">${event.name}</p>
                        <p class="text-sm text-gray-blue">${formatDate(event.date)} - ${event.category}</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="edit-event-btn px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600" data-id="${event.id}">Editar</button>
                        <button class="delete-event-btn px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600" data-id="${event.id}">Excluir</button>
                    </div>
                `;
                container.appendChild(el);
            });

            document.querySelectorAll('.edit-event-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    const event = appData.events.find(ev => ev.id === id);
                    if (event) {
                        document.getElementById('event-id').value = event.id;
                        document.getElementById('event-name').value = event.name;
                        document.getElementById('event-description').value = event.description;
                        document.getElementById('event-date').value = event.date;
                        document.getElementById('event-category').value = event.category;
                        eventForm.classList.remove('hidden');
                    }
                });
            });

            document.querySelectorAll('.delete-event-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    appData.events = appData.events.filter(ev => ev.id !== id);
                    saveData();
                    renderAdminEvents();
                });
            });
        }

        // Admin Schedule
        const saveScheduleBtn = document.getElementById('save-schedule-btn');

        function renderAdminSchedule() {
            const container = document.getElementById('admin-schedule-table-body');
            container.innerHTML = '';
            const dayKeys = ['mon', 'tue', 'wed', 'thu', 'fri'];

            appData.schedule.forEach((row, rowIndex) => {
                const tr = document.createElement('tr');
                tr.className = 'border-b border-gray-blue/10 last:border-b-0';
                tr.innerHTML = `<td class="py-3 px-2 text-white font-semibold">${row.time}</td>`;
                dayKeys.forEach(day => {
                    tr.innerHTML += `
                        <td class="py-3 px-2">
                            <input type="text" class="w-full p-1 rounded-md bg-navy-secondary border border-gray-blue/30 text-white focus:outline-none focus:ring-1 focus:ring-cyan-light" value="${row[day] || ''}" data-row="${rowIndex}" data-day="${day}">
                        </td>
                    `;
                });
                container.appendChild(tr);
            });
        }

        saveScheduleBtn.addEventListener('click', () => {
            const inputs = document.querySelectorAll('#admin-schedule-table-body input');
            inputs.forEach(input => {
                const rowIndex = parseInt(input.dataset.row);
                const day = input.dataset.day;
                appData.schedule[rowIndex][day] = input.value;
            });
            saveData();
            alert('Horário salvo com sucesso!');
        });

        // Admin Subjects
        const subjectForm = document.getElementById('subject-form');
        const addSubjectBtn = document.getElementById('add-subject-btn');
        const cancelSubjectEditBtn = document.getElementById('cancel-subject-edit');

        addSubjectBtn.addEventListener('click', () => {
            subjectForm.reset();
            document.getElementById('subject-id').value = '';
            subjectForm.classList.remove('hidden');
        });

        cancelSubjectEditBtn.addEventListener('click', () => {
            subjectForm.classList.add('hidden');
        });

        subjectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('subject-id').value;
            const name = document.getElementById('subject-name').value;
            const professor = document.getElementById('subject-professor').value;
            const materialsText = document.getElementById('subject-materials').value;
            const materials = materialsText.split('\n').map(m => m.trim()).filter(m => m !== '');

            if (id) {
                const index = appData.subjects.findIndex(s => s.id === id);
                if (index !== -1) {
                    appData.subjects[index] = { id, name, professor, materials };
                }
            } else {
                appData.subjects.push({ id: generateId(), name, professor, materials });
            }
            saveData();
            subjectForm.classList.add('hidden');
            renderAdminSubjects();
        });

        function renderAdminSubjects() {
            const container = document.getElementById('admin-subjects-list');
            container.innerHTML = '';
            appData.subjects.forEach(subject => {
                const el = document.createElement('div');
                el.className = 'glass-card-glow p-4 rounded-lg flex justify-between items-center';
                el.innerHTML = `
                    <div>
                        <p class="font-semibold text-white">${subject.name}</p>
                        <p class="text-sm text-gray-blue">Professor: ${subject.professor}</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="edit-subject-btn px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600" data-id="${subject.id}">Editar</button>
                        <button class="delete-subject-btn px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600" data-id="${subject.id}">Excluir</button>
                    </div>
                `;
                container.appendChild(el);
            });

            document.querySelectorAll('.edit-subject-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    const subject = appData.subjects.find(s => s.id === id);
                    if (subject) {
                        document.getElementById('subject-id').value = subject.id;
                        document.getElementById('subject-name').value = subject.name;
                        document.getElementById('subject-professor').value = subject.professor;
                        document.getElementById('subject-materials').value = subject.materials ? subject.materials.join('\n') : '';
                        subjectForm.classList.remove('hidden');
                    }
                });
            });

            document.querySelectorAll('.delete-subject-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    appData.subjects = appData.subjects.filter(s => s.id !== id);
                    saveData();
                    renderAdminSubjects();
                });
            });
        }

        // Admin Links
        const linkForm = document.getElementById('link-form');
        const addLinkBtn = document.getElementById('add-link-btn');
        const cancelLinkEditBtn = document.getElementById('cancel-link-edit');

        addLinkBtn.addEventListener('click', () => {
            linkForm.reset();
            document.getElementById('link-id').value = '';
            linkForm.classList.remove('hidden');
        });

        cancelLinkEditBtn.addEventListener('click', () => {
            linkForm.classList.add('hidden');
        });

        linkForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('link-id').value;
            const name = document.getElementById('link-name').value;
            const url = document.getElementById('link-url').value;
            const icon = document.getElementById('link-icon').value;

            if (id) {
                const index = appData.links.findIndex(l => l.id === id);
                if (index !== -1) {
                    appData.links[index] = { id, name, url, icon };
                }
            } else {
                appData.links.push({ id: generateId(), name, url, icon });
            }
            saveData();
            linkForm.classList.add('hidden');
            renderAdminLinks();
        });

        function renderAdminLinks() {
            const container = document.getElementById('admin-links-list');
            container.innerHTML = '';
            appData.links.forEach(link => {
                const el = document.createElement('div');
                el.className = 'glass-card-glow p-4 rounded-lg flex justify-between items-center';
                el.innerHTML = `
                    <div>
                        <p class="font-semibold text-white"><i class="${link.icon || 'fas fa-link'} mr-2"></i>${link.name}</p>
                        <p class="text-sm text-gray-blue">${link.url}</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="edit-link-btn px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600" data-id="${link.id}">Editar</button>
                        <button class="delete-link-btn px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600" data-id="${link.id}">Excluir</button>
                    </div>
                `;
                container.appendChild(el);
            });

            document.querySelectorAll('.edit-link-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    const link = appData.links.find(l => l.id === id);
                    if (link) {
                        document.getElementById('link-id').value = link.id;
                        document.getElementById('link-name').value = link.name;
                        document.getElementById('link-url').value = link.url;
                        document.getElementById('link-icon').value = link.icon;
                        linkForm.classList.remove('hidden');
                    }
                });
            });

            document.querySelectorAll('.delete-link-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    appData.links = appData.links.filter(l => l.id !== id);
                    saveData();
                    renderAdminLinks();
                });
            });
        }

        // Admin Mural
        const muralForm = document.getElementById('mural-form');
        const addMuralBtn = document.getElementById('add-mural-btn');
        const cancelMuralEditBtn = document.getElementById('cancel-mural-edit');

        addMuralBtn.addEventListener('click', () => {
            muralForm.reset();
            document.getElementById('mural-id').value = '';
            muralForm.classList.remove('hidden');
        });

        cancelMuralEditBtn.addEventListener('click', () => muralForm.classList.add('hidden'));

        muralForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const id = document.getElementById('mural-id').value;
            const type = document.getElementById('mural-type').value;
            const content = document.getElementById('mural-content').value.trim();
            const caption = document.getElementById('mural-caption').value.trim();

            if (type === 'image' && !isSafeUrl(content)) {
                alert('Informe uma URL de imagem válida usando http ou https.');
                return;
            }

            const item = type === 'image'
                ? { id: id || generateId(), type, src: content, caption }
                : { id: id || generateId(), type, content, date: new Date().toISOString().split('T')[0] };
            const itemIndex = appData.mural.findIndex(existingItem => existingItem.id === id);
            if (itemIndex >= 0) appData.mural[itemIndex] = item;
            else appData.mural.push(item);

            saveData();
            muralForm.classList.add('hidden');
            renderAdminMural();
        });

        function renderAdminMural() {
            const container = document.getElementById('admin-mural-list');
            container.innerHTML = '';
            appData.mural.forEach(item => {
                const el = document.createElement('div');
                const label = item.type === 'image' ? item.caption || item.src : item.content;
                el.className = 'glass-card-glow p-4 rounded-lg flex justify-between items-center gap-4';
                el.innerHTML = `
                    <p class="font-semibold text-white truncate">${escapeHtml(label)}</p>
                    <button class="edit-mural-btn px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600" data-id="${escapeHtml(item.id)}">Editar</button>
                    <button class="delete-mural-btn px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600" data-id="${escapeHtml(item.id)}">Excluir</button>
                `;
                container.appendChild(el);
            });

            container.querySelectorAll('.edit-mural-btn').forEach(button => {
                button.addEventListener('click', () => {
                    const item = appData.mural.find(muralItem => muralItem.id === button.dataset.id);
                    if (!item) return;
                    document.getElementById('mural-id').value = item.id;
                    document.getElementById('mural-type').value = item.type;
                    document.getElementById('mural-content').value = item.type === 'image' ? item.src : item.content;
                    document.getElementById('mural-caption').value = item.caption || '';
                    muralForm.classList.remove('hidden');
                });
            });

            container.querySelectorAll('.delete-mural-btn').forEach(button => {
                button.addEventListener('click', () => {
                    appData.mural = appData.mural.filter(item => item.id !== button.dataset.id);
                    saveData();
                    renderAdminMural();
                });
            });
        }

        // --- Scroll to Top Button ---
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        });
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Load Font Awesome for icons (for links and general use)
        const fontAwesomeScript = document.createElement('script');
        fontAwesomeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js';
        fontAwesomeScript.defer = true;
        document.head.appendChild(fontAwesomeScript);

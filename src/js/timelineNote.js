export default class TimelineNote {
  constructor(name, position, el) {
    this.name = name.value;
    this.position = position;
    this.el = el;
    this.date = new Date().toLocaleDateString();
    this.time = new Date().toLocaleTimeString().slice(0, -3);
  }

  createNote(timelineContent, listArray) {
    const timelineContentVar = timelineContent;
    timelineContentVar.innerHTML = '';
    listArray.forEach((notes) => {
      this.note = document.createElement('div');
      this.note.classList.add('timeline-note');
      this.note.innerHTML = ` <span class="timeline-note-time">${notes.date} ${notes.time}</span>
            <div class="timeline-note-content"></div>
            <span class="timeline-note-geolocation">${notes.position}</span>`;
      timelineContentVar.insertAdjacentElement('afterbegin', this.note);
      this.note.querySelector('.timeline-note-content').appendChild(notes.el);
    });
  }
}

// Q4 - Custom Form Builder using FormBuilder class
class FormBuilder {
  constructor(fields=[]) {
    this.fields = fields;
    this.form = document.createElement('form');
  }

  render(container) {
    this.form.innerHTML = '';
    this.fields.forEach(f => {
      const wrapper = document.createElement('div');
      const label = document.createElement('label');
      label.textContent = f.label + ': ';
      const input = document.createElement('input');
      input.type = f.type || 'text';
      input.name = f.name || f.label.toLowerCase();
      wrapper.appendChild(label);
      wrapper.appendChild(input);
      this.form.appendChild(wrapper);
    });
    const submit = document.createElement('button');
    submit.type = 'button';
    submit.textContent = 'Submit';
    submit.addEventListener('click', () => {
      const data = this.getFormData();
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    });
    this.form.appendChild(submit);
    container.appendChild(this.form);
  }

  getFormData() {
    const data = {};
    const inputs = this.form.querySelectorAll('input');
    inputs.forEach(i => data[i.name] = i.value);
    return data;
  }
}

// demo usage
document.addEventListener('DOMContentLoaded', () => {
  const fields = [
    {type:'text', label:'Username', name:'username'},
    {type:'email', label:'Email', name:'email'},
    {type:'password', label:'Password', name:'password'},
    {type:'text', label:'City', name:'city'}
  ];
  const fb = new FormBuilder(fields);
  fb.render(document.getElementById('form-container'));
});

<template>
  <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
    <alert v-if="hasFeedback" :type="feedback.type" :message="feedback.message"></alert>
    <div class="form-row">
      <div class="form-group col-md">
        <label for="cname">{{ $t("contact.contact_name") }}*</label>
        <input id="cname" v-model="contact.name" type="text" class="form-control">
        <div class="feedback"></div>
      </div>
      <div class="form-group col-md">
        <label for="email">{{ $t("contact.contact_email") }}*</label>
        <input id="email" v-model="contact.email" type="email" class="form-control">
        <div class="feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md">
        <label for="company">{{ $t("contact.contact_company") }}</label>
        <input id="company" v-model="contact.company" type="text" class="form-control">
        <div class="feedback"></div>
      </div>
      <div class="form-group col-md">
        <label for="website">{{ $t("contact.contact_website") }}</label>
        <input id="website" v-model="contact.website" type="text" class="form-control">
        <div class="feedback"></div>
      </div>
    </div>
    <div class="form-group">
      <label for="message">{{ $t("contact.contact_message") }}*</label>
      <textarea id="message" v-model="contact.message" rows="4" class="form-control" :placeholder="$t('contact.contact_m_placeholder')" required></textarea>
      <div class="feedback"></div>
    </div>
    <button class="retro-button" type="submit" :disabled="sendingForm">{{ $t("contact.contact_submit") }}</button>
  </form>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'contactForm',
  components: { Alert },
  data() {
    return {
      contactUri: process.env.CONTACT_URI,
      contact: {
        name: '',
        email: '',
        company: '',
        website: '',
        message: ''
      },
      errors: [],
      sendingForm: false,
      hasFeedback: false,
      feedback: {
        type: '',
        message: '',
      }
    }
  },
  methods: {
    handleSubmit: function() {
      let localErrors = [];
      let emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i
      let websiteRegex = /^((((H|h)(T|t)|(F|f))(T|t)(P|p)((S|s)?))\:\/\/)?(www.|[a-zA-Z0-9].)[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(\:[0-9]{1,5})*(\/($|[a-zA-Z0-9\.\,\;\?\'\\\+&amp;%\$#\=~_\-]+))*$/i

      this.sendingForm = true
      this.clearMessages()

      if (this.contact.name.length === 0) {
        localErrors.push({target: cname, error: 'mandatory'})
      }
      if (this.contact.email.length === 0) {
        localErrors.push({target: email, error: 'mandatory'})
      }
      if (this.contact.message.length === 0) {
        localErrors.push({target: message, error: 'mandatory'})
      }
      if (this.contact.email.length > 0 && !emailRegex.test(this.contact.email)) {
        localErrors.push({target: email, error: 'format'})
      }
      if (this.contact.website.length > 0 && !websiteRegex.test(this.contact.website)) {
        localErrors.push({target: website, error: 'format'})
      }

      this.errors = localErrors;

      if (this.errors.length === 0) {
        this.$http.post(this.contactUri, {contactDatas: this.contact})
          .then(response => {
            this.hasFeedback = true
            if (response.status === 200) {
              this.feedback.type = 'success'
              this.feedback.message = this.$i18n.t("contact.feedback_success")
            } else if (response.status === 500) {
              this.feedback.type = 'danger'
              this.feedback.message = this.$i18n.t("contact.feedback_err")
            }
            console.info(response.statusText)
          })
      } else {
        this.sendingForm = false
      }
    },
    clearMessages: function() {
      this.hasFeedback = false
      this.feedback.type = ''
        this.feedback.message = ''
      this.errors.forEach(function (errorItem) {
        errorItem.target.classList.remove('is-invalid')
        errorItem.target.nextElementSibling.classList.remove('invalid-feedback')
        errorItem.target.nextElementSibling.innerText = ''
      })
    }
  },
  watch: {
    errors: function () {
      let that = this
      that.errors.forEach(function (errorItem) {
        errorItem.target.classList.add('is-invalid')
        errorItem.target.nextElementSibling.classList.add('invalid-feedback')
        errorItem.target.nextElementSibling.innerText = that.$i18n.t("contact.err_" + errorItem.error)
      })
    }
  }
}
</script>
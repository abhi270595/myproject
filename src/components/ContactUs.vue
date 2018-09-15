<template>
    <div class="m-4 m-xl-5">
        <div class="mb-3">
            <span class="heading border-primary">Contact Us</span>
        </div>
        <b-container class="noMargin noPadding">
            <b-row class="noMargin">
                <b-col class="col-12 col-sm-12 col-md-8 col-lg-6 noPadding mb-3">
                    <b-form @submit="onSubmit"
                        @reset="onReset" v-if="show" novalidate validated>
                    <b-form-group id="InputGroup1"
                                    label="Email Address:"
                                    label-for="input1"
                                    description="We'll never share your email with anyone else."
                                    invalid-feedback="Enter a valid Email Address">
                        <b-form-input id="input1"
                                    type="email"
                                    v-model="form.email"
                                    :pattern="email_regex.source"
                                    required
                                    placeholder="name@example.com">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="InputGroup2"
                                    label="Name:"
                                    label-for="input2"
                                    invalid-feedback="Enter your Name">
                        <b-form-input id="input2"
                                    type="text"
                                    v-model="form.name"
                                    required
                                    placeholder="Eg: John Doe">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="InputGroup3"
                                    label="Subject:"
                                    label-for="input3"
                                    invalid-feedback="Enter a Subject">
                        <b-form-input id="input3"
                                    type="text"
                                    v-model="form.subject"
                                    required
                                    placeholder="Subject">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="TextAreaGroup1"
                                    label="Message:"
                                    label-for="textArea1">
                        <b-form-textarea id="textArea1"
                                        v-model="form.message"
                                        placeholder="Enter something"
                                        :rows="6"
                                        :max-rows="6">
                        </b-form-textarea>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="primary">Reset</b-button>
                </b-form>
                </b-col>
                <b-col class="col-12 col-sm-12 col-md-8 col-lg-6 noPadding leftPadding mb-3">
                    <b-card text-variant="white"
                    class="contact-card primary-bg-color">
                    <div class="mb-4">
                        <span class="subHeading">Contact Details</span>
                    </div>
                    <ul class="list-unstyled">
                        <b-media tag="li">
                            <font-awesome-icon class="fa-fw" size="2x" slot="aside" :icon="{ prefix: 'fas', iconName: 'address-book' }"/>
                            <h5 class="mt-0 mb-1">Contact Info</h5>
                            C-14, Plot No-519, Shivshrushti CHS LTD, Sector No-5, Charkop, Kandivali-West, Mumbai-400067, Maharashtra, India.
                        </b-media>
                        <b-media tag="li" class="my-4">
                            <font-awesome-icon class="fa-fw" size="2x" slot="aside" :icon="{ prefix: 'fas', iconName: 'phone' }"/>
                            <h5 class="mt-0 mb-1">Phone</h5>
                            +91 9633794261
                        </b-media>
                        <b-media tag="li">
                            <font-awesome-icon class="fa-fw" size="2x" slot="aside" :icon="{ prefix: 'fas', iconName: 'envelope' }"/>
                            <h5 class="mt-0 mb-1">Email</h5>
                            info@ashtechemerge.com
                    </b-media>
                    </ul>
                </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactUs',
  data () {
    return {
      form: {
        email: '',
        name: '',
        subject: '',
        message: ''
      },
      show: true,
      email_regex: new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')
    }
  },
  methods: {
    _resetFormValues () {
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.subject = ''
      this.form.message = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    _sendPostRequest () {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwoRVOGVpfsJDj3oieUVWUgFbx6TA6fNV-IRmBPy30QgGycEbut/exec'
      var bodyFormData = new FormData()
      bodyFormData.set('email', this.form.email)
      bodyFormData.set('name', this.form.name)
      bodyFormData.set('subject', this.form.subject)
      bodyFormData.set('message', this.form.message)
      axios.post(scriptURL, bodyFormData,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
        })
    },
    _validateFormData () {
      if (!this.form.name) {
        return false
      }
      if (!this.form.subject) {
        return false
      }
      if (!this.email_regex.test(this.form.email)) {
        return false
      }
      return true
    },
    onSubmit (evt) {
      evt.preventDefault()
      if (this._validateFormData()) {
        this._sendPostRequest()
        this._resetFormValues()
      }
    },
    onReset (evt) {
      evt.preventDefault()
      this._resetFormValues()
    }
  }
}
</script>

<style>
.heading {
    border-bottom: 4px solid;
    line-height: 1.2;
    font-size: 2rem;
    font-weight: 500;
}

.noPadding {
   padding-left: 0 !important;
   padding-right: 0 !important;
}

.noMargin {
    margin-left: 0 !important;
    margin-right: 0 !important;
}

.rounded-image {
    border-radius: 50%;
    width: 8rem;
}

.subHeading {
    border-bottom: 2px solid;
    line-height: 1.2;
    font-size: 1.4rem;
}

.contact-card {
    max-width: 30rem;
}

@media (min-width: 992px) {
    .noMargin > .leftPadding {
        padding-left: 2rem !important;
    }
}
</style>

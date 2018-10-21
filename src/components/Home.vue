<template>
    <div class="m-4 m-xl-5">
        <div class="text-center mb-3">
            <h3><b>{{text}}</b></h3>
            {{description}}
        </div>
        <hr class="separator">
        <div class="text-center mb-4">
            <h4><b>Solution To Your Problems</b></h4>
            <b>Ashtonish Tech. Emerge</b> develops easy to use, high quality & efficient products to solve challenges faced by our customers to carry out their daily processes. We engage with our customers throughout product creation process to ensure what we create is what our customers expect from the product.
        </div>
        <b-container class="text-center">
            <b-row>
                <b-col class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3"
                    v-for="step in steps"
                    :key="step.id">
                    <font-awesome-icon class="fa-fw primary-color mb-3" size="3x" :icon="{ prefix: 'fas', iconName: step.iconName }"/>
                    <h5 class="mt-0 mb-1">{{step.title}}</h5>
                    {{step.description}}
                </b-col>
            </b-row>
        </b-container>
        <!--<hr class="separator">
        <div class="mb-3">
            <span class="heading border-primary">Products</span>
        </div>-->
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      text: 'We at Ashtonish Tech. Emerge',
      description: '"Keep customers at the center of our business"',
      steps: [
        {
          id: 'G1',
          title: 'Information Gathering',
          description: 'We want our products to ease & simplify our customers processes. Hence, we collect these valuable data to develop useful & efficient products.',
          iconName: 'file'
        },
        {
          id: 'G2',
          title: 'Design',
          description: 'Design is the key for developing products which are usable. We regard design as one of the important step in our product development.',
          iconName: 'palette'
        },
        {
          id: 'G3',
          title: 'Develop',
          description: 'We have an excellent development team which thrives to produce high quality & user-friendly products.',
          iconName: 'laptop'
        },
        {
          id: 'G4',
          title: 'Feedback',
          description: 'We engage with our customers to get their valuable feedback on our products. Then our development team incorporates all the feedback to improve quality & usability of our products.',
          iconName: 'comment-dots'
        },
        {
          id: 'G5',
          title: 'Support',
          description: 'We have a 24*7 customer service support for all our products.',
          iconName: 'headphones'
        },
        {
          id: 'G6',
          title: 'Maintenance',
          description: 'We provide constant maintenance for all our products.',
          iconName: 'wrench'
        }
      ]
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

.primary-color {
    color: #0056B3;
}
</style>

<template>
    <div class="m-4 m-xl-5">
        <div class="mb-3">
            <span class="heading border-primary">Vision</span>
        </div>
        <p>{{vision}}</p>
        <hr class="separator">
        <div class="mb-3">
            <span class="heading border-primary">Mission</span>
        </div>
        <p>{{mission}}</p>
        <hr class="separator">
        <div class="mb-3">
            <span class="heading border-primary">Founders</span>
        </div>
        <b-card-group deck>
            <b-card text-variant="white"
                class="text-center card-attributes primary-bg-color"
                v-for="founder in founders"
                :key="founder.id">
                <img class="rounded-image mb-3" :src="founder.imageUrl" alt="Founders" height="128" width="128">
                <h2>{{founder.name}}</h2>
                <div class="mb-3">
                    <span class="subHeading">{{founder.title}}</span>
                </div>
                <p class="card-text">{{founder.description}}</p>
                <div slot="footer">
                    <a v-for="link in founder.links" :key="link.id"
                        :href="link.url" rel="noopener" class="text-white mx-1">
                        <font-awesome-icon size="lg" :icon="{ prefix: 'fab', iconName: link.icon }"/>
                    </a>
                </div>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      vision: 'We envision to create software and logistics solutions to cater to the ever growing esports audience.',
      mission: 'We envision to create software and logistics solutions to cater to the ever growing esports audience.',
      founders: [
        {
          id: 'F1',
          name: 'Abhishek Waghela',
          imageUrl: require('../assets/AW.jpeg'),
          title: 'Co-founder',
          description: 'NIT Calicut Alumni, vision to revolutionarize software industry by using Artificial Intelligence & Machine learning to develop intelligent software.',
          links: [
            {
              id: 'I1',
              icon: 'linkedin-in',
              url: 'https://www.linkedin.com/in/abhi270595'
            },
            {
              id: 'I2',
              icon: 'facebook',
              url: 'https://www.facebook.com/abhishek.waghela.90'
            },
            {
              id: 'I3',
              icon: 'twitter',
              url: 'https://twitter.com/abhi27051995'
            }
          ]
        },
        {
          id: 'F2',
          name: 'Darshan Waghela',
          imageUrl: require('../assets/DW.jpeg'),
          title: 'Co-founder',
          description: '4th year undergraduate student at IIT Kanpur, I have a vision to promote esports as a form of spectator sports and be involved with it in my full capacity.',
          links: [
            {
              id: 'I1',
              icon: 'linkedin-in',
              url: 'https://www.linkedin.com/in/darshan-waghela-b1b311116/'
            },
            {
              id: 'I2',
              icon: 'facebook',
              url: 'https://www.facebook.com/darshanwaghela'
            },
            {
              id: 'I3',
              icon: 'twitter',
              url: 'https://twitter.com/darshan_waghela'
            }
          ]
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

.subHeading {
    border-bottom: 2px solid;
    line-height: 1.2;
    font-size: 1.4rem;
}

.rounded-image {
    border-radius: 50%;
    width: 8rem;
}

.card-attributes {
    max-width: 20rem;
}
</style>

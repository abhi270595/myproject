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
                <img class="rounded-image mb-3" :src="founder.imageUrl" alt="Logo">
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
      vision: 'Founded in 2008, Stack Overflow is the largest, most trusted online community for developers to learn, share their knowledge, and build their careers. More than 50 million professional and aspiring programmers visit Stack Overflow each month to help solve coding problems, develop new skills, and find job opportunities.',
      mission: 'Founded in 2008, Stack Overflow is the largest, most trusted online community for developers to learn, share their knowledge, and build their careers. More than 50 million professional and aspiring programmers visit Stack Overflow each month to help solve coding problems, develop new skills, and find job opportunities.',
      founders: [
        {
          id: 'F1',
          name: 'Abhishek Waghela',
          imageUrl: require('../assets/avatar.png'),
          title: 'Co-founder',
          description: 'NIT Calicut Alumni, vision to revolutionarize software industry by using AI & Machine learning to develop intelligent software.',
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
          imageUrl: require('../assets/avatar.png'),
          title: 'Co-founder',
          description: 'NIT Calicut Alumni, vision to revolutionarize software industry.',
          links: [
            {
              id: 'I1',
              icon: 'linkedin-in',
              url: 'https://in.linkedin.com/'
            },
            {
              id: 'I2',
              icon: 'facebook',
              url: 'https://in.linkedin.com/'
            },
            {
              id: 'I3',
              icon: 'twitter',
              url: 'https://in.linkedin.com/'
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

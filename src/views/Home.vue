<template>
  <div class="container">
    <h1>12 Agile Principles</h1>
    <div>
      <button v-for="index in 12" :key="index" @click="transition(index)" :class="active==index?'active':''">{{index}}</button>
      <transition name="slide">
        <div v-if="AgilePrinciples[0]" class="bound">
          <h3>Satisfy the Customer</h3>
          <p>Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.</p>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="AgilePrinciples[1]" class="bound">
          <h3>Welcome Change</h3>
          <p>Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage. It's hard not to get a wave of despair when thinking about change requests but change is good if you can react to it fast enough. Change means you are getting closer to client needs and that's a good thing.</p>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="AgilePrinciples[2]" class="bound">
          <h3>Deliver Frequently</h3>
          <p>Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale. The sooner you deliver incremental software, the faster the feedback and faster you can identify a wrong turn or a miscommunication with the client.  Would you rather find out earlier when you can do something about it or at the end when a complete rework is required?</p>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="AgilePrinciples[3]" class="bound">
          <h3>Work Together</h3>
          <p>Business people and developers must work together daily throughout the project. It makes sense for the customer to become part of the team.  After all, both the developers and the customers have the same goal; to deliver valuable software.</p>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="AgilePrinciples[4]" class="bound">
          <h3>Build Projects</h3>
          <p>Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done. Agile projects emphasize self-organizing teams who instinctively are able to manage both themselves and the work.  The micromanagement of projects is no longer required or beneficial.</p>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="AgilePrinciples[5]" class="bound">
          <h3>Face-To-Face Time</h3>
          <p>The most efficient and effective method of conveying information to and within a development team is face-to-face conversation. Co-location is the ideal.  Osmotic communication - where you absorb some part of the conversation around whether you are part of the actual conversation or not - is a very real benefit of co-location.  Unfortunately, development teams are often distributed.  If the teams are not co-located, every effort must be made to communicate often and to increase the use of technical communication techniques.</p>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="AgilePrinciples[6]" class="bound">
          <h3>Measure of Progress</h3>
          <p>Working software is the primary measure of progress. When you focus on following the plan you typically get too involved in updating documentation - taking focus off the objective of the project.  When you make working software the primary measure of progress you promote it to the primary focus of the project.</p>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="AgilePrinciples[7]" class="bound">
          <h3>Sustainable Development</h3>
          <p>Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely. Think Work/Life Balance. Remember the end of the project dash?  Everyone worked almost around the clock to get the project finished.  Never mind the impact on quality, how about the impact on the team?  Agile strives to maintain a consistent level of activity which translates to consistent velocity.  One important result is a better ability to forecast.</p>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="AgilePrinciples[8]" class="bound">
          <h3>Continuous Attention</h3>
          <p>Continuous attention to technical excellence and good design enhances agility. While an elegant design is meaningful even more valuable is a solution that will span the test of time.  Perhaps even more importantly a solution that has the ability to be updated to keep it current.  What good is an elegant design if it cannot maintain its value through update and maintenance cycles.</p>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="AgilePrinciples[9]" class="bound">
          <h3>Keep It Simple</h3>
          <p>Simplicity! The art of maximizing the amount of work not done - essential. Of course, the most reliable features are the ones that are not yet built...they can't fail.  But that aside, nearly 30% of the functionality we build is seldom or never used.  Agile is ruthless about cutting functionality that does not lend value. </p>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="AgilePrinciples[10]" class="bound">
          <h3>Organized Teams</h3>
          <p>The best architectures, requirements, and designs emerge from self-organizing teams. Self-organizing teams that are cross functional as well.  Who better to recognize issues before they become real impediments; of course, the people closest to the solution.</p>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="AgilePrinciples[11]" class="bound">
          <h3>Reflect for Effectiveness</h3>
          <p>At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly. We've all been on projects that end with an AAR, After Action Review.  These reviews help the next client but not the one you just finished.  Agile defines several ceremonies and important among those is the Retrospective.  Generally held at the end of each Sprint/Iteration it is a way for teams to catch and improve behaviors before they have a huge, detrimental impact on the project.

To create high-performing teams, agile methodologies value individuals and interactions over processes and tools. All Agile practices, including Agile's 12 Principles, seek to increase communication and collaboration through frequent inspect-and-adapt cycles and consistency of collaborative exchange rooted in a foundation of Agile truth - transparency, trust, respect, and commitment.</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 1,
      AgilePrinciples: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    };
  },
  methods: {
    transition(index) {
      this.AgilePrinciples = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ];
      this.AgilePrinciples.splice(index - 1, 1, true)
      this.active = index
    }
  }
};
</script>

<style>
.container {
  width: 960px;
  margin: auto;
}
div.bound {
  text-align: left;
}
div.bound p{
  line-height: 1.6;
}
.active{
  background: lightgreen;
}
button{
  width: 30px;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.8s;
}
.slide-enter,
.slide-leave-active {
  transition: all 0s;
  opacity: 0;
}
</style>

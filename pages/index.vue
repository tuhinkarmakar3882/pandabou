<template>
  <div class="style-guide">
    <h1>This is a Sample Heading 1</h1>
    <h2>This is a Sample Heading 2</h2>
    <h3>This is a Sample Heading 3</h3>
    <h4>This is a Sample Heading 4</h4>
    <h5>This is a Sample Heading 5</h5>
    <h6>This is a Sample Heading 6</h6>

    <p v-ripple>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut
      consectetur, cum debitis distinctio eius eum ex facere facilis fugiat illo
      officia quidem quos reprehenderit sit tempora, vitae voluptatum! Tenetur.
    </p>

    <hr />

    <h2 class="accent-underline">This is a sample Title</h2>
    <p class="muted">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem
      corporis dolorum eligendi esse eum fugit, in ipsa, necessitatibus non odio
      officiis perferendis provident quia sunt! Ab dolorem illum totam.
      Doloremque dolorum expedita iste maxime mollitia nisi quasi recusandae
      sunt. Atque deserunt, dolor eligendi et fugiat labore mollitia odit
      officiis sint ullam? Assumenda deleniti ipsa, minima nemo nobis quas
      reiciendis.
      <br /><br />
      Commodi, consequuntur distinctio, dolorem, ducimus eaque eligendi facilis
      hic illo inventore ipsa molestias perspiciatis quod tempore? Ad distinctio
      dolor et porro quo reprehenderit sunt. Aliquid atque autem ea iste porro?
      Aliquam aliquid consequuntur exercitationem laborum minima modi numquam
      odio perferendis, repudiandae, suscipit, velit veniam voluptates
      voluptatum! Amet commodi consequuntur et natus nesciunt nostrum quis. Ad
      adipisci magnam quibusdam sit velit.
      <br /><br />
      Dolorem expedita fuga itaque iusto laborum magnam modi nulla quam quod
      ullam! Doloribus eligendi harum illo, in libero officiis quasi recusandae
      rem sunt. Accusamus cum iure non praesentium qui sequi
    </p>

    <p>
      Sometimes,we want to know more, and so you should
      <a href="">Click Here</a>
    </p>

    <blockquote>
      <q
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores
        cupiditate deleniti dolor est ex explicabo fugit minus modi
        necessitatibus, neque nostrum quas qui rem repellat sapiente sed sequi
        unde!</q
      >
      <cite>- Alexander George</cite>
    </blockquote>

    <hr />

    <h3 class="accent-underline">Let's See Some Buttons</h3>
    <section class="buttons">
      <button v-ripple>Default Button</button>
      <button v-ripple class="outlined">Outlined Button</button>
      <button v-ripple class="primary-button">Primary Button</button>
      <button v-ripple class="primary-button-outlined">
        Primary Outlined Button
      </button>
      <button v-ripple class="secondary-button">Secondary Button</button>
      <button v-ripple class="secondary-button-outlined">
        Secondary Outlined Button
      </button>
      <!--      <Dropdown>-->
      <!--        <button>Dropdown Button</button>-->
      <!--        <template #dropdown-options>-->
      <!--          <button v-ripple class="ghost-button">Option Button</button>-->
      <!--          <button v-ripple class="ghost-button">Option Button</button>-->
      <!--          <button v-ripple class="ghost-button">Option Button</button>-->
      <!--          <button v-ripple class="ghost-button">Option Button</button>-->
      <!--        </template>-->
      <!--      </Dropdown>-->
      <button v-ripple class="ghost-button">Ghost Button</button>
    </section>

    <hr />

    <del>Here's some Deleted Text</del>

    <!--    <Card>-->
    <!--      <h6>This is a Card</h6>-->
    <!--      <p class="muted">-->
    <!--        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto-->
    <!--        beatae, minus quae quidem quo suscipit velit voluptatem! Ad deserunt-->
    <!--        esse maiores nihil praesentium vitae! Delectus impedit inventore iusto-->
    <!--        voluptate.-->
    <!--      </p>-->

    <!--      <template #button-area>-->
    <!--        <button v-ripple class="primary-button">Primary Button</button>-->
    <!--        <button v-ripple class="secondary-button-outlined">-->
    <!--          Secondary Button-->
    <!--        </button>-->
    <!--      </template>-->
    <!--    </Card>-->

    <form>
      <h2>Here's a Sample Form</h2>
      <fieldset>
        <legend>Some Unique Title</legend>

        <label for="sample-text">Enter Some text</label>
        <input
          id="sample-text"
          placeholder="One sample text input"
          required
          type="text"
        />

        <label for="sample-email">Enter Some email</label>
        <input
          id="sample-email"
          placeholder="One sample email input"
          type="email"
        />

        <label for="sample-email">Enter Some password</label>
        <input
          id="sample-password"
          placeholder="One sample password input"
          type="password"
        />
      </fieldset>

      <fieldset>
        <legend>Some Other Title</legend>

        <label for="sample-date">Enter Some date</label>
        <input
          id="sample-date"
          placeholder="One sample date input"
          type="date"
        />

        <label for="sample-date">Enter Some color</label>
        <input
          id="sample-color"
          placeholder="One sample color input"
          type="color"
        />

        <label for="sample-number">Enter Some number</label>
        <input
          id="sample-number"
          placeholder="One sample number input"
          type="number"
        />

        <label for="sample-range"
          >Enter Some range
          <input
            id="sample-range"
            max="100"
            min="0"
            placeholder="One sample range input"
            step="any"
            type="range"
          />
        </label>

        <label>
          <input placeholder="One sample radio input" type="radio" />Enter Some
          radio
        </label>

        <label>
          <input placeholder="One sample checkbox input" type="checkbox" />
          Enter Some checkbox
        </label>
      </fieldset>

      <fieldset>
        <legend>Miscellaneous</legend>

        <p>Put your thoughts below</p>
        <textarea placeholder="Type your thoughts" />
      </fieldset>

      <button class="primary-button">Submit Form</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "StyleGuide",
  components: {
    // Dropdown: () => import("~/components/Common/Dropdown"),
    // Card: () => import("~/components/Common/Card"),
  },
};
</script>

<style lang="scss" scoped>
.style-guide {
  padding-inline: var(--spacing-small-2x);

  * + * {
    margin: var(--spacing-small-1x) 0;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-standard-1x);
  }
}
</style>

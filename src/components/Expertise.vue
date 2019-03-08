<template>
  <div class="page page-2">
    <div class="container">
      <h2 class="first-element"><span>{{ $t("expertise.title") }}</span></h2>
      <div class="row">
        <div class="col-sm">
          <h3>{{ $t("expertise.subtitle1") }}</h3>
          <ul class="list-badges">
            <li>HTML5 / CSS3</li>
            <li>Sass / Less</li>
            <li>Javascript / ES6 / jQuery</li>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>Vue.js</li>
            <li>React.js</li>
            <li>AngularJS</li>
            <li>Gulp</li>
            <li>Npm / Yarn</li>
            <li>Adobe Photoshop</li>
            <li>InVision</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>{{ $t("expertise.skill_agile") }}</li>
            <li>{{ $t("expertise.skill_responsive") }}</li>
          </ul>
        </div>
        <div class="col-sm">
          <ul class="list-badges">
            <li>{{ $t("expertise.skill_mobile") }}</li>
            <li>{{ $t("expertise.skill_crossbrowser") }}</li>
            <li>{{ $t("expertise.skill_uiux") }}</li>
          </ul>
          <h3>{{ $t("expertise.subtitle2") }}</h3>
          <ul class="list-badges">
            <li>{{ $t("expertise.skill_unit") }}</li>
            <li>{{ $t("expertise.skill_e2e") }}</li>
            <li>restAPI</li>
            <li>Node.js</li>
            <li>Wordpress</li>
            <li>Twig</li>
            <li>Symfony ({{ $t("expertise.skill_limited") }})</li>
            <li>Adobe Illustrator ({{ $t("expertise.skill_limited") }})</li>
            <li>Adobe Premiere/Adobe After Effects ({{ $t("expertise.skill_limited") }})</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <h3>{{ $t("expertise.subtitle3") }}</h3>
          <dl class="">
            <dt class="">{{ $t("expertise.job4_name") }}</dt>
            <dd class="">
              {{ $t("expertise.job4_desc") }}
              <details>
                <summary>{{ $t("expertise.learn_more") }}</summary>
                <div class="card card-body">
                  {{ $t("expertise.job4_desc2") }}
                </div>
              </details>
            </dd>
          </dl>
          <dl class="">
            <dt class="">{{ $t("expertise.job3_name") }}</dt>
            <dd class="">
              {{ $t("expertise.job3_desc") }}
              <details>
                <summary>{{ $t("expertise.learn_more") }}</summary>
                <div class="card card-body">
                  {{ $t("expertise.job3_desc2") }}
                </div>
              </details>
            </dd>
          </dl>
          <dl class="">
            <dt class="">{{ $t("expertise.job2_name") }}</dt>
            <dd class="">
              {{ $t("expertise.job2_desc") }}
              <details>
                <summary>{{ $t("expertise.learn_more") }}</summary>
                <div class="card card-body">
                  {{ $t("expertise.job2_desc2") }}
                </div>
              </details>
            </dd>
          </dl>
          <dl class="">
            <dt class="">{{ $t("expertise.job1_name") }}</dt>
            <dd class="">
              {{ $t("expertise.job1_desc") }}
              <details>
                <summary>{{ $t("expertise.learn_more") }}</summary>
                <div class="card card-body">
                  {{ $t("expertise.job1_desc2") }}
                </div>
              </details>
            </dd>
          </dl>
        </div>
        <div class="col-sm">
          <h3>{{ $t("expertise.education") }}</h3>
          <dl>
            <dt>{{ $t("expertise.diploma2") }}</dt>
            <dd>{{ $t("expertise.diploma2_desc") }}</dd>
          </dl>
          <dl>
            <dt>{{ $t("expertise.diploma1") }}</dt>
            <dd>{{ $t("expertise.diploma1_desc") }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'expertise',
}
</script>
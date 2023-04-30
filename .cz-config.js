module.exports = {
    types: [
        {
          value: 'feat',
          name: 'feat:       새로운 feature 작업',
        },
        {
          value: 'fix',
          name: 'fix:        버그 수정 등의 hotfix',
        },
        {
          value: 'docs',
          name: 'docs:       .md 파일 등의 문서 변경 사항',
        },
        {
          value: 'style',
          name: 'style:      코드의 의미에 영향을 미치지 않는 변경 사항 (공백, 서식 지정, 세미콜론 누락 등)',
        },
        {
          value: 'refactor',
          name: 'refactor:   버그를 수정하거나 기능을 추가하지 않는 리팩토링 작업',
        },
        {
          value: 'revert',
          name: 'revert:     작업 되돌리기',
        },
        {
          value: 'perf',
          name: 'perf:       성능을 향상시키는 코드 변경',
        },
        {
          value: 'test',
          name: 'test:       누락된 테스트 추가 또는 기존 테스트 수정',
        },
        {
          value: 'chore',
          name: 'chore:      라이브러리 설치 또는 버전업, 설정 파일 변경 등의 작업',
        },
        {
          value: 'build',
          name: 'build:      빌드 시스템 또는 외부 종속성에 영향을 미치는 변경 사항 (yarn, package.json 등)',
        },
        {
          value: 'ci',
          name: 'ci:         CI 구성 파일 및 스크립트에 대한 변경 사항 (circle ci, nginx 등)',
        },
    ],
    allowCustomScopes: true,
    skipQuestions: ['body'],
};

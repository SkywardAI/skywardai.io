# SkywardAI.io

Site for SkywardAI community.

## Building and previewing your site locally

Assuming [Jekyll] and [Bundler] are installed on your computer:

1.  Change your working directory to the root directory of your site.

2.  Run `bundle install`.

3.  Run `bundle exec jekyll serve` to build your site and preview it at `localhost:4000`.

    The built site is stored in the directory `_site`.

## Publishing your built site on a different platform

Just upload all the files in the directory `_site`.


### Modify the GitHub Actions workflow

The GitHub Actions workflow that builds and deploys your site to Github Pages is defined by the `pages.yml` file. You'll need to edit this file to that so that your build and deploy steps look to your `docs` directory, rather than the project root.

1.  Set the default `working-directory` param for the build job.

    ```yaml
    build:
      runs-on: ubuntu-latest
      defaults:
        run:
          working-directory: docs
    ```

2.  Set the `working-directory` param for the Setup Ruby step.

    ```yaml
    - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1'
          bundler-cache: true
          cache-version: 0
          working-directory: '${{ github.workspace }}/docs'
    ```

3.  Set the path param for the Upload artifact step:

    ```yaml
    - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: "docs/_site/"
    ```

4.  Modify the trigger so that only changes within the `docs` directory start the workflow. Otherwise, every change to your project (even those that don't affect the docs) would trigger a new site build and deploy.

    ```yaml
    on:
      push:
        branches:
          - "main"
        paths:
          - "docs/**"
    ```

## Licensing and Attribution

This repository is licensed under the [MIT License]. You are generally free to reuse or extend upon this code as you see fit; just include the original copy of the license (which is preserved when you "make a template"). While it's not necessary, we'd love to hear from you if you do use this template, and how we can improve it for future use!

The deployment GitHub Actions workflow is heavily based on GitHub's mixed-party [starter workflows]. A copy of their MIT License is available in [actions/starter-workflows].

----

[^1]: [It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-your-site).

[Jekyll]: https://jekyllrb.com
[Just the Docs]: https://just-the-docs.github.io/just-the-docs/
[GitHub Pages]: https://docs.github.com/en/pages
[GitHub Pages / Actions workflow]: https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/
[Bundler]: https://bundler.io
[use this template]: https://github.com/just-the-docs/just-the-docs-template/generate
[`jekyll-default-layout`]: https://github.com/benbalter/jekyll-default-layout
[`jekyll-seo-tag`]: https://jekyll.github.io/jekyll-seo-tag
[MIT License]: https://en.wikipedia.org/wiki/MIT_License
[starter workflows]: https://github.com/actions/starter-workflows/blob/main/pages/jekyll.yml
[actions/starter-workflows]: https://github.com/actions/starter-workflows/blob/main/LICENSE

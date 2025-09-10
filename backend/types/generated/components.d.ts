import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSpecItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_spec_items';
  info: {
    description: '';
    displayName: 'Spec Item';
  };
  attributes: {
    category: Schema.Attribute.String;
    parameter: Schema.Attribute.String & Schema.Attribute.Required;
    unit: Schema.Attribute.String;
    value: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_shared_specifications';
  info: {
    description: '';
    displayName: 'Specifications';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.spec-item', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u6280\u672F\u89C4\u683C'>;
  };
}

export interface SharedTable extends Struct.ComponentSchema {
  collectionName: 'components_shared_tables';
  info: {
    displayName: 'Table';
    icon: 'apps';
  };
  attributes: {
    headers: Schema.Attribute.JSON & Schema.Attribute.Required;
    rows: Schema.Attribute.JSON & Schema.Attribute.Required;
    styling: Schema.Attribute.Enumeration<
      ['default', 'striped', 'bordered', 'compact']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    controls: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    poster: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    videoFile: Schema.Attribute.Media<'videos'>;
    youtubeUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.spec-item': SharedSpecItem;
      'shared.specifications': SharedSpecifications;
      'shared.table': SharedTable;
      'shared.video': SharedVideo;
    }
  }
}

config/master.key
config/credentials.yml.enc
Delete those files and then you can generate them with this:

EDITOR="yen --wait" bin/rails credentials:edit
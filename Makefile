
generate-descriptor:
	protoc --descriptor_set_out=./protobuf/lifx.desc protobuf/lifx.proto

deploy-patch:
	npm version patch -m "%s"

test:
	npm test
